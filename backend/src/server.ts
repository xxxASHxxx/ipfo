import 'dotenv/config';
import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import pino from 'pino';
import { Server } from 'socket.io';
import { createServer } from 'http';
import { auth } from './api/auth';
import { health } from './api/health';

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

const app = new Hono();

app.route('/auth', auth);
app.route('/health', health);

app.notFound((c) => c.json({ error: { code: 'NOT_FOUND', message: 'Route not found' } }, 404));
app.onError((err, c) => {
  logger.error({ err }, 'Unhandled error');
  return c.json({ error: { code: 'INTERNAL_ERROR', message: 'Internal Server Error' } }, 500);
});

const port = Number(process.env.PORT || 8000);

const httpServer = createServer();

// Start Hono server on existing httpServer
serve({ fetch: app.fetch, port, server: httpServer });

// Attach Socket.IO
const io = new Server(httpServer, { cors: { origin: '*'} });
io.on('connection', (socket) => {
  logger.info({ id: socket.id }, 'client connected');
  socket.on('disconnect', () => logger.info({ id: socket.id }, 'client disconnected'));
});

logger.info({ port }, 'backend listening');


