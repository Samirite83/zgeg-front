import Image from "next/image";
import SVGIMG from "../../../public/heroPoly2.svg";
import LOGO from "../../../public/logo_squad.png";
import SvgComponent from "../common/svg";

export default function Hero() {
  return (
    <section className="invisible relative grow p-16 md:visible ">
      <div className="absolute ">
        {/* <SvgComponent
          fill="#DBDFAC"
          width={1001}
          height={1196}
          className="svg-shadow h-[80%] max-h-[80%] w-[80%] max-w-[80%] "
        /> */}

        <Image
          priority
          src={SVGIMG}
          className="svg-shadow h-[80%]  max-h-screen  w-[80%] object-cover "
          alt="Follow us on Twitter"
        />
        <Image
          src={LOGO}
          alt="Squad LOGO"
          className="absolute top-[50%] left-[45%] h-auto w-[20%] -translate-y-[50%] -translate-x-[50%] "
        />

        <button className="btn absolute top-[80%] left-[50%] w-40 border-yellow-400 bg-yellow-400 text-black  shadow-md">
          Login
        </button>
      </div>
    </section>
  );
}
