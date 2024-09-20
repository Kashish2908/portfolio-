import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

function Footer() {
  return (
    <>
      <div className="container text-light text-center p-2 px-5">
        <div className="d-flex align-items-center justify-content-between px-5 flex-wrap">
          <div className=" fs-5 fw-bold lh-lg">
            <div>
              <span className='mixBlend-Exclusion'>Crafted with lots of procrastination, inspiration & </span><span>💖</span>
            </div>
            <div className='mixBlend-Exclusion'>
              ©️ 2024 V1.0
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="iconCircle rounded-pill"><CiMail color='black' size={24} /> </div>
            <div className="iconCircle rounded-pill"><FaLinkedinIn color='black' size={24} /> </div>
            <div className="iconCircle rounded-pill"><FaTwitter color='black' size={24} /> </div>
            <div className="iconCircle rounded-pill"><IoLogoInstagram color='black' size={24} /> </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer