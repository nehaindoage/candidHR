import { CustomerSpotlight2 } from "../components/CustomerSpotlight2";
import { FeatureDeepDives2 } from "../components/FeatureDeepDives2";
import { Hero3 } from "../components/Hero3";
import { IspSolutionsGrid2 } from "../components/IspSolutionsGrid2";
import { WhyNetzur2 } from "../components/WhyNetzur2";
import { usePageMeta } from "../hooks/usePageMeta";



// Accept onOpenDemo as a prop so buttons can still trigger the modal
export default function Home({ onOpenDemo }: { onOpenDemo: () => void }) {
  usePageMeta(
    "home",
    "CandidHR.ai | AI Recruitment Software for Better Hiring",
    "CandidHR.ai sources, screens, assesses and interviews candidates so recruiters can focus on the people worth talking to."
  );

  return (
    <>
      <Hero3 onOpenDemo={onOpenDemo} />

      <WhyNetzur2 onOpenDemo={onOpenDemo} />


      <FeatureDeepDives2/>

      <IspSolutionsGrid2/>

      <CustomerSpotlight2/>

    </>
  );
}