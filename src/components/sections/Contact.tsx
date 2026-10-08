"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { contactSchema, enquiryTypes } from "@/lib/contact";
import { site } from "@/content/site";
import { ExternalLink, Reveal, SectionHeading } from "@/components/ui";

type Status = { state: "idle" | "sending" | "success" | "error"; message?: string };
type Errors = Partial<Record<string, string>>;

const fieldClass =
  "mt-2 w-full border-0 border-b border-ivory/30 bg-transparent px-0 py-3 text-ivory placeholder:text-ivory/40 focus:border-gold focus:ring-0 focus:outline-none aria-[invalid=true]:border-red-300";

export function Contact() {
  const startedAt = useRef(Date.now());
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      organisation: String(fd.get("organisation") ?? ""),
      type: String(fd.get("type") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
      website: String(fd.get("website") ?? ""),
      startedAt: startedAt.current,
    };

    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const fe = parsed.error.flatten().fieldErrors;
      const next = Object.fromEntries(Object.entries(fe).map(([k, v]) => [k, v?.[0]]));
      setErrors(next);
      setStatus({ state: "error", message: "Please check the highlighted fields." });
      const first = Object.keys(next)[0];
      if (first) (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }

    setErrors({});
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Something went wrong.");
      form.reset();
      setStatus({ state: "success", message: "Thank you. Your enquiry has been received and the team will be in touch." });
    } catch (err) {
      setStatus({ state: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  const field = (name: string) => ({
    id: name,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });
  const error = (name: string) =>
    errors[name] && (
      <p id={`${name}-error`} className="mt-2 text-sm text-red-200">
        {errors[name]}
      </p>
    );

  return (
    <section id="connect" aria-labelledby="connect-title" className="bg-charcoal py-24 text-ivory lg:py-36">
      <div className="container-luxe grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            tone="light"
            eyebrow="Connect With Qurat"
            title={
              <span id="connect-title">
                Let&rsquo;s build <span className="italic text-gold-soft">something lasting</span>
              </span>
            }
            intro="For media enquiries, speaking invitations, business collaborations and professional networking, share a few details and the team will respond."
          />
          <Reveal delay={0.1} className="mt-12 space-y-6">
            <ul className="space-y-3 text-ivory/80">
              {enquiryTypes.map((t) => (
                <li key={t} className="flex items-center gap-4">
                  <span aria-hidden className="h-px w-8 bg-gold" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-6 pt-6">
              {site.socials.map((s) => (
                <ExternalLink
                  key={s.href}
                  href={s.href}
                  className="eyebrow text-gold-soft underline-offset-8 hover:underline"
                >
                  {s.label}
                </ExternalLink>
              ))}
              <ExternalLink href={site.companyUrl} className="eyebrow text-gold-soft underline-offset-8 hover:underline">
                DRE Homes
              </ExternalLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-7">
          <form onSubmit={onSubmit} noValidate className="grid gap-8 bg-white/[0.03] p-6 ring-1 ring-ivory/10 sm:grid-cols-2 sm:p-10">
            <div>
              <label htmlFor="name" className="eyebrow text-ivory/70">
                Full name <span aria-hidden>*</span>
              </label>
              <input {...field("name")} type="text" autoComplete="name" required className={fieldClass} />
              {error("name")}
            </div>
            <div>
              <label htmlFor="email" className="eyebrow text-ivory/70">
                Email <span aria-hidden>*</span>
              </label>
              <input {...field("email")} type="email" autoComplete="email" required className={fieldClass} />
              {error("email")}
            </div>
            <div>
              <label htmlFor="organisation" className="eyebrow text-ivory/70">
                Organisation
              </label>
              <input {...field("organisation")} type="text" autoComplete="organization" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="type" className="eyebrow text-ivory/70">
                Enquiry type <span aria-hidden>*</span>
              </label>
              <select {...field("type")} required defaultValue="" className={`${fieldClass} [&>option]:text-charcoal`}>
                <option value="" disabled>
                  Select&hellip;
                </option>
                {enquiryTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              {error("type")}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="eyebrow text-ivory/70">
                Message <span aria-hidden>*</span>
              </label>
              <textarea {...field("message")} rows={5} required className={`${fieldClass} resize-y`} />
              {error("message")}
            </div>
            <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="sm:col-span-2">
              <label className="flex items-start gap-3 text-sm text-ivory/75">
                <input
                  {...field("consent")}
                  type="checkbox"
                  className="mt-1 h-4 w-4 shrink-0 accent-[#b8975a]"
                />
                <span>
                  I agree that my details will be used to respond to this enquiry, as described in the{" "}
                  <Link href="/privacy" className="text-gold-soft underline underline-offset-4">
                    privacy policy
                  </Link>
                  .
                </span>
              </label>
              {error("consent")}
            </div>
            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status.state === "sending"}
                className="bg-ivory px-8 py-4 text-[0.78rem] font-semibold tracking-[0.2em] text-charcoal uppercase transition-colors duration-500 hover:bg-gold-soft disabled:opacity-60"
              >
                {status.state === "sending" ? "Sending…" : "Send Enquiry"}
              </button>
              <p
                role="status"
                aria-live="polite"
                className={`text-sm ${status.state === "success" ? "text-gold-soft" : "text-red-200"}`}
              >
                {status.message}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
