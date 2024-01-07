import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

import Nav from "./Nav";
import Logo from "./Logo";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-poiter" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col item-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-6">
            <Logo />
            <Nav
              containerStyles="flex flex-col item-center gap-y-6"
              linkStyles="text-2xl"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
