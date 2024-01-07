import Link from "next/link";
import { Button } from "../ui/button";
import { Download, Send } from "lucide-react";

import { RiArrowDownSLine } from "react-icons/ri";

const Umpanbali = () => {
  return (
    <section className="mb-8 sm:mb-12 xl:mb-36">
      <div className="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white text-center sm:text-left">
          give us feedback for further <br></br>improvements
        </h2>

        <div className="mt-4 sm:mt-8 lg:mt-0">
          <div className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white text-center sm:text-left">
            <Link href="/feedback">
              <Button className="gap-x-2">
                Feedback <Send size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Umpanbali;
