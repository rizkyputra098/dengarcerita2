import Link from "next/link";
import { Button } from "../ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

const Cerita = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto flex items-center justify-center h-full">
        <div className="text-center xl:text-left">
          {/* Text */}
          <div className="h1 mb-4 text-center">Tell stories without</div>
          <h1 className="h2 mb-4 text-center "> Hesitation</h1>
          {/* Button */}
          <div className="mt-20 text-center">
            <Link href="/blog">
              <Button className="gap-x-2">
                Let’s get started! <Send size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Icon */}
      <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
        <RiArrowDownSLine className="text-3x1 text-primary" />
      </div>
    </section>
  );
};

export default Cerita;
