// export default function AboutPage(){
//     return(
//         <div className="w-full h-screen  p-1 flex justify-center ">
//             <div className="w-[50%] h-full text-center ">
//              <p className=" text-3xl leading-10 text-gray-700 font-stretch-extra-expanded  permanent-marker-regular  ">25, M.Sc. Computer Science (2025) — I'm a Full Stack Developer and Design Engineer enthusiast with a passion for building seamless, high-performance user interfaces. Currently exploring the idea of creating a fast-growing, exclusive UI component library focused on aesthetics, usability, and speed. I care deeply about how interfaces look, feel, and most importantly, function. </p>
//              </div>
//         </div>
//     )
// }

'use client'
import SplitText from "../Components/SplitText";

export default function AboutPage(){

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
return(
  <div className="w-full h-screen  p-1 flex justify-center ">
    <div className="w-[50%] h-full text-center ">
<SplitText
  text="25, M.Sc. Computer Science (2025) — I'm a Full Stack Developer and Design Engineer enthusiast with a passion for building seamless, high-performance user interfaces. Currently exploring the idea of creating a fast-growing, exclusive UI component library focused on aesthetics, usability, and speed. I care deeply about how interfaces look, feel, and most importantly, function."
  className="text-3xl font-semibold text-center text-gray-700 permanent-marker-regular leading-10"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="words"
  from={{ opacity: 0, x: 40 }}
  to={{ opacity: 1, x: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>
</div>
</div>
)
}