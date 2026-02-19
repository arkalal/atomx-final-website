import AboutHero from "../../../components/AboutHero/AboutHero";
import AboutAtomX from "../../../components/AboutAtomX/AboutAtomX";
import AboutTeam from "../../../components/AboutTeam/AboutTeam";
import AboutClients from "../../../components/AboutClients/AboutClients";
import AboutFAQ from "../../../components/AboutFAQ/AboutFAQ";
import AboutCTA from "../../../components/AboutCTA/AboutCTA";
import Footer from "../../../components/Footer/Footer";

export const metadata = {
  title: "About Us — The Team Behind Seamless Events | atomX",
  description:
    "Learn about AtomX — the technology partner powering access control, cashless payments, and real-time event intelligence for large-scale live experiences since 2012.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutAtomX />
      <AboutTeam />
      <AboutClients />
      <AboutFAQ />
      <AboutCTA />
      <Footer />
    </main>
  );
}
