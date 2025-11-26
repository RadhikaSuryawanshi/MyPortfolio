   import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ContactPage(){

    return(
     <div className="w-full h-screen flex justify-center ">
        <div className="w-[60%] h-full flex flex-col justify-center space-y-5 items-center">
          <h1 className="text-5xl font-semibold playfair-display">Contact</h1>
          <p className="text-lg playfair-display font-stretch-extra-expanded">Whenever you thought of creating some stuff! Mind this location!</p>
          <p className="font-bold playfair-display">#Midguard</p>
    <Link href={'mailto: radhikasuryawanshi279@gmail.com'} className="flex items-center justify-between w-[70%] p-2 mt-5 rounded-lg  transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 hover:border-1 hover:border-gray-200">
      <p className="font-semibold text-[0.8rem] playfair-display ">radhikasuryawanshi279@gmail.com</p>
      <div className="flex-1 mx-4 border-b border-blue-500"></div>
      <div className="w-4 h-4 flex items-center justify-center 
                      rounded-full border border-black ">
        <ArrowUpRight size={14}/>
      </div>
    </Link>
    <Link href={'tel:+917350526068'} className="flex items-center justify-between w-[70%] p-2 mt-5 rounded-lg  transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 hover:border-1 hover:border-gray-200">
      <p className="font-semibold text-[0.8rem] playfair-display">Have a call</p>
      <div className="flex-1 mx-4 border-b border-blue-500"></div>
      <div className="w-4 h-4 flex items-center justify-center 
                      rounded-full border border-black ">
        <ArrowUpRight size={14}/>
      </div>
    </Link>
    <Link href={'https://www.linkedin.com/in/radhikasuryawanshi/'} className="flex items-center justify-between w-[70%] mt-5 p-2 rounded-lg  transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 hover:border-1 hover:border-gray-200">
      <p className="font-semibold text-[0.8rem] playfair-display">Connect me on LinkedIn</p>
      <div className="flex-1 mx-4 border-b border-blue-500"></div>
      <div className="w-4 h-4 flex items-center justify-center 
                      rounded-full border border-black ">
        <ArrowUpRight size={14}/>
      </div>
    </Link>
    </div>
    </div>
  );
}

    