import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import PhoneFrame from "@/components/PhoneFrame";
import {
  HomeScreen,
  AllowancesScreen,
  CaptureScreen,
  YearEndScreen,
  DeadlinesScreen,
} from "@/components/screens";
import { siteConfig } from "@/site.config";

const features = [
  {
    title: "Allowances found for you",
    body: "A few questions about how you work unlock the entitlements that apply to you — with warnings before you hit a cap and reminders before use-it-or-lose-it dates pass.",
    screen: <AllowancesScreen />,
  },
  {
    title: "Every purchase answered",
    body: "Photograph a receipt and each item gets a verdict — claimable, not claimable, or flagged for review.",
    screen: <CaptureScreen />,
  },
  {
    title: "Year-end prepared, reviewed, done",
    body: "Twelve months of clean data becomes your prepared year-end — checked by a chartered accountant before anything goes to HMRC.",
    screen: <YearEndScreen />,
  },
];

const steps = [
  {
    title: "Snap what you tap",
    body: "Photograph a receipt and let the app categorise what is allowable. No spreadsheets and bookkeeping homework.",
  },
  {
    title: "Reminders on what you're missing",
    body: "The app flags what you might miss.",
  },
  {
    title: "Year-end, already done",
    body: "The data you captured all year becomes your prepared year-end figures, reviewed by your accountant before filing.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">{children}</p>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:py-24">
        {/* Hero — copy + signup left, the app itself right */}
        <section className="grid items-center gap-14 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="font-heading text-2xl font-semibold text-coral">In the lab currently //</p>
            <h1 className="mt-8 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              The expense tracker that doesn&apos;t leave money on the table.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
              The app for solopreneurs that makes sure you&apos;re not missing out.
            </p>
            <div className="mt-8 max-w-xl">
              <WaitlistForm />
              <p className="mt-3 text-sm text-muted">
                Takes 5 seconds. You&apos;ll be the first to know.
              </p>
            </div>
          </div>
          <div className="relative mx-auto w-[250px] sm:w-[270px]">
            <div
              aria-hidden="true"
              className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-coral via-pink to-grape opacity-25 blur-3xl"
            />
            <PhoneFrame>
              <HomeScreen />
            </PhoneFrame>
          </div>
        </section>

        {/* The wedge moment */}
        <section className="mt-24 max-w-3xl">
          <Eyebrow>The money you&apos;re leaving on the table</Eyebrow>
          <p className="mt-4 max-w-xl leading-7 text-muted">
            The rules are public but HMRC doesn&apos;t put them in your wallet. The app answers
            the questions you actually have and collects the receipts.
          </p>
          <a href="#waitlist" className="mt-6 inline-block font-medium text-coral hover:opacity-80">
            Sign up to be the first to test →
          </a>
        </section>

        {/* How it works — three steps */}
        <section className="mt-24">
          <h2 className="text-3xl font-semibold">How it works</h2>
          <ol className="mt-10 grid gap-10 sm:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="font-heading text-4xl font-bold text-coral" aria-hidden="true">
                  {index + 1}
                </span>
                <h3 className="mt-3 font-semibold leading-snug">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Features — each with its screen */}
        <section className="mt-24">
          <Eyebrow>What&apos;s in the app</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold">Judgment on what you buy, proaction on what you&apos;re owed</h2>
          <div className="mt-10 grid gap-12 sm:grid-cols-3 sm:gap-6 lg:gap-10">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <div className="mx-auto w-[210px]">
                  <PhoneFrame>{feature.screen}</PhoneFrame>
                </div>
                <h3 className="mt-6 font-semibold leading-snug">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{feature.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Deadlines — phone + copy */}
        <section className="mt-24 grid items-center gap-14 lg:grid-cols-[auto_1fr]">
          <div className="relative order-last mx-auto w-[230px] lg:order-first">
            <PhoneFrame>
              <DeadlinesScreen />
            </PhoneFrame>
          </div>
          <div>
            <p className="max-w-xl leading-7 text-muted">
              CT600, corporation tax payment, accounts, confirmation statement, Self Assessment —
              worked out from your company&apos;s own dates and pushed to your phone before they
              bite. It&apos;s an app in your pocket, not a portal you forget to log into.
            </p>
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="mt-24 scroll-mt-8 max-w-3xl">
          <Eyebrow>Early access</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold">Be first in line</h2>
          <p className="mt-3 max-w-xl leading-7 text-muted">
            The app launches on iPhone first, Android close behind. Join the waitlist and
            you&apos;ll get early access before anyone else — one email when it&apos;s your turn,
            nothing more.
          </p>
          <div className="mt-6">
            <WaitlistForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Marie Badura. The Lab.</p>
          <p className="flex gap-4">
            <Link href="/privacy" className="hover:text-ink">
              Privacy
            </Link>
            <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-ink">
              Contact
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
