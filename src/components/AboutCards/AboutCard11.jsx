import React from 'react'
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import { RiMediumFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";

function AboutCard11() {
  return (
    <>
      <div className='h-100 w-100 p-0 text-center socialCard-layout'>
        <div className="bg-light rounded-4 text-white p-4"><IoLogoInstagram color='black' size={50} /></div>
        <div className="bg-light rounded-4 text-white p-4"><IoLogoInstagram color='black' size={50} /></div>
        <div className="bg-light rounded-4 text-white p-4"><IoLogoInstagram color='black' size={50} /></div>
        <div className="bg-light rounded-4 text-white p-4"><IoLogoInstagram color='black' size={50} /></div>
      </div>
    </>
  )
}

export default AboutCard11