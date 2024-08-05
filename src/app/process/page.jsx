import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import PageIntro from "@/components/PageIntro";

const ProcessPage = () => {
  return (
    <>
      <PageIntro eyebrow="Process" title="How I Work">
        <p>
          I’m all about getting the most out of your resources and delivering
          real value. I stay on top of the latest tech trends and use my
          hands-on experience from past projects to create efficient and
          effective solutions.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <Discover />
        {/* Build */}
        <Build />
        {/* Deliver */}
        <Deliver />
      </div>
      {/* Value */}
      <ContactSection />
    </>
  );
};

export default ProcessPage;
