import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const revalidate = 0;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #071A33 0%, #0B2445 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px',
        }}
      >
        <div
          style={{
            color: '#FFFFFF',
            fontSize: 64,
            fontWeight: 600,
            letterSpacing: '-0.02em',
          }}
        >
          QuantumFuze
        </div>
        <div
          style={{
            color: '#38BDF8',
            fontSize: 32,
            marginTop: 16,
            fontWeight: 400,
          }}
        >
          Your growth partner for everything digital
        </div>
        <div
          style={{
            color: '#94A3B8',
            fontSize: 20,
            marginTop: 24,
          }}
        >
          quantumfuze.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
