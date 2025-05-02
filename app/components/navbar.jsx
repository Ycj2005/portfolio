"use client";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const clicktoopen = () => {
    setOpen(!open);
  }
  return (
    <>
      <div className='mainnavbar m-auto z-10 relative px-3 py-6 text-slate-50 flex items-center justify-between'>
        <div className='text-2xl font-bold cursor-pointer'>Portfolio</div>
        <button onClick={clicktoopen}>
          {
            open ?
              <MdOutlineCancel size={25} color="#fff" className="showbefore1080 cursor-pointer" />
              : <RiMenu3Line size={25} color="#fff" className="showbefore1080 cursor-pointer" />
          }
        </button>
        <div className="font-light text-sm showafter1080">
          <a href={'#about'} className="head cursor-pointer font-bold">About</a>
          <a href={'#skills'} className="head cursor-pointer font-bold">Skills</a>
          <a href={'#project'} className="head cursor-pointer font-bold">Project</a>
          <a href={'#contact'} className="head cursor-pointer font-bold">Contact</a>
        </div>
      </div>
      {
        open &&
        <div className="modalsection text-slate-50 absolute z-20 modal text-center">
          {/* <div className="text-2xl font-bold cursor-pointer my-2">
            Portfolio
          </div> */}
          <div className="flex flex-col items-center justify-center gap-14 mt-2">
            <Link href={'/'} onClick={(e) => setOpen(false)} className="head cursor-pointer font-light underline text-xl">Home</Link>
            <Link href={'#about'} className="head cursor-pointer font-light underline text-xl">About</Link>
            <Link href={'#skills'} className="head cursor-pointer font-light underline text-xl">Skills</Link>
            <Link href={'#project'} className="head cursor-pointer font-light underline text-xl">Project</Link>
            <Link href={'#contact'} className="head cursor-pointer font-light underline text-xl">Contact</Link>
          </div>
        </div>
      }
    </>
  )
}

