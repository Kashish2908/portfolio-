import React from 'react'
import { HashLink } from 'react-router-hash-link';

function ProjectCard3() {
    const badgeList = [
        "Competitive Research", "Prototyping", "Usability Testing", "UI Design", "Wireframing"
    ]

    return (
        <>
            <img src="https://images.unsplash.com/photo-1725291022586-a4982173385e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1725289153919-42c99246cbdd?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top rounded-4" alt="..." />

            <div className="card-body px-0">
                <h5 class="card-title bg-dark text-white rounded-pill py-2 text-capitalize">Project title</h5>
                <div className="d-flex gap-2 flex-wrap mt-4">
                    {badgeList.map((item, index) => (
                        <span key={index} class="badge rounded-pill text-bg-beige mb-2">{item}</span>
                    ))}
                </div>
            </div>
            <HashLink to="/" className="overlay text-yellow text-decoration-none fs-3 fw-bold ">View Project</HashLink>
        </>
    )
}

export default ProjectCard3