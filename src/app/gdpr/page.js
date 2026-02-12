"use client";

import React from "react";
import LegalPageLayout from "../../../components/LegalPageLayout/LegalPageLayout";

const gdprSections = [
  {
    number: "",
    title: "What is GDPR?",
    content: (
      <p>
        The General Data Protection Regulation (GDPR) is a European Union law
        designed to protect the privacy and personal data of individuals within
        the EU. GDPR has been in effect since 25 May 2018 and applies to all
        organizations that collect, process, or store personal data of EU
        residents — regardless of where the organization is based.
      </p>
    ),
  },
  {
    number: "",
    title: "Our Commitment",
    content: (
      <>
        <p>
          AtomX Corporation Private Limited complies with GDPR requirements when
          processing personal data of individuals located in the European Union.
        </p>
        <p>
          AtomX provides event technology solutions such as cashless payments,
          access control, and real-time analytics. In delivering these services,
          AtomX may process personal data on behalf of event organizers. We take
          data protection seriously and are committed to handling personal
          information lawfully, transparently, and securely.
        </p>
      </>
    ),
  },
  {
    number: "",
    title: "Privacy by Design",
    content: (
      <p>
        Protecting user privacy is a core part of how AtomX designs and operates
        its platform. We continuously review and update our systems, policies,
        and processes to ensure compliance with applicable data protection laws,
        including GDPR.
      </p>
    ),
  },
  {
    number: "",
    title: "Your Rights Under GDPR",
    content: (
      <>
        <p>
          Under GDPR, individuals located in the EU have rights over their
          personal data. This includes the right to know what information is
          collected, how it is used, and how long it is retained. Individuals
          also have the right to access, correct, restrict, or request deletion
          of their personal data, subject to legal and contractual obligations.
        </p>
      </>
    ),
  },
  {
    number: "",
    title: "How We Process Data",
    content: (
      <>
        <p>
          AtomX processes personal data only for legitimate purposes, such as:
        </p>
        <ul className="legal-list">
          <li>Enabling event access and cashless transactions</li>
          <li>Preventing fraud and ensuring platform security</li>
          <li>
            Providing analytics and operational insights to event organizers
          </li>
          <li>Supporting customer service and platform operations</li>
        </ul>
      </>
    ),
  },
  {
    number: "",
    title: "Data We Process",
    content: (
      <p>
        Personal data processed by AtomX may include contact details,
        transaction records, access logs, and system usage data, depending on
        the event setup and user interaction. AtomX follows data minimization
        principles and collects only what is necessary to deliver the service.
      </p>
    ),
  },
  {
    number: "",
    title: "How We Protect Your Data",
    content: (
      <p>
        We protect personal data using appropriate technical and organizational
        measures, including encryption, access controls, and continuous system
        monitoring. AtomX does not sell personal data and shares information only
        with trusted service providers or event organizers, and only when
        required to deliver the service or comply with legal obligations.
      </p>
    ),
  },
  {
    number: "",
    title: "Exercising Your Rights",
    content: (
      <p>
        Users may request access to, correction of, or deletion of their
        personal data by contacting AtomX. Where AtomX acts as a data processor
        on behalf of an event organizer, requests may be coordinated with the
        relevant organizer in accordance with GDPR requirements.
      </p>
    ),
  },
  {
    number: "",
    title: "Further Information",
    content: (
      <>
        <p>
          More detailed information about how AtomX collects, processes, stores,
          and protects personal data can be found in our{" "}
          <a href="/privacy">Privacy Policy</a> and{" "}
          <a href="/terms">Terms &amp; Conditions</a>.
        </p>
        <p>
          For GDPR-related questions or data requests, please contact:{" "}
          <a href="mailto:hello@atomx.in">hello@atomx.in</a>
        </p>
      </>
    ),
  },
];

export default function GDPRPage() {
  return (
    <LegalPageLayout
      label="DATA PROTECTION"
      title="AtomX & GDPR"
      metaItems={[
        { label: "Company", value: "AtomX Corporation Private Limited" },
        { label: "Contact", value: "hello@atomx.in" },
      ]}
      summaryText="AtomX complies with GDPR requirements when processing personal data of individuals located in the European Union. Protecting user privacy is a core part of how AtomX designs and operates its platform."
      sections={gdprSections}
    />
  );
}
