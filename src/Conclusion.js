import React from 'react'
import {ComingData} from './Array'

const Conclusion = (props) => {
  return (
    <>
    <h1 className='canclusion_hed'>CONCLUSION</h1>
{
    ComingData.map((props)=>{
        return(
            <div className='mainOuterDiv'>
            <p className='cantent'>{props.peragraph} </p>
            </div>
        )
    })
}
    
    </>
  )
}

export default Conclusion
