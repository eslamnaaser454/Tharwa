export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="22"
      viewBox="0 0 60 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="6" cy="18" r="4" stroke="#D8A66D" strokeWidth="2.4" />
      <circle cx="22" cy="6" r="4" stroke="#D8A66D" strokeWidth="2.4" />
      <circle cx="38" cy="22" r="4" stroke="#D8A66D" strokeWidth="2.4" />
      <circle cx="54" cy="14" r="4" stroke="#D8A66D" strokeWidth="2.4" />
      <path
        d="M10 16 L18 8 M26 8 L34 20 M42 22 L50 16"
        stroke="#D8A66D"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
