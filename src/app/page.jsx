import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 class="font-display text-5xl font-medium tracking-tighter text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Building Your Digital Future Together
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            At the intersection of visionary design and cutting-edge technology,
            ideas are transformed into captivating online experiences. Ready to
            elevate your digital presence? Reach out to create something
            extraordinary!
          </p>
        </FadeIn>
      </Container>
    </main>
  );
}
