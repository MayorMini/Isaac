import React from 'react'
import "./FirstFoot.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function firstFoot() {
  return (
    <div>
        <div className='container' id='description-div'>
            <div id='description-foot'>
                <h2> Get more beautiful art work here</h2>
               <p id='p-foot'>Get more beautiful art work here, get more beautiful
                art work here, get more beautiful art work here, get more beautiful
                art work here
               </p>
               <button id='explore-btn'>Explore <ArrowForwardIcon id="arrow-icon"/> </button>
            </div>
            <div id='description-image'>
                <div id='first-description'></div>
                <div id='second-description'>
                    <div id='second-second-description'></div>
                    <div id='second-third-description'></div>
                </div>
                <div id='third-description'></div>
                
            </div>
        </div>
    </div>
  )
}

export default firstFoot
