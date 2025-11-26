'use client'
import { VscAccount, VscArchive, VscColorMode, VscGithub, VscHome, VscSettingsGear } from 'react-icons/vsc';
import Dock from './Dock';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Dockmain(){
   const router = useRouter();
  const items = [
    { icon: <VscHome size={20} />, label: 'Home', onClick:() => router.push('/') },
    { icon: <VscArchive size={20} />, label: 'About', onClick: () => router.push('/about') },
    { icon: <VscAccount size={20} />, label: 'Contact', onClick: () => router.push('/contact') },
    { icon: <VscGithub size={20} />, label: 'Github', onClick: () => router.push('https://github.com/RadhikaSuryawanshi') },
    { icon: <VscColorMode size={20} />, label: 'Theme', onClick: () => router.push('') },

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