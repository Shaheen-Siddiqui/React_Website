import React from 'react'
import {NavLink} from 'react-router-dom'

const Contact = (props) => {
    return (
    <>

    <div className="card" style={{width: "18rem"}}>
    <img src={props.images} className="card-img-top" alt="Hizabgirl"/>
    <div className="card-body">
    <h5 className="card-title">{props.title} </h5>
    <p className="card-text">{props.peragraphs} </p>
    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>

    </div>
    </div>
    </>
  )
}
export default Contact;
;