import HeroSection from "../../components/HeroSection/HeroSection";
import ExploreSection from "../../components/ExploreSection/ExploreSection";
// import MovingRibbons from "../../components/MovingRibbons/MovingRibbons";
import ImageBoxes from "../../components/ImageBoxes/ImageBoxes";
import ScrollingMarquee from "../../components/ScrollingMarquee/ScrollingMarquee";
import StackCards from "../../components/StackCards/StackCards";
// import ExperiencesList from "../../components/ExperiencesList/ExperiencesList";
// import TestimonialReveal from "../../components/TestimonialReveal/TestimonialReveal";
// import BentoGallery from "../../components/BentoGallery/BentoGallery";
import WallOfLove from "../../components/WallOfLove/WallOfLove";
import ClosingCTA from "../../components/ClosingCTA/ClosingCTA";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExploreSection />
      {/* <MovingRibbons /> */}
      <ImageBoxes />
      <ScrollingMarquee />
      <StackCards />
      {/* <ExperiencesList /> */}
      {/* <TestimonialReveal /> */}
      {/* <BentoGallery /> */}
      <WallOfLove />
      <ClosingCTA />
      <Footer />
    </main>
  );
}
