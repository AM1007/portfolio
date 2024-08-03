import PageIntro from "@/components/PageIntro";

const AboutPage = () => {
  return (
    <PageIntro eyebrow="About Me" title="Together, We Achieve More">
      <p>
        I think our real strength comes from working closely together and
        keeping you at the heart of everything I do.
      </p>
      <div className="mt-10 max-w-2xl space-y-6 text-base">
        <p>
          As a technical writer, I witnessed firsthand how technologies were
          evolving and shifting to the Web. This sparked my curiosity to dive
          into automation systems and stay ahead of trends in the Web industry.
        </p>
        <p>
          Realizing the need for a solid technical foundation to create
          top-notch solutions, I pursued a master’s degree in computer science.
        </p>
        <p>
          Since 2023, I’ve been on an exciting journey in development, blending
          my enthusiasm with hands-on experience. Whether working in teams or
          tackling projects solo, I’m passionate about crafting solutions that
          truly meet your needs.
        </p>
      </div>
    </PageIntro>
  );
};

export default AboutPage;
