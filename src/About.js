import React from 'react'
import {ComingData} from './Array'

const About = () => {
  return (<>
{
  ComingData.map((props)=>{
return(<>
<section className='mainOuterDiv'>    
<img className='imagu' src={props.imgsrc} alt="showing_somethig" />
<p className='pera'>{props.peragraph} </p>
</section>
 </>)
})
}
  </>
  )
}

export default About;
