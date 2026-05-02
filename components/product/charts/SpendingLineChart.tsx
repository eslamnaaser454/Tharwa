export default function SpendingLineChart() {
  return (
    <svg
      className="block h-[120px] w-full"
      viewBox="0 0 320 120"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="gFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D8A66D" stopOpacity=".35" />
          <stop offset="100%" stopColor="#D8A66D" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 80 L0 86 L40 78 L72 84 L110 60 L150 64 L188 42 L226 50 L264 30 L300 38 L320 28 L320 120 L0 120 Z"
        fill="url(#gFill)"
      />
      <path
        d="M0 86 L40 78 L72 84 L110 60 L150 64 L188 42 L226 50 L264 30 L300 38 L320 28"
        stroke="#B98400"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="800"
        style={{ animation: "draw 2.4s cubic-bezier(.2,.8,.2,1) .4s forwards" }}
      />
      <circle cx="110" cy="60" r="3.5" fill="#fff" stroke="#B98400" strokeWidth="2" />
      <circle cx="226" cy="50" r="3.5" fill="#fff" stroke="#B98400" strokeWidth="2" />
      <circle cx="300" cy="38" r="3.5" fill="#fff" stroke="#B98400" strokeWidth="2" />
    </svg>
  );
}
