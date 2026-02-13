import AccessControlHero from "../../../components/AccessControlHero/AccessControlHero";
import EntryPainPoints from "../../../components/EntryPainPoints/EntryPainPoints";
import FlexibleAccessCredentials from "../../../components/FlexibleAccessCredentials/FlexibleAccessCredentials";
import TurnstileEntry from "../../../components/TurnstileEntry/TurnstileEntry";
import RealTimeEntry from "../../../components/RealTimeEntry/RealTimeEntry";
import AntiFraudControls from "../../../components/AntiFraudControls/AntiFraudControls";
import AccessControlFAQ from "../../../components/AccessControlFAQ/AccessControlFAQ";
import AccessControlCTA from "../../../components/AccessControlCTA/AccessControlCTA";
import Footer from "../../../components/Footer/Footer";

export const metadata = {
  title: "Access Control — Seamless, Secure Entry | atomX",
  description:
    "Seamless, secure entry through access-controlled turnstiles with real-time monitoring. RFID, QR & wristband-based access control by atomX.",
};

export default function AccessControlPage() {
  return (
    <main>
      <AccessControlHero />
      <EntryPainPoints />
      <FlexibleAccessCredentials />
      <TurnstileEntry />
      <RealTimeEntry />
      <AntiFraudControls />
      <AccessControlFAQ />
      <AccessControlCTA />
      <Footer />
    </main>
  );
}
