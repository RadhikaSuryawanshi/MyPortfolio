'use client'
import { VscAccount, VscArchive, VscColorMode, VscGithub, VscHome, VscSettingsGear } from 'react-icons/vsc';
import Dock from './Dock';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function Dockmain(){
   const router = useRouter();
    const { setTheme } = useTheme();
  const items = [
    { icon: <VscHome size={22} />, label: 'Home', onClick:() => router.push('/') },
    { icon: <VscArchive size={22} />, label: 'About', onClick: () => router.push('/about') },
    { icon: <VscAccount size={22} />, label: 'Contact', onClick: () => router.push('/contact') },
    { icon: <VscGithub size={22} />, label: 'Github', onClick: () => router.push('https://github.com/RadhikaSuryawanshi') },
    { icon: <VscColorMode size={22} />, label: 'Theme', onClick:() => setTheme("dark") },
    
  ];


  
return(
  <Dock 
    items={items}
    panelHeight={68}
    baseItemSize={40}
    magnification={70}
  />
)
}

