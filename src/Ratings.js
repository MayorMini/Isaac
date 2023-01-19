import React from 'react'
import './Rating.css'
import Marquee from 'react-fast-marquee'

function Ratings() {
  return (
    <div>
        <div className='container-fluid  position-relative'>
        <div class="position-absolute top-0 start-0" id="blur"></div>
        <div id="rating-div" >
            <div id='rate1'>
                <h2>21K+</h2>
                <p>Users</p>
            </div>
            <div id='rate1'>
                <h2>100K+</h2>
                <p>Artwork</p>
            </div>
            <div >
                <h2>20m+</h2>
                <p>NFTs</p>
            </div>
        </div>
        </div>
       <div id='company-logo' className='container'>
       <Marquee gradient={false} speed={100}>
       <div id= 'solana'></div>
        <div id= 'binance'></div>
        <div id= 'bitmex'></div>
        <div id= 'coinbase'></div>
       </Marquee>
        
        
       </div>
    </div>
  )
}

export default Ratings