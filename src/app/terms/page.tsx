import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for the Bodo Research Memorial platform.',
};

export default function TermsPage() {
  return (
    <section className="container-institutional section-padding">
      <h1 className="text-4xl font-heading mb-6">Terms of Use</h1>
      <p className="text-text-secondary mb-4">Last updated: April 19, 2026</p>

      <div className="space-y-6 text-text-secondary">
        <p>
          By using this platform, you agree to lawful use and respectful conduct.
        </p>
        <p>
          You may not attempt unauthorized access, submit malicious content, or
          misrepresent historical sources.
        </p>
        <p>
          Content is provided for research and informational purposes and may be
          revised through editorial review.
        </p>
        <p>
          For legal questions, contact: contact@bodoresearch.org
        </p>
      </div>
    </section>
  );
}
