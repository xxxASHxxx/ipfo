import '../globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>IPFO</title>
      </head>
      <body>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: 16 }}>
          <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 16 }}>
            <h1 style={{ fontSize: 18 }}>IPFO</h1>
            <a href="/" style={{ fontSize: 14, opacity: 0.8 }}>Dashboard</a>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}


