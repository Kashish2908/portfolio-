import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import StackIcon from "tech-stack-icons";



var stackList = [
  {
    id: 1, skill: "js"
  },

  {
    id: 2, skill: "reactjs"
  },

  {
    id: 3, skill: "nodejs"
  },

  {
    id: 4, skill: "mongoose"
  },

  {
    id: 5, skill: "mongodb"
  },

  {
    id: 6, skill: "vitejs"
  },

  {
    id: 7, skill: "html5"
  },

  {
    id: 8, skill: "css3"
  },

  {
    id: 9, skill: "bootstrap5"
  },

  {
    id: 10, skill: "flutter"
  },

  {
    id: 11, skill: "dart"
  },

  {
    id: 12, skill: "c++"
  },

  {
    id: 13, skill: "python"
  },

  {
    id: 14, skill: "tailwindcss"
  },

]





function CardNine() {
  return (
    <div className="col-auto p-0">
      <div className="card card-1 rounded-5 m-0 overflow-hidden  p-5 text-center bg-light">
        <h4 className='fw-bold fs-4 text-yellow mb-0'>My Top-Notch</h4>
        <h4 className='fw-bold fs-4 text-yellow mb-0'>Stacks</h4>
        <Marquee className='marquee mt-4 d-flex gap-2' loop={0} speed={50} pauseOnHover={true}>
          {stackList.map((item, id) => (
            // <span key={id} class={`badge ${item.id % 2 === 0 ? 'bg-marqueeBadge2' : 'bg-marqueeBadge1'} rounded-3 d-flex align-items-center mx-1 text-capitalize`}>
            //   <strong className='fs-4 p-1 fw-semibold mb-0'>{item.skill}</strong>
            // </span>
            <StackIcon key={id} name={item.skill} className='w-50' />
          ))}
          
        </Marquee>
      </div>

    </div>
  );
}

export default CardNine

