
export default function Mainpage() {
  return(
    <div className="w-full h-screen ">
      <div className="w-full h-full p-3  flex flex-col justify-between">
        <div className="w-full h-[85%]  flex flex-col justify-center items-center">
          <p className="font-bold text-[1rem]">“She builds software the way she builds herself — beautifully.”</p>
   
    <section className="relative w-full h-[40%] flex items-center justify-center overflow-hidden mt-3">

      <h1 className="absolute pacifico-regular font-bold text-[80px] md:text-[130px] text-fuchsia-400  tracking-tight leading-none text-fill z-5">
        Radhika Suryawanshi
      </h1>
      <img
        src="/profile1.png"
        alt="girl"
        className="absolute w-[380px] md:w-[250px] object-cover object-top mix-blend-darken z-10 "
      />
    </section>
    <br />
    <p className="font-medium text-[0.9rem]">Design Engineer & Full Stack Developer</p> <br />
     <p className="font-extralight text-[1rem]">[radhikasuryawanshi279@gmail.com]</p>
        </div>
      {/* <div className="w-full h-[10%] bg-gray-500 flex justify-center items-center">
        <h1>hello</h1>
        </div> */}
      </div>
      
    </div>
    
    
  )
}