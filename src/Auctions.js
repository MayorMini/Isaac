import React from 'react'
import "./Auctions.css"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import boredape7 from '../src/images/boredape10.jpg'
import boredape11 from '../src/images/boredape11.png'
import boredape12 from '../src/images/boredape12.jpg'
import owner1 from "../src/images/image1.jpg"
import owner5 from "../src/images/image5.jpg"
import owner6 from "../src/images/image6.jpeg"


function Auctions() {
  const nftAuction1Array =[{    photo:boredape7, title:'Expression', no:'#321', ownersName:"Peter Gills", currentBid:"1.2ETH", ownersImg:owner1},
// {    photo:boredape8,title:'Perfecto Beam', no:'#6391', ownersName:"Kate Paul", currentBid:"1.5ETH", ownersImg:owner2},
// {    photo:boredape9, title:'Huang Shin', no:'#210', ownersName:"Joan Kid", currentBid:"0.5ETH", ownersImg:owner3},
// {    photo:boredape10,  title:'Dare Devil', no:'#080', ownersName:"Karl Max", currentBid:"1.2ETH", ownersImg:owner4},
// {    photo:boredape11,  title:'Volcano Rocky', no:'#100', ownersName:"Karl Max", currentBid:"1.2ETH", ownersImg:owner5},
// {    photo:boredape12,  title:'Moody Fox', no:'#001', ownersName:"Anthony ", currentBid:"0.2ETH", ownersImg:owner6}
] 

const nftAuction2Array = [{    photo:boredape11,  title:'Volcano Rocky', no:'#100', ownersName:"Karl Max", currentBid:"1.2ETH", ownersImg:owner5},]
const nftAuction3Array = [{    photo:boredape12,  title:'Moody Fox', no:'#001', ownersName:"Anthony ", currentBid:"0.2ETH", ownersImg:owner6}]
 

     
  
  return (
    <div className='container' id='swiper-container'>
        <div id='swiper-text'>
            <h2 > Live auctions</h2>
        </div>
            <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div >
        {nftAuction1Array.map((info =>{
      return(
        <div>
           
     <div id='nft-card'>
     <div id='realcard' >
     <div id='xxx'>
       <img src={info.photo} alt='imeeeee' id='img'/>
     </div>
    <div id="info">
    <h3> {info.title}</h3>
      <h3 id='info-no'> {info.no}</h3>
    </div>
    <div id='owner'>
      <div id='ownersImg'>
        <img src={info.ownersImg} alt="owners img"  id='ownersImg'/>
      </div>
      <div>
        <p id='p'>Owned By</p>
        <p> {info.ownersName}</p>
      </div>
     <div>
      <p id='p'>Current-Bid</p>
     <p id='bid'> {info.currentBid}</p>
     </div>
    </div>
      

     </div>
    
     </div>
        </div>
      )
    }))}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div >
      {
         nftAuction3Array.map((info =>{
          return(
            <div>
               
         <div id='nft-card'>
         <div id='realcard' >
         <div id='xxx'>
           <img src={info.photo} alt='imeeeee' id='img'/>
         </div>
        <div id="info">
        <h3> {info.title}</h3>
          <h3 id='info-no'> {info.no}</h3>
        </div>
        <div id='owner'>
          <div id='ownersImg'>
            <img src={info.ownersImg} alt="owners img"  id='ownersImg'/>
          </div>
          <div>
            <p id='p'>Owned By</p>
            <p> {info.ownersName}</p>
          </div>
         <div>
          <p id='p'>Current-Bid</p>
         <p id='bid'> {info.currentBid}</p>
         </div>
        </div>
          
    
         </div>
        
         </div>
            </div>
          )
        }))
      }
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div >
        {
           nftAuction1Array.map((info =>{
            return(
              <div>
                 
           <div id='nft-card'>
           <div id='realcard' >
           <div id='xxx'>
             <img src={info.photo} alt='imeeeee' id='img'/>
           </div>
          <div id="info">
          <h3> {info.title}</h3>
            <h3 id='info-no'> {info.no}</h3>
          </div>
          <div id='owner'>
            <div id='ownersImg'>
              <img src={info.ownersImg} alt="owners img"  id='ownersImg'/>
            </div>
            <div>
              <p id='p'>Owned By</p>
              <p> {info.ownersName}</p>
            </div>
           <div>
            <p id='p'>Current-Bid</p>
           <p id='bid'> {info.currentBid}</p>
           </div>
          </div>
            
      
           </div>
          
           </div>
              </div>
            )
          }))
        }
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div >
        {
           nftAuction2Array.map((info =>{
            return(
              <div>
                 
           <div id='nft-card'>
           <div id='realcard' >
           <div id='xxx'>
             <img src={info.photo} alt='imeeeee' id='img'/>
           </div>
          <div id="info">
          <h3> {info.title}</h3>
            <h3 id='info-no'> {info.no}</h3>
          </div>
          <div id='owner'>
            <div id='ownersImg'>
              <img src={info.ownersImg} alt="owners img"  id='ownersImg'/>
            </div>
            <div>
              <p id='p'>Owned By</p>
              <p> {info.ownersName}</p>
            </div>
           <div>
            <p id='p'>Current-Bid</p>
           <p id='bid'> {info.currentBid}</p>
           </div>
          </div>
            
      
           </div>
          
           </div>
              </div>
            )
          }))
        }
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Auctions