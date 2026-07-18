import type { Metadata } from "next";
import PhoneFrame from "@/components/PhoneFrame";
import {
  HomeScreen,
  AllowancesScreen,
  CaptureScreen,
  YearEndScreen,
  DeadlinesScreen,
} from "@/components/screens";

// Internal gallery for picking which mockups go on the landing page. Not linked anywhere.
export const metadata: Metadata = {
  title: "Screen gallery (internal)",
  robots: { index: false, follow: false },
};

const screens = [
  { name: "Home (hero)", note: "in use — hero", screen: <HomeScreen /> },
  { name: "Allowances", note: "in use — feature 1", screen: <AllowancesScreen /> },
  { name: "Capture", note: "in use — feature 2", screen: <CaptureScreen /> },
  { name: "Year end", note: "in use — feature 3", screen: <YearEndScreen /> },
  { name: "Deadlines", note: "in use — deadlines section", screen: <DeadlinesScreen /> },
];

export default function ScreenGallery() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Screen gallery</h1>
      <p className="mt-2 text-muted">
        Every mocked app screen. Swap them in <code>app/page.tsx</code> — the hero uses one, the
        feature cards use three.
      </p>
      <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {screens.map(({ name, note, screen }) => (
          <div key={name}>
            <div className="mx-auto w-[210px]">
              <PhoneFrame>{screen}</PhoneFrame>
            </div>
            <p className="mt-4 text-center font-semibold">{name}</p>
            <p className="text-center text-sm text-muted">{note}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
