import ContactHero from "../../../components/ContactHero/ContactHero";
import ContactTrust from "../../../components/ContactTrust/ContactTrust";
import ContactFAQ from "../../../components/ContactFAQ/ContactFAQ";
import ClosingCTA from "../../../components/ClosingCTA/ClosingCTA";
import Footer from "../../../components/Footer/Footer";

export const metadata = {
  title: "Contact — atomX",
  description:
    "Get in touch with AtomX. Tell us about your event and our team will show you how AtomX simplifies access, payments, and on-ground operations.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactTrust />
      <ContactFAQ />
      <ClosingCTA />
      <Footer />
    </main>
  );
}
