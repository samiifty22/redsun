import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { WhoWeAre } from "../components/WhoWeAre";
import { Compliance } from "../components/Compliance";
import { Leadership } from "../components/Leadership";
import { Partners } from "../components/Partners";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhoWeAre />
        <Compliance />
        <Leadership />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
