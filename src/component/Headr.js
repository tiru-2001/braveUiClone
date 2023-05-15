import React, { useEffect, useState } from 'react'
import './header.css'


const Headr = () => {
    const [date,setdate]=useState(new Date());
    useEffect(()=>{
      
        setInterval(()=>{
            setdate(new Date())
          
        },60000)
    })
  return (
 <>
    <div className="header">
        <div className="sections sec1">
            <div className='sec1_items s1'>
                <span className='colororange samefont'>23,084</span>
                <p className='sub'>Trackers & ads blocked</p>

            </div>
            <div className='sec1_items'>
            <span className='colorpurple samefont'>306.6 <span className='mbi'>Mb</span></span>
                <p className='sub'>Bandwidth saved</p>
            </div>
            <div className='sec1_items'>
            <span className='samefont'>20 <span className='mbi'>minutes</span></span>
                <p className='sub'>Time saved</p>
            </div>
        </div>
        <div className="sections">
            <span className='dat'>{date.toLocaleTimeString('fr', {hour: '2-digit', minute:'2-digit'})}</span>
        </div>
    </div>
 </>
  )
}

export default Headr