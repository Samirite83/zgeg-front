import { Inter } from "next/font/google";
import About from "./components/about";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Video from "./components/video";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
      <Video />
      <About />
      <Footer />
    </main>
  );
}
