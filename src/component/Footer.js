import React from 'react'
import './footer.css'
const Footer = () => {
  return (
   <>
    <div className="Footer">
      <div className='footerChilds'>
        <p className='phototitle'>photo by <span className='ti'><strong>Dylan Malval</strong></span></p>
      </div>
      <div className='footerChilds'>
        <div className='bori'>
            <span className='icons'> <i class="fa-solid fa-sliders i"></i></span>
            <span className='wor'><strong>Customize</strong></span>
        </div>
        <div className='bbo'>
      
           <span className='spei'> <i class="fa-solid fa-gear i"></i></span>
           <span className='spei'>     <i class="fa-solid fa-book-bookmark i"></i></span>
         
          <span className='spei'>  <i class="fa-sharp fa-solid fa-clock-rotate-left i"></i></span>
     
       <span className='spei'>   <i class="fa-solid fa-video i"></i></span>
        </div>
      </div>

    </div>
   </>
  )
}

export default Footer