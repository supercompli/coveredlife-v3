import { ImageResponse } from 'next/og';

export const socialCardAlt = 'CoveredLife | Life Insurance. Quoted Instantly.';
export const socialCardSize = { width: 1200, height: 630 };

// Brand colours: indigo-600 badge, indigo-950 → indigo-700 backdrop, orange-500 accent
export function renderSocialCard() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 80px',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 55%, #4338ca 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: 88,
              height: 88,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
            }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12.5l4.5 4.5L19 7.5"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div style={{ marginLeft: 28, fontSize: 52, fontWeight: 700, letterSpacing: -1 }}>CoveredLife</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 64, fontSize: 64, fontWeight: 700, lineHeight: 1.15 }}>
          <div>Life Insurance.</div>
          <div style={{ color: '#f97316' }}>Quoted Instantly.</div>
        </div>

        <div style={{ marginTop: 32, fontSize: 28, color: '#c7d2fe' }}>
          No obligation · Chronic conditions welcome
        </div>

        <div style={{ display: 'flex', marginTop: 56 }}>
          <div
            style={{
              padding: '14px 28px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.25)',
              background: 'rgba(255,255,255,0.1)',
              fontSize: 26,
              color: '#e0e7ff',
            }}
          >
            coveredlife.co.za
          </div>
        </div>
      </div>
    ),
    { ...socialCardSize }
  );
}
