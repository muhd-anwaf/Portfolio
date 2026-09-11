import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ alignItems: 'center', background: '#080A0C', color: '#F2F4F5', display: 'flex', height: '100%', padding: '72px', width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '920px' }}>
        <div style={{ color: '#7EE787', display: 'flex', fontSize: 25, fontWeight: 700, letterSpacing: 5 }}>MUHAMMED ANWAF · BACKEND ENGINEER</div>
        <div style={{ display: 'flex', fontSize: 78, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05, marginTop: 32 }}>Reliable systems, from design to deployment.</div>
        <div style={{ color: '#89929B', display: 'flex', fontSize: 30, marginTop: 34 }}>Java · Spring Boot · APIs · Databases</div>
      </div>
    </div>, size,
  );
}
