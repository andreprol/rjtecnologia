export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <rect width="34" height="34" rx="9" fill="url(#rj-logo-gradient)" />
        <path
          d="M9 24V10h7.2c2.8 0 4.6 1.6 4.6 4.1 0 1.9-1 3.2-2.6 3.7l2.9 6.2h-3.3l-2.6-5.7H12v5.7H9Zm3-8.2h3.6c1.2 0 1.9-.7 1.9-1.7s-.7-1.7-1.9-1.7H12v3.4Z"
          fill="#05070d"
        />
        <path d="M24 10h3v9.4c0 3.1-1.8 4.9-4.8 4.9-1.5 0-2.7-.5-3.6-1.4l1.5-2.1c.6.6 1.2.9 1.9.9 1.2 0 2-.7 2-2.3V10Z" fill="#05070d" />
        <defs>
          <linearGradient id="rj-logo-gradient" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22d3ee" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-semibold tracking-tight text-lg text-foreground">
        RJ <span className="text-accent">Tecnologia</span>
      </span>
    </div>
  );
}
