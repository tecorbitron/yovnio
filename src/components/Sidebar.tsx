import React from "react";
import Link from "next/link"; // Import Link for navigation
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronRight, MenuIcon } from "lucide-react";

const CustomSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <span className="flex items-center gap-1"><MenuIcon className="cursor-pointer" /></span>
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-white text-custom-primary border-none">
        <SheetHeader>
          <SheetTitle>
            <span className="hidden" >title</span>
          </SheetTitle>
        </SheetHeader>
        <div className="py-12 mt-10">
          {/* programme  */}
          <p className="font-semibold mt-5 mb-3">PROGRAMME</p>
          <ul>
            <Link href='#'>
              <li className="flex items-center justify-between cursor-pointer text-lg font-medium py-5 border-t border-b">
                How it works?  <ChevronRight />
              </li>
            </Link>
            <Link href='#'>
              <li className="flex items-center justify-between cursor-pointer text-lg font-medium py-5 border-t border-b">
                Treatments <ChevronRight />
              </li>
            </Link>
            <Link href='#'>
              <li className="flex items-center justify-between cursor-pointer text-lg font-medium py-5 border-t border-b">
                Coaching <ChevronRight />
              </li>
            </Link>
            <Link href='#'>
              <li className="flex items-center justify-between cursor-pointer text-lg font-medium py-5 border-t border-b">
                App <ChevronRight />
              </li>
            </Link>
          </ul>

          {/* explore  */}
          <p className="font-semibold mt-5 mb-3">EXPLORE</p>
          <ul>
            <Link href='#'>
              <li className="flex items-center justify-between cursor-pointer text-lg font-medium py-5 border-t border-b">
                Results <ChevronRight />
              </li>
            </Link>
            <Link href='#'>
              <li className="flex items-center justify-between cursor-pointer text-lg font-medium py-5 border-t border-b">
                Experts <ChevronRight />
              </li>
            </Link>
            <Link href='#'>
              <li className="flex items-center justify-between cursor-pointer text-lg font-medium py-5 border-t border-b">
                About <ChevronRight />
              </li>
            </Link>
            <Link href='#'>
              <li className="flex items-center justify-between cursor-pointer text-lg font-medium py-5 border-t border-b">
                Learn <ChevronRight />
              </li>
            </Link>
          </ul>

          {/* accounts  */}
          <p className="font-semibold mt-5 mb-3">ACCOUNTS</p>
          <Link href='#'>
            <li className="flex items-center justify-between cursor-pointer text-lg font-medium py-5 border-t border-b">
              Home <ChevronRight />
            </li>
          </Link>

          {/* get in touch  */}
          <p className="font-semibold mt-5 mb-3">GET IN TOUCH</p>
          <Link href='#'>
            <li className="flex items-center justify-between cursor-pointer text-lg font-medium py-5 border-t border-b">
              <p>02039129885 <span className="block text-sm">Mon-Fri 9:30-17:30</span> </p> <ChevronRight />
            </li>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CustomSidebar;
