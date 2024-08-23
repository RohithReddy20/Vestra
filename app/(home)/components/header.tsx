import { Button } from "@/components/ui/button";
import Image from "next/image";
import AnimatedText from "./AnimateText";

export const Header = () => {
  return (
    <>
      <header className="flex justify-center md:justify-between items-center py-6">
        <div className="flex items-center justify-center gap-1">
          <div className="w-10 h-10 md:w-[60px] md:h-[60px]">
            <Image
              height={100}
              width={100}
              src="assets/images/vestra.svg"
              alt="logo"
            />
          </div>
          <span className="font-fauna text-xl md:text-[28px] gradient-text font-thin">
            VESTRA
          </span>
        </div>
        <Button
          variant="outline"
          className="border-[#E52D27] py-4 px-6 bg-transparent hover:bg-transparent text-base rounded-[80px] h-[55px] w-[147px] text-white hover:text-white font-ttfir hidden md:block"
        >
          Join Waitlist
        </Button>
      </header>
      <div className="flex justify-center items-center flex-col py-6">
        <h1 className="text-5xl md:text-[80px] font-bold mb-4 font-ttfir text-center">
          Agent Systems
        </h1>
        <h1 className="text-5xl md:text-[80px] font-bold mb-4 font-ttfir text-center flex">
          Made {<AnimatedText />}
        </h1>
        <p className="text-[#BFBFBF] text-xl md:text-3xl font-normal md:font-medium font-alliance text-center">
          Build, deploy and monetize AI agent systems in minutes
        </p>
      </div>
    </>
  );
};
