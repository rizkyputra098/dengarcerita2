import Link from "next/link";
import { Button } from "../ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

const Isu = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Trust issue and Boundary
            </div>
            <h1 className="h1 mb-4">in a Relationship</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Have you ever thought like the people below? Putting trust in
              other people sometimes causes problems, not trusting anyone is
              also a mistake, so what should I do? Building trust incrementally
              while remaining vigilant can help us navigate complex human
              relationships wisely.
            </p>
            {/* button */}
            <div>
              <Link href="/counseling">
                <Button className="gap-x-2">
                  See more Informations <Send size={18} />
                </Button>
              </Link>
            </div>
          </div>
          {/* image */}
          <div className="hidden xl:flex relative w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
            <img src="/Gambar kanan home.svg " />
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

export default Isu;
