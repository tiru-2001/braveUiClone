import React from 'react'
import g from "../images/g.png"
import y from "../images/y.png"
import './body.css'

const Body = () => {
  return (
<>
    <div className="bodycontainer">
      <div className='subco'>
        <div className="imgcon">
          <img src={g} alt="google" />
        </div>
        <p className='belowtext'>Google</p>
      </div>
      <div className='subco'>
      <div className="imgcon">
        <img src={y} alt="youtube" />
      </div>
      <p className='belowtext'>YouTube</p>
      </div>
    </div>
</>
  )
}

export default Body