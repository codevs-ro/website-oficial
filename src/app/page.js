import Hero from "./components/homepage/Hero";
import About from "./components/homepage/About";
import Services from "./components/homepage/Services";
import Testimonials from "./components/homepage/Testimonials";
import Contact from "./components/homepage/Contact";

export const metadata = {
  title: "Codevs.ro",
  description: "Inovam prin Cod",
  twitter: {
    card: "summary_large_image",
    title: "Codevs.ro",
    description: "Inovam prin Cod",
    siteId: "1467726470533754880",
    creator: "@codevs.ro",
    creatorId: "1467726470533754880",
    images: ["https://nextjs.org/og.png"],
  },
};

function Homepage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Homepage;
