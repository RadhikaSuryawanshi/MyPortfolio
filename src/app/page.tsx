'use client'
import Link from "next/link";
import Particles from "../Components/Particles";
import PreLoad from "../Components/SplitScreen";


export default function Mainpage() {
  return(
  <>
  <PreLoad />
  <div className="w-full relative h-screen ">
      <div className="w-full h-[700px] lg:h-[650px] md:[650px] absolute">
        <Particles
          particleColors={['#9b5bfb', '#c8a3ff']}
          particleCount={1000}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false} />
      </div>

      <div className="w-full h-full p-3  flex flex-col justify-center items-center  ">

        <div className="w-full h-[65%] lg:h-[85%] md:h-[85%]  flex flex-col justify-center items-center backdrop-blur-xs dark:backdrop-blur-xs md:backdrop-blur-none ">
          <p className="font-bold text-[0.6rem] lg:text-[1rem]">“She builds software the way she builds herself  <u>Beautifully</u>.”</p>

          <section className="relative w-full h-[40%] flex items-center justify-center overflow-hidden  mt-0 lg:mt-3 ">

            <h1 className="absolute pacifico-regular font-bold text-[35px] md:text-[50px] lg:text-[130px] text-fuchsia-400  tracking-tight leading-none text-fill z-5 ">
              Radhika Suryawanshi
            </h1>
            <img
              src="/profile1.png"
              alt="girl"
              className="absolute w-[150px] md:w-[250px] object-cover object-top mix-blend-darken z-10  " />
          </section>
          <br />
          <p className="font-medium text-[0.9rem]">Design Engineer & Full Stack Developer</p> <br />
          <Link href={'radhikasuryawanshi279@gmail.com'}>
            <p className="font-extralight text-[1rem]">[radhikasuryawanshi279@gmail.com]</p></Link>
        </div>
      </div>
    </div>
    </>

  )
}