import React from 'react';
import {NavLink} from 'react-router-dom';
const Navlink = () => {
  return (
    <>
     
    <div className="container">
      <nav>
        <ul>
          <NavLink exact="true" to=""><li>Home</li></NavLink>
          <NavLink exact="true" to="/about"><li>About </li></NavLink>
          <NavLink exact="true" to="/contact"><li>Get More</li></NavLink>
          <NavLink exact="true" to="/conclusion"><li>Canclusions</li></NavLink>
        </ul>
      </nav>
    </div> 
    </>
  )
}

export default Navlink
