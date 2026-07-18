"use client";

import { useState } from "react";
import { siteConfig } from "@/site.config";

type Status = "idle" | "submitting" | "success" | "error";

declare global {
  interface Window {
    goatcounter?: { count: (opts: { path: string; event: boolean }) => void };
  }
}

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Honeypot: bots fill the hidden field, humans never see it.
    const honeypot = new FormData(event.currentTarget).get("company_website");
    if (honeypot) return;

    setStatus("submitting");
    try {
      const response = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error(`Formspree responded ${response.status}`);
      setStatus("success");
      window.goatcounter?.count({ path: "waitlist-submit", event: true });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-card border border-success bg-card p-4 text-success" role="status">
        You&apos;re on the list — first in line when it launches.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* One white card holding input + button — house design, never browser default. */}
      <div className="flex flex-col gap-2 rounded-card border border-line bg-card p-2 shadow-[0_12px_32px_-16px_rgba(17,17,17,0.18)] transition-colors focus-within:border-coral focus-within:ring-2 focus-within:ring-coral/25 sm:flex-row sm:items-center">
        <label className="sr-only" htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@superstar.co.uk"
          className="h-11 min-w-0 flex-1 appearance-none rounded-[8px] border-0 bg-transparent px-3.5 text-base text-ink outline-none placeholder:text-muted"
        />
        <input
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="h-11 shrink-0 rounded-[8px] bg-coral px-6 font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-40"
        >
          {status === "submitting" ? "Joining…" : "Join the waitlist"}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-sm text-destructive" role="alert">
          Something went wrong — please try again.
        </p>
      )}
    </form>
  );
}
