import React from 'react'
import ProjectCard1 from '../components/ProjectCards/ProjectCard1'
import ProjectCard2 from '../components/ProjectCards/ProjectCard2'
import ProjectCard3 from '../components/ProjectCards/ProjectCard3'
import ProjectCard4 from '../components/ProjectCards/ProjectCard4'

function Projects() {

  const projectCardSets = [
    [<ProjectCard1 key='1' />, <ProjectCard2 key='2' />, <ProjectCard3 key='3'/>, <ProjectCard4 key='4' />]
  ]


  return (
    <>
      <div className='p-5 pb-3'>
        <div className="container ps-5">
          {/* map to create rows */}
          {projectCardSets.map((cardSet, rowIndex) => (
            <div key={rowIndex} className="row card-layout ms-4">
              {/* map over each card sets to  render individual cards */}
              {cardSet.map((CardComponent, cardIndex) => (
                <div key={cardIndex} className="col">
                  <div className="card card2  rounded-5 m-0 overflow-hidden d-flex align-items-center p-3 text-center">

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

export default Projects