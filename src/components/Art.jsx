// Original SVG cover art, one per project, so the portfolio needs no external images.
const frames = {
  video: ['#4f46e5', '#7c3aed'], task: ['#0891b2', '#4f46e5'], blog: ['#c026d3', '#6d28d9'], weather: ['#0ea5e9', '#7c3aed'],
}
export default function Art({ type }) {
  const [a, b] = frames[type]
  const id = `g-${type}`
  return (
    <svg viewBox="0 0 400 240" role="img" aria-label={`${type} project illustration`} className="art">
      <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} /></linearGradient></defs>
      <rect width="400" height="240" fill={`url(#${id})`} />
      {type === 'video' && (<g>
        <rect x="50" y="34" width="300" height="140" rx="12" fill="#0b1220" opacity=".85" />
        <circle cx="200" cy="104" r="30" fill="#fff" /><path d="M192 90l22 14-22 14z" fill="#1d4ed8" />
        <rect x="64" y="158" width="190" height="5" rx="2.5" fill="#fff" opacity=".35" /><rect x="64" y="158" width="90" height="5" rx="2.5" fill="#ef4444" />
        {[0, 1, 2].map(i => <rect key={i} x={50 + i * 104} y="188" width="92" height="38" rx="6" fill="#fff" opacity=".25" />)}
      </g>)}
      {type === 'task' && (<g>
        {['To Do', 'In Progress', 'Done'].map((t, i) => (<g key={t}>
          <rect x={26 + i * 123} y="28" width="116" height="184" rx="10" fill="#fff" opacity=".18" />
          <text x={38 + i * 123} y="52" fill="#fff" fontSize="13" fontWeight="700">{t}</text>
          {[0, 1].slice(0, i === 1 ? 1 : 2).map(j => <rect key={j} x={36 + i * 123} y={66 + j * 52} width="96" height="42" rx="7" fill="#fff" opacity=".9" />)}
          {[0, 1].slice(0, i === 1 ? 1 : 2).map(j => <rect key={'p' + j} x={44 + i * 123} y={76 + j * 52} width="50" height="6" rx="3" fill={['#ef4444', '#f59e0b', '#22c55e'][(i + j) % 3]} />)}
        </g>))}
      </g>)}
      {type === 'blog' && (<g>
        <rect x="70" y="26" width="260" height="188" rx="12" fill="#fff" opacity=".95" />
        <rect x="90" y="46" width="150" height="14" rx="4" fill="#be185d" />
        <rect x="90" y="72" width="220" height="70" rx="6" fill="#e9d5ff" />
        {[0, 1, 2, 3].map(i => <rect key={i} x="90" y={156 + i * 14} width={220 - i * 28} height="6" rx="3" fill="#cbd5e1" />)}
      </g>)}
      {type === 'weather' && (<g>
        <circle cx="140" cy="100" r="42" fill="#fde047" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map(d => <line key={d} x1="140" y1="40" x2="140" y2="28" stroke="#fde047" strokeWidth="6" strokeLinecap="round" transform={`rotate(${d} 140 100)`} />)}
        <g fill="#fff"><circle cx="210" cy="140" r="34" /><circle cx="256" cy="128" r="42" /><circle cx="300" cy="146" r="30" /><rect x="210" y="140" width="120" height="36" rx="18" /></g>
        <text x="40" y="214" fill="#fff" fontSize="40" fontWeight="800">28°C</text>
        <text x="150" y="214" fill="#fff" opacity=".85" fontSize="16">Partly cloudy</text>
      </g>)}
    </svg>
  )
}