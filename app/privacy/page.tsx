import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Privacy — The Lab",
  description: "What this waitlist site collects and why.",
};

export default function Privacy() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <Link href="/" className="text-sm text-muted hover:text-ink">
        ← Back
      </Link>
      <h1 className="mt-6 text-3xl font-semibold">Privacy</h1>

      <div className="mt-6 flex flex-col gap-4 leading-7 text-ink">
        <p>
          This site does one thing: it lets you join the waitlist for the app. Here is everything
          it collects and why.
        </p>
        <h2 className="mt-2 text-xl font-semibold">What we collect</h2>
        <p>
          <span className="font-medium">Your email address</span>, if you join the waitlist. It is
          stored with Formspree (our form provider) and used only to tell you about early access
          and the launch. It is never sold or shared for any other purpose.
        </p>
        <p>
          <span className="font-medium">Anonymous visit statistics</span> via GoatCounter — page
          views, referrers, and country. No cookies, no cross-site tracking, no personal profiles.
        </p>
        <h2 className="mt-2 text-xl font-semibold">Your rights</h2>
        <p>
          To be removed from the waitlist, or to ask what we hold about you, email{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-coral hover:underline">
            {siteConfig.contactEmail}
          </a>{" "}
          and it will be deleted. You can also unsubscribe from any email we send in one click.
        </p>
        <p className="text-sm text-muted">
          Data controller: Marie Badura, United Kingdom. This policy will be replaced with a fuller
          one before the app itself launches.
        </p>
      </div>
    </main>
  );
}
