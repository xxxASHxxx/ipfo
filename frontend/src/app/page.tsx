'use client';
import { useEffect, useState } from 'react';

export default function Page() {
  const [health, setHealth] = useState<any>(null);
  useEffect(() => {
    const url = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000') + '/health';
    fetch(url).then(r => r.json()).then(setHealth).catch(() => setHealth({ status: 'unavailable' }));
  }, []);
  return (
    <main>
      <h2 style={{ fontSize: 16, marginBottom: 8 }}>Dashboard</h2>
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 12 }}>
          <div style={{ fontWeight: 600 }}>Backend health</div>
          <div style={{ opacity: 0.8, fontSize: 14 }}>{health ? JSON.stringify(health) : 'Loading...'}</div>
        </div>
      </div>
    </main>
  );
}


