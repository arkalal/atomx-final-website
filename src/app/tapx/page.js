import TapXHero from "../../../components/TapXHero/TapXHero";
import TapXFeatures from "../../../components/TapXFeatures/TapXFeatures";
import HowTapXFits from "../../../components/HowTapXFits/HowTapXFits";
import ProblemSolution from "../../../components/ProblemSolution/ProblemSolution";
import Footer from "../../../components/Footer/Footer";

export const metadata = {
  title: "TapX — The NFC-Powered Transaction Layer | atomX",
  description:
    "TapX is the NFC-powered transaction layer behind seamless event payments. The interaction layer for cashless events.",
};

export default function TapXPage() {
  return (
    <main>
      <TapXHero />
      <TapXFeatures />
      <ProblemSolution />
      <HowTapXFits />
      <Footer />
    </main>
  );
}
