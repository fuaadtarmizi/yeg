export default function MarqueeBanner() {
  return (
    <div style={{ background: 'linear-gradient(90deg, #1a4d1a, #2d7a2d, #4caf50)', overflow: 'hidden', padding: '10px 0' }}>
      <div className="marquee-track">
        <span style={{ fontSize: '15px', fontWeight: 500, color: '#fff', whiteSpace: 'nowrap', letterSpacing: '0.03em' }}>
          | MPHU 2026 | MPHU 2026 | MPHU 2026 | MPHU 2026 | MPHU 2026 | MPHU 2026 | MPHU 2026 | MPHU 2026 
        </span>
        <span style={{ fontSize: '15px', fontWeight: 500, color: '#fff', whiteSpace: 'nowrap', letterSpacing: '0.03em' }}>
          | MPHU 2026 | MPHU 2026 | MPHU 2026 | MPHU 2026 | MPHU 2026 | MPHU 2026 | MPHU 2026 | MPHU 2026
        </span>
      </div>
    </div>
  );
}