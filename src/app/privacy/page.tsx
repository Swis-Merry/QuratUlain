import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How enquiries submitted through the Qurat Ul Ain website are handled.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <main id="main" className="container-luxe max-w-3xl py-24 lg:py-32">
        <Link href="/" className="eyebrow text-champagne-dark hover:underline">
          &larr; Back to home
        </Link>
        <h1 className="mt-8 font-serif text-5xl text-charcoal sm:text-6xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-charcoal/60">Draft for stakeholder and legal review.</p>
        <div className="mt-12 space-y-8 leading-relaxed text-charcoal/80 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:text-charcoal">
          <section>
            <h2>Information we collect</h2>
            <p className="mt-3">
              When you submit the enquiry form we collect your name, email address, organisation (optional), enquiry type and
              message. We do not use advertising cookies or third-party tracking on this website.
            </p>
          </section>
          <section>
            <h2>How we use it</h2>
            <p className="mt-3">
              Your details are used solely to review and respond to your enquiry. They are delivered by email to the office of Qurat
              Ul Ain and are not sold or shared for marketing purposes.
            </p>
          </section>
          <section>
            <h2>Retention</h2>
            <p className="mt-3">Enquiries are retained only as long as necessary to respond and maintain a record of correspondence.</p>
          </section>
          <section>
            <h2>Your rights</h2>
            <p className="mt-3">
              You may request access to, correction of, or deletion of your personal data at any time by replying to any
              correspondence you receive from us.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
