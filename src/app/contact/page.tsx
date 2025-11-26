   import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ContactPage(){

    return(
     <div className="w-full flex justify-center">
        <div></div>
    <Link href="/contact" className="flex items-center justify-between w-[40%]">
      <p className="font-semibold">Have a call</p>
      <div className="flex-1 mx-4 border-b border-blue-500"></div>
      <div className="w-8 h-8 flex items-center justify-center 
                      rounded-full border border-black">
        <ArrowUpRight size={18} />
      </div>
    </Link>
    </div>
  );
}

    