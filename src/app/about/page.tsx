"use client";
import SplitText from "../../Components/SplitText";

export default function AboutPage(){

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
return(
  <div className="w-full h-screen  p-1 flex justify-center ">
    <div className="md:w-[50%] w-[90%] h-full text-center ">
<SplitText
  text="25, M.Sc. Computer Science (2025) — I'm a Full Stack Developer and Design Engineer enthusiast with a passion for building seamless, high-performance user interfaces. Currently exploring the idea of creating a fast-growing, exclusive UI component library focused on aesthetics, usability, and speed. I care deeply about how interfaces look, feel, and most importantly, function."
  className="md:text-2xl font-extralight text-center dark:text-white text-gray-700 permanent leading-10 text-[1.5rem] "
  delay={100}
  duration={0.2}
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