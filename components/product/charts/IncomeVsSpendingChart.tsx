export default function IncomeVsSpendingChart() {
  return (
    <svg
      className="block w-full"
      height="160"
      viewBox="0 0 480 160"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="gFill2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D8A66D" stopOpacity=".3" />
          <stop offset="100%" stopColor="#D8A66D" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Gridlines */}
      <line x1="0" y1="40" x2="480" y2="40" stroke="#E8E0D0" strokeDasharray="2 4" />
      <line x1="0" y1="80" x2="480" y2="80" stroke="#E8E0D0" strokeDasharray="2 4" />
      <line x1="0" y1="120" x2="480" y2="120" stroke="#E8E0D0" strokeDasharray="2 4" />
      {/* Income fill + line */}
      <path d="M0 60 L60 50 L120 56 L180 38 L240 44 L300 30 L360 34 L420 22 L480 28 L480 160 L0 160 Z" fill="url(#gFill2)" />
      <path d="M0 60 L60 50 L120 56 L180 38 L240 44 L300 30 L360 34 L420 22 L480 28" stroke="#B98400" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Spending dashed line */}
      <path d="M0 100 L60 96 L120 110 L180 88 L240 92 L300 80 L360 86 L420 76 L480 82" stroke="#11304A" strokeWidth="2" fill="none" strokeDasharray="4 3" strokeLinecap="round" />
      {/* X labels */}
      <g fontFamily="JetBrains Mono" fontSize="9" fill="#6B7280">
        <text x="0" y="156">W1</text>
        <text x="120" y="156">W2</text>
        <text x="240" y="156">W3</text>
        <text x="360" y="156">W4</text>
      </g>
    </svg>
  );
}
