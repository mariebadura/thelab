// V2 preview copies of the mocked app screens — see components/screens.tsx for
// the live versions and the ground rules (categorical verdicts, no computed
// "you can claim £X" figures, internally consistent numbers).
// V2 copy changes: allowances "Home working" card becomes "Working station",
// year-end drops the "Figures prepared from your year" stage and the
// "12 months captured · 3 items in review" line.

function ScreenBody({ children }: { children: React.ReactNode }) {
  return <div className="flex min-h-0 flex-1 flex-col px-4 pb-5 pt-4 text-ink">{children}</div>;
}

function ScreenTitle({ children }: { children: React.ReactNode }) {
  return <p className="font-heading text-[13px] font-semibold">{children}</p>;
}

// Hero screen: the coach's home — found money and the next nudge.
export function HomeScreen() {
  return (
    <ScreenBody>
      <p className="text-[10px] text-muted">Friday 17 July</p>
      <p className="mt-4 text-[11px] font-medium text-muted">Found &amp; claimed this year</p>
      <p className="mt-1 bg-gradient-to-r from-coral via-pink to-grape bg-clip-text font-heading text-4xl font-bold text-transparent">
        £412
      </p>
      <p className="mt-1 text-[9px] text-muted">Sum of what you&apos;ve logged — nothing estimated</p>
      <div className="mt-4 rounded-card border border-line bg-card p-3 text-[10px]">
        <p className="flex items-center gap-1.5 font-semibold text-warning">
          <span aria-hidden="true">!</span> Annual event exemption unused
        </p>
        <p className="mt-0.5 leading-4 text-muted">
          Up to £150 a head, tax-free — but a cliff edge if you go over.
        </p>
      </div>
      <div className="mt-2 rounded-card border border-line bg-card p-3 text-[10px]">
        <p className="font-semibold">Trivial benefits</p>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-line">
          <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-coral to-pink" />
        </div>
        <p className="mt-1 text-muted">£240 of the £300 cap used · resets 31 Oct</p>
      </div>
      <div className="mt-2 flex justify-between rounded-card border border-line bg-card p-3 text-[10px]">
        <span className="text-muted">Next deadline</span>
        <span className="font-semibold">31 Jul · Accounts</span>
      </div>
      <div className="mt-auto rounded-card bg-coral py-2.5 text-center text-[11px] font-semibold text-white">
        Snap a receipt
      </div>
    </ScreenBody>
  );
}

// Allowances: the personal entitlement set, caps and cliff edges included.
export function AllowancesScreen() {
  return (
    <ScreenBody>
      <ScreenTitle>Your allowances</ScreenTitle>
      <div className="mt-3 rounded-card border border-line bg-card p-3 text-[10px]">
        <p className="flex justify-between font-semibold">
          Trivial benefits <span className="text-coral">£60 left</span>
        </p>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-line">
          <div className="h-full w-[80%] rounded-full bg-coral" />
        </div>
        <p className="mt-1 leading-4 text-muted">£50 max per gift · £300 a year · use by 31 Oct</p>
      </div>
      <div className="mt-2 rounded-card border border-line bg-card p-3 text-[10px]">
        <p className="flex items-center justify-between font-semibold">
          Annual event <span className="font-medium text-warning">unused</span>
        </p>
        <p className="mt-1 leading-4 text-muted">
          £150 a head, tax-free. Go £1 over and the whole event becomes taxable.
        </p>
      </div>
      <div className="mt-2 rounded-card border border-line bg-card p-3 text-[10px]">
        <p className="flex items-center justify-between font-semibold">
          Working station
          <span className="flex items-center gap-1 font-medium text-success">
            <span aria-hidden="true">✓</span> claiming
          </span>
        </p>
        <p className="mt-1 leading-4 text-muted">£6/week flat rate — no receipts needed</p>
      </div>
      <p className="mt-auto text-center text-[9px] text-muted">
        Every rule linked to the HMRC guidance behind it
      </p>
    </ScreenBody>
  );
}

// Capture: photograph a purchase, get a verdict per item.
export function CaptureScreen() {
  const items = [
    { label: "Laptop stand", verdict: "Allowable", tone: "text-success", icon: "✓" },
    { label: "USB-C dock", verdict: "Allowable", tone: "text-success", icon: "✓" },
    { label: "Kettle for home", verdict: "Not allowable", tone: "text-destructive", icon: "✗" },
    { label: "Desk chair", verdict: "Needs review", tone: "text-warning", icon: "⚑" },
  ];
  return (
    <ScreenBody>
      <ScreenTitle>Can I claim this?</ScreenTitle>
      <div className="mt-3 rounded-card border border-line bg-card p-3">
        <p className="text-[10px] text-muted">Receipt · today</p>
        <p className="font-heading text-2xl font-bold">£312.98</p>
        <p className="text-[10px] text-muted">Currys · 4 items</p>
      </div>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-2 rounded-card border border-line bg-card p-2.5 text-[10px]"
          >
            <span className="font-medium">{item.label}</span>
            <span className={`ml-auto flex items-center gap-1 font-semibold ${item.tone}`}>
              <span aria-hidden="true">{item.icon}</span>
              {item.verdict}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-[10px] font-medium text-coral">
        2 of 4 items reduce your corporation tax
      </p>
      <p className="mt-auto text-center text-[9px] text-muted">
        Verdicts cite HMRC guidance — grey areas go to a human
      </p>
    </ScreenBody>
  );
}

// Year end: prepared from the year's capture, human-reviewed.
export function YearEndScreen() {
  const stages = [
    { label: "Accountant review", state: "current" },
    { label: "File", state: "todo" },
  ];
  return (
    <ScreenBody>
      <ScreenTitle>Year end</ScreenTitle>
      <p className="mt-3 font-heading text-3xl font-bold">Ready</p>
      <ul className="mt-4 space-y-2">
        {stages.map((stage) => (
          <li
            key={stage.label}
            className="flex items-center gap-2 rounded-card border border-line bg-card p-2.5 text-[10px]"
          >
            <span
              className={`flex h-4 w-4 items-center justify-center rounded-full text-[8px] ${
                stage.state === "done"
                  ? "bg-success text-white"
                  : stage.state === "current"
                    ? "bg-coral text-white"
                    : "border border-line text-transparent"
              }`}
            >
              {stage.state === "current" ? "…" : "✓"}
            </span>
            <span className={stage.state === "done" ? "text-muted" : "font-medium"}>
              {stage.label}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-3 rounded-card border border-line bg-card p-3 text-[9px] leading-4 text-muted">
        A chartered accountant checks the prepared figures before anything goes to HMRC.
      </div>
      <div className="mt-auto rounded-card bg-coral py-2.5 text-center text-[11px] font-semibold text-white">
        See what&apos;s in review
      </div>
    </ScreenBody>
  );
}

// Deadlines: the company's own dates, in order.
export function DeadlinesScreen() {
  const deadlines = [
    { date: "31 Jul", name: "Annual accounts", to: "Companies House", note: "in 14 days", soon: true },
    { date: "1 Aug", name: "Corporation tax", to: "HMRC", note: "in 15 days", soon: true },
    { date: "31 Oct", name: "CT600 return", to: "HMRC", note: "", soon: false },
    { date: "31 Jan", name: "Self Assessment", to: "HMRC", note: "", soon: false },
  ];
  return (
    <ScreenBody>
      <ScreenTitle>Next up</ScreenTitle>
      <ul className="mt-4 space-y-2.5">
        {deadlines.map((d) => (
          <li key={d.name} className="flex items-center gap-2.5 rounded-card border border-line bg-card p-2.5">
            <span
              className={`flex h-9 w-9 shrink-0 flex-col items-center justify-center rounded-lg text-[8px] font-bold ${
                d.soon ? "bg-coral text-white" : "bg-screen text-muted"
              }`}
            >
              {d.date.split(" ")[0]}
              <span className="text-[7px] font-semibold uppercase">{d.date.split(" ")[1]}</span>
            </span>
            <span className="min-w-0 text-[10px] leading-snug">
              <span className="block font-semibold">{d.name}</span>
              <span className="text-muted">
                {d.to}
                {d.note && <span className="font-medium text-coral"> · {d.note}</span>}
              </span>
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-auto text-center text-[9px] text-muted">
        Worked out from your company&apos;s own dates
      </p>
    </ScreenBody>
  );
}
