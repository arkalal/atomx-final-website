import CashlessHero from "../../../components/CashlessHero/CashlessHero";
import CashlessPartnersFlow from "../../../components/CashlessPartnersFlow/CashlessPartnersFlow";

import CashlessProblem from "../../../components/CashlessProblem/CashlessProblem";
import CashlessHowItWorks from "../../../components/CashlessHowItWorks/CashlessHowItWorks";
import CashlessBenefits from "../../../components/CashlessBenefits/CashlessBenefits";
import CashlessOnGround from "../../../components/CashlessOnGround/CashlessOnGround";
import CashlessDashboard from "../../../components/CashlessDashboard/CashlessDashboard";
import CashlessCTA from "../../../components/CashlessCTA/CashlessCTA";
import Footer from "../../../components/Footer/Footer";

export const metadata = {
  title: "Cashless Payments — NFC-Powered Event Transactions | atomX",
  description:
    "Run faster operations, reduce cash handling, and gain real-time visibility across every NFC-powered transaction with AtomX cashless payment systems.",
};

export default function CashlessPaymentsPage() {
  return (
    <main>
      <CashlessHero />
      <CashlessPartnersFlow />

      <CashlessProblem />
      <CashlessHowItWorks />
      <CashlessBenefits />
      <CashlessOnGround />
      <CashlessDashboard />
      <CashlessCTA />
      <Footer />
    </main>
  );
}
