import React from 'react';
import Marquee from 'react-fast-marquee';

var skillsList = [
  { id: 1, skill: "Interaction Design" },
  { id: 2, skill: "Collaborative" },
  { id: 3, skill: "Learning Mindset" },
  { id: 4, skill: "Empathy" },
  { id: 5, skill: "Active Listener" },
  { id: 6, skill: "Prototyping" },
  { id: 7, skill: "UX Writing" },
  { id: 8, skill: "Communicative" },
  { id: 9, skill: "Usability Testing" },
  { id: 10, skill: "Sketching" },
  { id: 11, skill: "Thinking Out Loud" },
  { id: 12, skill: "Critical Thinker" },
  { id: 13, skill: "User Research" }
];

function CardEight() {
  return (
    <div className="col-auto p-0">
      <div className="card card-1 rounded-5 m-0 overflow-hidden p-5 text-center bg-light">
        <h4 className='fw-bold fs-4 text-yellow mb-0'>A Pinch of</h4>
        <h4 className='fw-bold fs-4 text-yellow mb-0'>Soft and Hard Skills</h4>
        
        
          {/* Marquee */}
          <Marquee className='marquee mt-4 d-flex gap-2' loop={0} speed={50} pauseOnHover={true}>
            {skillsList.map((item, id) => (
              <span key={id} className={`badge ${item.id % 2 === 0 ? 'bg-marqueeBadge2' : 'bg-marqueeBadge1'} rounded-3 d-flex align-items-center mx-1 text-capitalize`}>
                <strong className='fs-5 p-1 fw-semibold mb-0'>{item.skill}</strong>
              </span>
            ))}
          </Marquee>

      </div>
    </div>
  );
}

export default CardEight;
