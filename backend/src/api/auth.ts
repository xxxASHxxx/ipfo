import { Hono } from 'hono';
import { sign } from 'jsonwebtoken';

export const auth = new Hono();

auth.post('/login', async (c) => {
  try {
    const { email, password } = await c.req.json<{ email?: string; password?: string }>();
    if (!email || !password) {
      return c.json({ error: { code: 'BAD_REQUEST', message: 'email and password required' } }, 400);
    }
    if (!(email === 'demo@example.com' && password === 'demo123')) {
      return c.json({ error: { code: 'UNAUTHORIZED', message: 'Invalid credentials' } }, 401);
    }
    const token = sign(
      { sub: 'demo-user-id', email },
      process.env.JWT_SECRET || 'dev-secret-change-in-production',
      { expiresIn: '7d' }
    );
    return c.json({ accessToken: token });
  } catch (e) {
    return c.json({ error: { code: 'BAD_REQUEST', message: 'Invalid JSON' } }, 400);
  }
});


