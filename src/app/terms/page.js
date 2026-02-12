"use client";

import React from "react";
import LegalPageLayout from "../../../components/LegalPageLayout/LegalPageLayout";

const termsSections = [
  {
    number: "01",
    title: "Overview",
    content: (
      <>
        <p>
          This website is operated by AtomX Corporation Private Limited
          (&quot;AtomX&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
          AtomX provides event technology solutions including cashless payments,
          access control, analytics, and related services for live events,
          venues, and festivals.
        </p>
        <p>
          By accessing our website or using any AtomX services
          (&quot;Service&quot;), you agree to be bound by these Terms &amp;
          Conditions (&quot;Terms&quot;), including any additional policies
          referenced herein (including Privacy Policy and Refund &amp;
          Cancellation Policy).
        </p>
        <p>
          These Terms apply to all users of the site and services, including
          event organisers, attendees, vendors, partners, and website visitors.
        </p>
        <p>
          <strong>
            If you do not agree to these Terms, you may not access or use the
            website or services.
          </strong>
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Eligibility & Acceptable Use",
    content: (
      <>
        <p>By using this website or Service, you represent that:</p>
        <ul className="legal-list">
          <li>
            You are at least the age of majority under applicable law
          </li>
          <li>You have legal capacity to enter into a binding agreement</li>
        </ul>
        <p>You agree not to:</p>
        <ul className="legal-list">
          <li>Use the Service for any unlawful or unauthorized purpose</li>
          <li>
            Violate any applicable local, national, or international laws
          </li>
          <li>Transmit viruses, malware, or harmful code</li>
          <li>Attempt to breach or bypass system security</li>
        </ul>
        <p>
          Violation of these Terms may result in immediate suspension or
          termination of access.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "General Conditions",
    content: (
      <>
        <p>We reserve the right to:</p>
        <ul className="legal-list">
          <li>Refuse service to anyone at any time for any reason</li>
          <li>
            Suspend or terminate access for violations of these Terms
          </li>
        </ul>
        <p>
          Content (excluding payment data) may be transmitted across networks to
          enable service functionality. Payment information is always encrypted
          during transmission using industry-standard security practices.
        </p>
        <p>
          You may not reproduce, resell, duplicate, or exploit any portion of
          the Service without express written permission from AtomX.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Information Accuracy",
    content: (
      <>
        <p>
          Information on this website is provided for general purposes only. We
          do not guarantee that:
        </p>
        <ul className="legal-list">
          <li>All information is current, complete, or error-free</li>
          <li>Content will always be updated immediately</li>
        </ul>
        <p>
          Use of website content is at your own risk. AtomX may modify content
          at any time without obligation to update prior versions.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Service Modifications",
    content: (
      <>
        <p>AtomX reserves the right to:</p>
        <ul className="legal-list">
          <li>Modify, suspend, or discontinue any part of the Service</li>
          <li>Update platform features, pricing models, or availability</li>
        </ul>
        <p>
          We shall not be liable for any modification, suspension, or
          discontinuation of services.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Services & Event Responsibility",
    content: (
      <>
        <p>AtomX provides technology infrastructure only. AtomX:</p>
        <ul className="legal-list">
          <li>Does not organise events</li>
          <li>
            Does not control ticket pricing, refund policies, or event execution
          </li>
          <li>Acts solely as a service provider to event organisers</li>
        </ul>
        <p>
          Event-specific terms (tickets, refunds, access rules) are defined by
          the event organiser and displayed on the respective event page.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Billing & Account Information",
    content: (
      <>
        <p>
          Where applicable, you agree to provide accurate and complete
          information for:
        </p>
        <ul className="legal-list">
          <li>Transactions</li>
          <li>Vendor onboarding</li>
          <li>Account management</li>
        </ul>
        <p>
          AtomX reserves the right to refuse or restrict transactions suspected
          of fraud or misuse.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Third-Party Tools & Integrations",
    content: (
      <>
        <p>
          AtomX may integrate third-party tools (e.g., payment gateways,
          analytics, CRM systems). Such tools are provided &quot;as is&quot; and
          AtomX:
        </p>
        <ul className="legal-list">
          <li>Does not control third-party platforms</li>
          <li>
            Is not responsible for third-party performance or policies
          </li>
        </ul>
        <p>Use of third-party tools is at your own discretion.</p>
      </>
    ),
  },
  {
    number: "09",
    title: "Third-Party Links",
    content: (
      <>
        <p>Our website may contain links to third-party websites. AtomX:</p>
        <ul className="legal-list">
          <li>Does not endorse third-party content</li>
          <li>
            Is not responsible for external websites, products, or services
          </li>
        </ul>
        <p>
          Any interaction with third-party sites is solely between you and that
          third party.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "User Submissions & Feedback",
    content: (
      <>
        <p>If you submit feedback, ideas, or suggestions to AtomX:</p>
        <ul className="legal-list">
          <li>
            You grant AtomX a non-exclusive, royalty-free right to use them
          </li>
          <li>AtomX is not obligated to compensate or respond</li>
        </ul>
        <p>
          You agree not to submit content that is unlawful, defamatory, or
          infringes third-party rights.
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "Personal Information",
    content: (
      <p>
        Your submission of personal data is governed by our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    ),
  },
  {
    number: "12",
    title: "Errors & Omissions",
    content: (
      <>
        <p>AtomX reserves the right to:</p>
        <ul className="legal-list">
          <li>Correct errors or inaccuracies</li>
          <li>Update information without prior notice</li>
          <li>Cancel transactions if information is incorrect</li>
        </ul>
        <p>
          We are not obligated to update past content unless required by law.
        </p>
      </>
    ),
  },
  {
    number: "13",
    title: "Prohibited Uses",
    content: (
      <>
        <p>You may not use the Service to:</p>
        <ul className="legal-list">
          <li>Violate laws or regulations</li>
          <li>Infringe intellectual property</li>
          <li>Harass, abuse, or discriminate</li>
          <li>Collect personal data unlawfully</li>
          <li>Interfere with system security</li>
        </ul>
        <p>Violation may result in termination of access.</p>
      </>
    ),
  },
  {
    number: "14",
    title: "Disclaimer & Limitation of Liability",
    content: (
      <>
        <p>
          The Service is provided &quot;as is&quot; and &quot;as
          available.&quot; AtomX does not guarantee:
        </p>
        <ul className="legal-list">
          <li>Uninterrupted service</li>
          <li>Error-free performance</li>
          <li>Accuracy of event-specific data</li>
        </ul>
        <p>
          To the maximum extent permitted by law, AtomX shall not be liable for
          indirect, incidental, consequential, or punitive damages arising from
          use of the Service.
        </p>
      </>
    ),
  },
  {
    number: "15",
    title: "Indemnification",
    content: (
      <>
        <p>
          You agree to indemnify and hold harmless AtomX, its directors,
          employees, partners, and service providers from claims arising out of:
        </p>
        <ul className="legal-list">
          <li>Your breach of these Terms</li>
          <li>Your misuse of the Service</li>
          <li>Violation of applicable law or third-party rights</li>
        </ul>
      </>
    ),
  },
  {
    number: "16",
    title: "Severability",
    content: (
      <p>
        If any provision of these Terms is held unenforceable, the remaining
        provisions shall remain valid and enforceable.
      </p>
    ),
  },
  {
    number: "17",
    title: "Termination",
    content: (
      <>
        <p>These Terms remain effective until terminated.</p>
        <p>AtomX may terminate access without notice if:</p>
        <ul className="legal-list">
          <li>You violate these Terms</li>
          <li>We suspect misuse or security risk</li>
        </ul>
        <p>
          Termination does not affect accrued rights or obligations.
        </p>
      </>
    ),
  },
  {
    number: "18",
    title: "Entire Agreement",
    content: (
      <p>
        These Terms, together with referenced policies, constitute the entire
        agreement between you and AtomX and supersede prior communications.
      </p>
    ),
  },
  {
    number: "19",
    title: "Governing Law & Jurisdiction",
    content: (
      <>
        <p>These Terms are governed by the laws of India.</p>
        <p>
          <strong>Jurisdiction:</strong> Bengaluru, Karnataka, India
        </p>
      </>
    ),
  },
  {
    number: "20",
    title: "Changes to Terms",
    content: (
      <p>
        AtomX may update these Terms at any time. Continued use of the website
        or Service constitutes acceptance of revised Terms.
      </p>
    ),
  },
  {
    number: "21",
    title: "Contact Information",
    content: (
      <>
        <p>
          <a href="mailto:hello@atomx.in">hello@atomx.in</a>
        </p>
        <p>
          <a href="https://www.atomx.in" target="_blank" rel="noopener noreferrer">
            www.atomx.in
          </a>
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPageLayout
      label="LEGAL"
      title="Terms & Conditions"
      metaItems={[
        { label: "Last Updated", value: "02 February 2026" },
        { label: "Company", value: "AtomX Corporation Private Limited" },
        { label: "Website", value: "www.atomx.in" },
        { label: "Contact", value: "hello@atomx.in" },
      ]}
      summaryText="By accessing our website or using any AtomX services, you agree to be bound by these Terms & Conditions. These Terms apply to all users of the site and services, including event organisers, attendees, vendors, partners, and website visitors."
      sections={termsSections}
    />
  );
}
