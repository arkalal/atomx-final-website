"use client";

import React from "react";
import LegalPageLayout from "../../../components/LegalPageLayout/LegalPageLayout";

const privacySections = [
  {
    number: "01",
    title: "Scope & Who This Applies To",
    content: (
      <>
        <p>This Policy applies to:</p>
        <ul className="legal-list">
          <li>
            Event attendees, guests and customers who use AtomX cashless
            payments (wristbands, cards, QR).
          </li>
          <li>
            Event organisers, venue owners and vendors who engage AtomX
            services.
          </li>
          <li>
            Visitors to atomx.in and related subdomains, and users of our demos,
            forms and support channels.
          </li>
          <li>Job applicants and business contacts.</li>
        </ul>
        <p>
          If you are an organiser or vendor using our services, separate
          contractual terms will supplement this policy (data processors /
          controllers responsibilities).
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Personal Data We Collect",
    content: (
      <>
        <p>
          We only collect data necessary to run events and operate our platform.
          Typical categories:
        </p>
        <p className="legal-section-body-title">Identity & Contact</p>
        <p>
          Name, job title, business name, email, telephone, postal address for
          demo requests, contracts, vendor onboarding, and support.
        </p>
        <p className="legal-section-body-title">Event Attendee Data</p>
        <p>
          Wristband/card IDs, optional profile (name, email, phone if provided),
          top-up history, purchase history, consumption categories,
          session/check-in timestamps, and QR code validation logs.
        </p>
        <p className="legal-section-body-title">Financial & Transactional</p>
        <p>
          Payment instrument token (not raw card data), payer name, transaction
          amounts, refunds, vendor settlement details. (We use PCI-compliant
          payment processors; AtomX does not store full card numbers.)
        </p>
        <p className="legal-section-body-title">Device & Technical</p>
        <p>
          IP address, browser/device type, cookies and tracking identifiers,
          geolocation where explicitly provided (for logistics), system logs,
          and event device telemetry.
        </p>
        <p className="legal-section-body-title">Communications</p>
        <p>
          Messages you send to us (email, chat, support tickets), meeting notes,
          and marketing preferences.
        </p>
        <p className="legal-section-body-title">Recruitment / Business</p>
        <p>CVs, professional references, billing and company details.</p>
      </>
    ),
  },
  {
    number: "03",
    title: "How We Collect Data",
    content: (
      <ul className="legal-list">
        <li>
          <strong>Directly from you:</strong> demo/contact forms, onboarding,
          support, KYC for vendors.
        </li>
        <li>
          <strong>From organisers:</strong> event attendee lists (where
          provided) and vendor setup files.
        </li>
        <li>
          <strong>From devices & systems:</strong> wristband readers, POS
          terminals, access points, kiosks, and dashboards.
        </li>
        <li>
          <strong>From third parties:</strong> payment processors, marketing
          platforms (when you opt in), and analytics providers.
        </li>
        <li>
          <strong>Automatically:</strong> cookies, analytics, server logs.
        </li>
      </ul>
    ),
  },
  {
    number: "04",
    title: "Purposes for Processing & Lawful Basis",
    content: (
      <>
        <p>We process personal data for specific, limited purposes:</p>
        <p className="legal-section-body-title">To Provide the Service</p>
        <p>
          Process payments, handle top-ups/refunds and vendor settlements.
          Validate tickets and control access at gates. Reconcile transactions
          and generate vendor/organiser reports.
        </p>
        <p>
          <em>(Lawful basis: contract performance, legitimate interests)</em>
        </p>
        <p className="legal-section-body-title">To Communicate and Support</p>
        <p>Respond to demo requests, customer support, onboarding.</p>
        <p>
          <em>
            (Lawful basis: contract performance, legitimate interests, consent
            for marketing)
          </em>
        </p>
        <p className="legal-section-body-title">To Improve Products & Safety</p>
        <p>
          Aggregate analytics, fraud detection, operational monitoring and
          product improvement.
        </p>
        <p>
          <em>
            (Lawful basis: legitimate interests; anonymised data used where
            possible)
          </em>
        </p>
        <p className="legal-section-body-title">To Comply with Law</p>
        <p>
          Retain records for accounting, audit, tax and regulatory purposes;
          respond to lawful requests.
        </p>
        <p>
          <em>(Lawful basis: legal obligation)</em>
        </p>
        <p className="legal-section-body-title">For Marketing (Optional)</p>
        <p>
          Send product updates, event recommendations and newsletters where you
          consent to receive them.
        </p>
        <p>
          <em>(Lawful basis: consent / legitimate interest where allowed)</em>
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Cookies & Tracking",
    content: (
      <>
        <p>
          We use cookies and similar technologies on atomx.in to operate the
          site and measure usage.
        </p>
        <ul className="legal-list">
          <li>
            <strong>Essential cookies</strong> — required for site functionality
            (forms, session).
          </li>
          <li>
            <strong>Analytics cookies</strong> — aggregated usage data to
            improve the site and product.
          </li>
          <li>
            <strong>Marketing cookies</strong> — used only with consent for
            advertising and remarketing.
          </li>
        </ul>
        <p>
          You can manage cookie preferences via the cookie banner or browser
          settings. Disabling analytics cookies won&apos;t prevent you from
          using the site but will reduce personalised experiences.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Sharing & Disclosure",
    content: (
      <>
        <p>
          We share personal data only as necessary and under strict controls:
        </p>
        <p className="legal-section-body-title">
          Service Providers & Processors
        </p>
        <p>
          Payment processors (PCI-compliant), cloud hosting, analytics, CRM,
          email and communications providers. These parties act under contract
          and only process data to provide their services.
        </p>
        <p className="legal-section-body-title">Event Customers</p>
        <p>
          Organisers and vendors receive transactional data for vendor
          settlement and event reporting. Organisers may receive anonymised
          attendee insights unless attendees have explicitly consented to share
          contact details.
        </p>
        <p className="legal-section-body-title">Legal & Safety</p>
        <p>
          Where required by law, subpoena, or to protect legal rights, safety,
          or security.
        </p>
        <p className="legal-section-body-title">Business Transfers</p>
        <p>
          In a sale or merger, personal data may be transferred as part of
          business assets. We will notify affected users where required.
        </p>
        <p>
          <strong>
            We never sell personal data for third-party advertising.
          </strong>
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Data Retention",
    content: (
      <>
        <p>
          We retain personal data only as long as necessary for the purpose
          collected, and to meet legal, accounting and security obligations.
        </p>
        <p>Typical retention periods (may vary by contract / law):</p>
        <ul className="legal-list">
          <li>
            <strong>Demo / sales leads:</strong> up to 3 years after last
            contact (unless you request deletion).
          </li>
          <li>
            <strong>Event transactional records and vendor settlements:</strong>{" "}
            retention in line with accounting/tax laws (commonly 6–7 years) or
            as required by contract.
          </li>
          <li>
            <strong>Analytics & aggregated logs:</strong> retained in aggregated
            or anonymised form; raw logs for operational troubleshooting are
            retained for a limited period (e.g., 90–365 days).
          </li>
          <li>
            <strong>Marketing:</strong> until you withdraw consent.
          </li>
        </ul>
        <p>
          If you request deletion, we will remove your personal data unless we
          are legally required to keep it.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Your Rights",
    content: (
      <>
        <p>Depending on local law, you may have the right to:</p>
        <ul className="legal-list">
          <li>Access the personal data we hold about you.</li>
          <li>Correct inaccuracies (rectification).</li>
          <li>
            Request deletion (right to be forgotten) subject to legal or
            contractual exceptions.
          </li>
          <li>Port your data in a machine-readable form (data portability).</li>
          <li>
            Restrict or object to processing (including direct marketing).
          </li>
          <li>Withdraw consent at any time for marketing.</li>
          <li>Lodge a complaint with a data protection authority.</li>
        </ul>
        <p>
          To exercise any right, contact{" "}
          <a href="mailto:dataprotection@atomx.in">dataprotection@atomx.in</a>.
          We will respond within the time frame required by applicable law.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "How We Protect Data",
    content: (
      <>
        <p>
          We maintain administrative, technical and physical safeguards to
          protect personal data from unauthorized access, loss or misuse,
          including:
        </p>
        <ul className="legal-list">
          <li>Encryption at rest and in transit where appropriate.</li>
          <li>Network and application security monitoring.</li>
          <li>Access controls and least-privilege policies.</li>
          <li>Regular security testing and audits.</li>
        </ul>
        <p>
          No system is 100% secure; in the unlikely event of a data breach that
          creates risk to rights and freedoms, we will notify affected
          individuals and relevant authorities as required by law.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "International Transfers",
    content: (
      <p>
        AtomX operates internationally. Your data may be transferred and
        processed outside your country (for example, India ↔ cloud providers or
        service partners). Where transfers occur, we put safeguards in place
        (e.g., standard contractual clauses, adequate protections, or other
        lawful mechanisms) to ensure continued protection.
      </p>
    ),
  },
  {
    number: "11",
    title: "Children & Minors",
    content: (
      <p>
        Our services are not intended for children under 16 (or the age required
        by local law to consent). We do not knowingly collect personal data from
        children. If you believe we have collected data from a child, contact us
        and we will take steps to delete it.
      </p>
    ),
  },
  {
    number: "12",
    title: "Third-Party Sites & Links",
    content: (
      <p>
        Our site may include links to third-party sites. This Privacy Policy
        does not apply to third parties — review their privacy notices before
        using them.
      </p>
    ),
  },
  {
    number: "13",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy to reflect product or legal changes.
        When we do, we will publish the revised policy on this page with a new
        &quot;Last updated&quot; date. For material changes affecting your
        rights, we will provide more direct notification where required.
      </p>
    ),
  },
  {
    number: "14",
    title: "Contact & Complaints",
    content: (
      <>
        <p>
          Questions, requests or complaints:{" "}
          <a href="mailto:hello@atomx.in">hello@atomx.in</a>
        </p>
        <p>
          If you are not satisfied with our response, you may also raise your
          concern with your local data protection authority.
        </p>
      </>
    ),
  },
  {
    number: "15",
    title: "Additional Notices (GDPR / CCPA / Local Compliance)",
    content: (
      <>
        <p>
          If you are an EU/EEA resident, you may have additional protections
          under the GDPR (e.g., right to object, automated decision-making
          restrictions).
        </p>
        <p>
          <strong>California residents:</strong> you may have rights under the
          California Consumer Privacy Act (CCPA); contact{" "}
          <a href="mailto:dataprotection@atomx.in">dataprotection@atomx.in</a>{" "}
          for details about your rights and how to exercise them.
        </p>
        <p>
          This policy is a general statement of practice. Local laws may require
          additional notices — AtomX will provide contractually required and
          region-specific privacy notices where applicable.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      label="LEGAL"
      title="Privacy Policy"
      metaItems={[
        { label: "Last Updated", value: "02 February 2026" },
        { label: "Company", value: "AtomX Corporation Private Limited" },
        { label: "Contact", value: "hello@atomx.in" },
      ]}
      summaryText="We collect only what we need to provide and secure event operations, support payments and access control, and improve the AtomX service. We share data only with trusted partners and under lawful conditions. You control your personal data and can contact our DPO to exercise your rights."
      sections={privacySections}
    />
  );
}
