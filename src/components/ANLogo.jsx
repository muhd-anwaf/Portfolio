export default function ANLogo({ className = '' }) {
  return (
    <svg className={`an-logo ${className}`} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M5.5 31 13.5 8.5 21.5 31M9 22.5h9" />
      <path d="M21.5 31V8.5L34.5 31V8.5" />
    </svg>
  );
}
