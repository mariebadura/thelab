// V2 preview copy of components/PhoneFrame.tsx — adds the Wi-Fi symbol so the
// status bar shows signal, Wi-Fi, and battery together. The live site keeps
// using components/PhoneFrame.tsx.
export default function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[44px] border-[10px] border-ink bg-ink shadow-[0_24px_60px_-20px_rgba(17,17,17,0.35)] ${className}`}
    >
      <div className="relative flex aspect-[9/19] flex-col overflow-hidden rounded-[34px] bg-screen">
        {/* Dynamic island */}
        <div className="absolute left-1/2 top-2.5 z-10 h-[22px] w-[88px] -translate-x-1/2 rounded-full bg-ink" />
        {/* Status bar: signal, Wi-Fi, battery */}
        <div className="flex items-center justify-between px-6 pt-3.5 text-[10px] font-semibold text-ink">
          <span>9:41</span>
          <span className="flex items-end gap-[2px]" aria-hidden="true">
            <span className="h-1 w-[3px] rounded-sm bg-ink" />
            <span className="h-1.5 w-[3px] rounded-sm bg-ink" />
            <span className="h-2 w-[3px] rounded-sm bg-ink" />
            <svg viewBox="0 0 16 12" className="ml-1 h-[9px] w-[13px] text-ink">
              <path
                d="M1.5 4.3a9.4 9.4 0 0 1 13 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M4.2 7a5.6 5.6 0 0 1 7.6 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <circle cx="8" cy="10.2" r="1.5" fill="currentColor" />
            </svg>
            <span className="ml-1 flex h-2 w-4 items-center rounded-[3px] border border-ink p-px">
              <span className="h-full w-[70%] rounded-[1px] bg-ink" />
            </span>
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
