import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for the Bodo Research Memorial platform.',
};

export default function PrivacyPage() {
  return (
    <section className="container-institutional section-padding">
      <h1 className="text-4xl font-heading mb-6">Privacy Policy</h1>
      <p className="text-text-secondary mb-4">Last updated: April 19, 2026</p>

      <div className="space-y-6 text-text-secondary">
        <p>
          Bodo Research Memorial processes limited data needed for account access,
          editorial workflows, and platform security.
        </p>
        <p>
          Data may include account fields, submitted content metadata, and
          technical security logs such as IP/rate-limit/audit signals.
        </p>
        <p>
          For privacy requests, contact: contact@bodoresearch.org
        </p>
        <p>
          This page is a baseline policy and should be reviewed by legal counsel
          before public production launch in regulated jurisdictions.
        </p>
      </div>
    </section>
  );
}
