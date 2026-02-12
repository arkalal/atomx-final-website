"use client";

import React from "react";
import LegalPageLayout from "../../../components/LegalPageLayout/LegalPageLayout";

const refundSections = [
  {
    number: "01",
    title: "General Policy",
    content: (
      <p>
        AtomX acts as a technology service provider for event organizers.
        Refunds, cancellations, and ticketing policies are defined primarily by
        the event organizer, and AtomX processes refunds strictly in accordance
        with the organizer&apos;s instructions and the terms communicated on the
        event&apos;s official page.
      </p>
    ),
  },
  {
    number: "02",
    title: "Ticket & Event Registration Refunds",
    content: (
      <>
        <p>
          Unless explicitly stated otherwise on the event&apos;s official
          registration or ticketing page:
        </p>
        <ul className="legal-list">
          <li>All event registrations and ticket purchases are non-refundable</li>
          <li>All ticket purchases are final</li>
          <li>AtomX does not independently authorize ticket refunds</li>
        </ul>
        <p>
          Refund eligibility, if any, is governed by the event organizer&apos;s
          refund policy, not AtomX.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "No Cancellations by Attendees",
    content: (
      <>
        <p>Once a ticket or registration is successfully completed:</p>
        <ul className="legal-list">
          <li>Attendee-initiated cancellations are not permitted</li>
          <li>Tickets and registrations cannot be canceled after purchase</li>
          <li>
            AtomX cannot override or alter organizer-defined cancellation rules
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "04",
    title: "Non-Transferable Tickets & Registrations",
    content: (
      <>
        <p>Unless clearly mentioned on the event page:</p>
        <ul className="legal-list">
          <li>Tickets and registrations are non-transferable</li>
          <li>
            Wristbands, QR codes, or access credentials issued via AtomX cannot
            be reassigned to another individual
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "05",
    title: "Cashless Wallets, Top-Ups & Digital Goods",
    content: (
      <>
        <ul className="legal-list">
          <li>
            Digital goods, wristband balances, and cashless top-ups are
            non-refundable during an active event
          </li>
          <li>
            Refunds of unused balances, if applicable, are handled only if
            explicitly stated by the event organizer
          </li>
          <li>
            AtomX executes wallet refunds strictly as per organizer instructions
          </li>
        </ul>
        <p>Where refunds are approved:</p>
        <ul className="legal-list">
          <li>Refunds are processed to the original payment method</li>
          <li>Processing time is typically 7–10 business days</li>
        </ul>
      </>
    ),
  },
  {
    number: "06",
    title: "Special Event Exceptions",
    content: (
      <>
        <p>
          Some events may offer partial refunds, cancellation windows, or
          post-event wallet refunds.
        </p>
        <ul className="legal-list">
          <li>
            These exceptions will be clearly mentioned on the specific event page
          </li>
          <li>
            Any refund or cancellation request must strictly follow the terms
            stated there
          </li>
          <li>
            AtomX bears no responsibility for exceptions not officially
            communicated by the organizer
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "07",
    title: "Failure to Attend the Event",
    content: (
      <>
        <p>
          Failure to attend an event for any reason — including but not limited
          to:
        </p>
        <ul className="legal-list">
          <li>Personal circumstances</li>
          <li>Travel delays</li>
          <li>Illness</li>
          <li>Weather conditions</li>
        </ul>
        <p>
          — does not entitle the attendee to a refund, credit, or cancellation,
          unless explicitly stated by the event organizer.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Event Postponement or Rescheduling",
    content: (
      <>
        <p>If an event is postponed or rescheduled by the event organizer:</p>
        <ul className="legal-list">
          <li>Tickets and registrations remain valid for the new date</li>
          <li>
            Refunds, if any, will be issued only if the organizer permits
          </li>
          <li>
            AtomX will process approved refunds based on organizer instructions
          </li>
        </ul>
        <p>If the event is canceled entirely:</p>
        <ul className="legal-list">
          <li>
            Refund eligibility and timelines are determined by the organizer
          </li>
          <li>
            AtomX will facilitate refunds only after receiving formal
            authorization
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "09",
    title: "How to Request a Refund (If Applicable)",
    content: (
      <>
        <p>For events where refunds are explicitly allowed:</p>
        <ul className="legal-list">
          <li>
            Requests must be submitted within the timeframe specified on the
            event page
          </li>
          <li>
            Requests made close to the event date may be rejected due to
            operational constraints
          </li>
          <li>
            All refund requests must be routed through the official event support
            channel
          </li>
        </ul>
        <p>
          AtomX may redirect refund queries to the event organizer where
          applicable.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Limitation of AtomX Responsibility",
    content: (
      <>
        <p>AtomX:</p>
        <ul className="legal-list">
          <li>Does not set ticket pricing or refund eligibility</li>
          <li>Does not control event cancellation decisions</li>
          <li>Acts only as a payment and access technology platform</li>
        </ul>
        <p>
          <strong>
            Final decisions regarding refunds rest solely with the event
            organizer.
          </strong>
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "Contact Information",
    content: (
      <>
        <p>
          For platform-related queries (wallets, transactions, access issues):
        </p>
        <p>
          <a href="mailto:refund@atomx.in">refund@atomx.in</a>
        </p>
        <p>For ticketing and event refunds:</p>
        <p>
          Please refer to the event organizer&apos;s official support contact.
        </p>
      </>
    ),
  },
  {
    number: "12",
    title: "Policy Modifications",
    content: (
      <p>
        AtomX reserves the right to modify this Refund &amp; Cancellation Policy
        at any time. Updates will be published on this page and become effective
        immediately upon posting.
      </p>
    ),
  },
  {
    number: "",
    title: "Acknowledgment",
    content: (
      <p>
        By purchasing tickets, registering for an event, or using
        AtomX-powered cashless systems, you acknowledge that you have read,
        understood, and agreed to this Refund &amp; Cancellation Policy, as well
        as the specific refund terms defined by the event organizer.
      </p>
    ),
  },
];

export default function RefundCancellationPage() {
  return (
    <LegalPageLayout
      label="LEGAL"
      title="Refund & Cancellation Policy"
      metaItems={[
        { label: "Last Updated", value: "02 February 2026" },
        {
          label: "Company",
          value: 'AtomX Corporation Private Limited',
        },
      ]}
      summaryText="AtomX acts as a technology service provider for event organizers. Refunds, cancellations, and ticketing policies are defined primarily by the event organizer. AtomX processes refunds strictly in accordance with the organizer's instructions."
      sections={refundSections}
    />
  );
}
