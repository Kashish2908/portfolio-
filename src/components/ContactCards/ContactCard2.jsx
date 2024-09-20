import React from 'react'

function ContactCard2() {
    return (
        <>
            <form className='w-100'>
                <div className="mb-3">
                    <input type="text" className="form-control  border border-2 border-warning-subtle" id="exampleInputName" placeholder='Name' />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control border border-2 border-warning-subtle" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                </div>
                <div className="mb-3">
                    <textarea
                        className="form-control border border-2 border-warning-subtle"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        style={{ height: "326px", maxHeight: "326px" }} // Added maxHeight
                    ></textarea>
                </div>


                <button type="submit" className="btn text-light w-100" style={{ backgroundColor: "#041363" }}>Submit</button>
            </form>

        </>
    )
}

export default ContactCard2