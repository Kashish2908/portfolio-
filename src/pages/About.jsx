import React from 'react'
import AboutCard1 from '../components/AboutCards/AboutCard1'
import AboutCard2 from '../components/AboutCards/AboutCard2'
import AboutCard3 from '../components/AboutCards/AboutCard3'
import AboutCard4 from '../components/AboutCards/AboutCard4'
import AboutCard5 from '../components/AboutCards/AboutCard5'
import AboutCard6 from '../components/AboutCards/AboutCard6'
import AboutCard7 from '../components/AboutCards/AboutCard7'
import AboutCard8 from '../components/AboutCards/AboutCard8'
import AboutCard9 from '../components/AboutCards/AboutCard9'
import AboutCard10 from '../components/AboutCards/AboutCard10'
import AboutCard11 from '../components/AboutCards/AboutCard11'

function About() {
  const aboutCardSets = [
    [ <AboutCard1 key='1'/>, <AboutCard2 key='2'/>, <AboutCard3 key='3'/>, <AboutCard4 key='4'/>, <AboutCard5 key='5'/>, <AboutCard6 key='6'/>],
    [ <AboutCard7 key='7'/>, <AboutCard8 key='8'/>, <AboutCard9 key='9'/>, <AboutCard10 key='10'/>, <AboutCard11 key='11'/>],
  ]


  aboutCardSets.map((item, id) => {
    item.map((e, i) => {
      if(e.key === "11"){
        console.log("11")
      }
      
    })
  })

  return (
    <>
      <div className='p-5 pb-3'>
        <div className="container ps-5">
          {/* map to create rows */}
          {aboutCardSets.map((cardSet, rowIndex) => (
            <div key={rowIndex} className="row card-layout ms-4 mt-3">
              {/* map over each card sets to  render individual cards */}
              {cardSet.map((CardComponent, cardIndex) => (
                <div key={cardIndex} className="col">
                  <div className={`card card2  rounded-5 m-0 overflow-hidden d-flex align-items-center ${cardIndex === 0 ? 'p-0' : 'p-3'} text-center  ${CardComponent.key === "11" ? 'bg-transparent' : '' }`}>
                    {CardComponent}
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div class="text-secondary">
            <hr />
          </div>
        </div>

      </div>
    </>
  )
}

export default About