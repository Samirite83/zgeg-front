import { Roboto } from "next/font/google";
import About from "./components/about";
import Footer from "./components/footer";
import Hero from "./components/server/hero";
import Navbar from "./components/server/navbar";
import bg from "../public/bg.png";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <div
        className="flex min-h-screen w-full flex-col overflow-hidden  bg-cover bg-center"
        style={{
          backgroundImage: `url('/bg.png')`,
        }}
      >
        <Navbar />
        <Hero />
        {/* <Video />
            <About />
            <Footer /> */}
      </div>
    </main>
  );
}
