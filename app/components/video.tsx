import { Inter } from "next/font/google";
import ServerInfo from "./video/serverInfo/serverInfo";

const inter = Inter({ subsets: ["latin"] });

export default function Video() {
  return (
    <div className="relative flex min-h-screen snap-center flex-col place-items-center bg-base-200 lg:grid lg:grid-cols-1">
      <div className="col-start-1 grid h-full w-full grid-cols-1 place-items-center ">
        <video
          className=" col-start-1 h-auto  max-h-screen w-full opacity-100 shadow-xl lg:h-full lg:w-auto lg:opacity-10 "
          autoPlay
          loop
          muted
        >
          <source src="/videos/vdo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className=" relative top-auto col-start-1 grid h-full w-full grow place-items-center  py-5 px-10 opacity-100 lg:absolute lg:h-3/6 lg:w-10/12  lg:py-5 lg:px-10 xl:h-4/6 2xl:h-5/6">
        <ServerInfo />
      </div>
    </div>
  );
}
