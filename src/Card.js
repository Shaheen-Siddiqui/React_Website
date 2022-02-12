import React from 'react';
import {Component_Array} from './Array';
import Contact from './Contact';

const Card=()=>{
  return(<>
  <div className='CardOuter'>
{
Component_Array.map((curr,index)=>{
    return(<>
    
          <Contact
          id={index}
          title={curr.title}
          images={curr.images}
          peragraphs={curr.peragraphs}

          />
          </>)})
}
</div>
        </>)}
export default Card;





