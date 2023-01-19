import React from 'react'
import './lastfooter.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';

function LastFooter() {
  return (
    <div className='container' id='last-footer'>
        <div id='main-footer'>
            <div id='first-footer'>
               <h3> Open Sea</h3>
               <p> Get updates about latest Nfts and Art</p>
            </div>

            <div id='second-footer'>
                <h3> Market Place</h3>
                <ul>
                    <li> Crypto</li>
                    <li> Market</li>
                </ul>
            </div>

            <div id='third-footer'>
                <h3> Resources </h3>
                <ul>
                    <li> Market gap</li>
                    <li> Coin gecko</li>
                </ul>
            </div>

            <div id='fourth-footer'>
                <h3> Company</h3>
                <ul>
                    <li> Open Sea</li>
                    <li> Grandtime</li>
                </ul>
            </div>
        </div>
        <div id='footer-icon'>
            <div>
            <FacebookRoundedIcon id='iconn'/>
            <LinkedInIcon id='iconn'/>
            <InstagramIcon id='iconn'/>
            </div>
            <div>
                <p> copyright All right reserved <CopyrightIcon/> 2022 </p>
            </div>
        </div>
    </div>
  )
}

export default LastFooter