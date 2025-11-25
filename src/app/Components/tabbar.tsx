import Link from "next/link";

export default function Tabbar(){
    return(
        <div className="w-full flex justify-center ">
  <div className="flex items-center gap-3 bg-gray-300/20 backdrop-blur-sm  shadow-lg 
              px-6 py-3 rounded-2xl  ">
    
    
    <button className="w-10 h-10 flex items-center justify-center rounded-full 
                   bg-gray-200 hover:bg-gray-200 transition">
      <Link href={'/'}>
      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" 
           strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H9v4a2 2 0 0 1-2 2H3z"/>
      </svg></Link>
    </button>

   
    <button className="w-10 h-10 flex items-center justify-center rounded-full 
                   bg-gray-200 hover:bg-gray-200 transition">
        <Link href={'about'}>
      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor"
           strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4 0-8 2-8 5v2h16v-2c0-3-4-5-8-5z"/>
      </svg></Link>
    </button>

   
    <button className="w-10 h-10 flex items-center justify-center rounded-full 
                   bg-gray-200 hover:bg-gray-200 transition">
        <Link href={'contact'}>
      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor"
           strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M16 8a5 5 0 1 0 1 7"/>
        <path d="M16 8v7"/>
      </svg></Link>
    </button>

   
    <button className="w-10 h-10 flex items-center justify-center rounded-full 
                   bg-gray-200 hover:bg-gray-200 transition">
        <Link href={'https://github.com/RadhikaSuryawanshi'}>
      <svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5A12 12 0 0 0 0 12.7a12 12 0 0 0 8.2 11.5c.6.1.8-.3.8-.6v-2c-3.3.8-4-1.6-4-1.6-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.2-.7.2-.7-.8-.2-1.3-.8-1.3-.8-.7-.6.1-.6.1-.6 1 .1 1.7 1.1 1.7 1.1.9 1.7 2.6 1.2 3.2.9a2.5 2.5 0 0 1 .7-1.6c-2.6-.3-5.3-1.3-5.3-5.7a4.3 4.3 0 0 1 1.2-3c-.1-.3-.5-1.5.1-3 0 0 1-.3 3 1.2a9.4 9.4 0 0 1 5.5 0c2.1-1.5 3-1.2 3-1.2.6 1.5.2 2.7.1 3a4.3 4.3 0 0 1 1.2 3c0 4.4-2.7 5.4-5.3 5.7a2.6 2.6 0 0 1 .7 1.7v3c0 .3.2.7.8.6a12 12 0 0 0 8.2-11.5A12 12 0 0 0 12 .5Z"/>
      </svg>
      </Link>
    </button>

    <button className="w-10 h-10 flex items-center justify-center rounded-full 
                   bg-gray-200 hover:bg-gray-200 transition">
        <Link href={'Themes'}>
      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor"
           strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M21 12.8A9 9 0 0 1 11.2 3a7 7 0 1 0 9.8 9.8"/>
      </svg></Link>
    </button>

  </div>
</div>

    )
}