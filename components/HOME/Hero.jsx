import Link from "next/link";
import { Button } from "../ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-white-100">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Tell Me How You Fell With
            </div>
            <h1 className="h1 mb-4">Dengar Cerita</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              it is normal to feel sad, stressed, and anxious during a crisis
              tell us your problems here
            </p>
            {/* button */}
            <div>
              <Link href="/blog">
                <Button className="gap-x-2">
                  explor <Send size={18} />
                </Button>
              </Link>
            </div>
          </div>
          {/* image */}
          <div className="hidden xl:flex relative w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
            <img src="/Gambar kanan hero home.svg " />
          </div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3x1 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
