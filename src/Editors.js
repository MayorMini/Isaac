import React, { useState } from 'react'
import "./Editor.css"
import boredape1 from '../src/images/bored ape1.png'
import boredape2 from "../src/images/boredape2222.png"
import boredape3 from '../src/images/boredape3.png'
import boredape4 from '../src/images/boredape4.png'
import boredape5 from '../src/images/boredape5.jpg'
import boredape6 from '../src/images/boredape6.png'
import boredape7 from '../src/images/boredape10.jpg'
import boredape8 from '../src/images/boredape8.jpg'
import boredape9 from '../src/images/boredape9.png'
import boredape10 from '../src/images/boredape10.webp'
import boredape11 from '../src/images/boredape11.png'
import boredape12 from '../src/images/boredape12.jpg'

import owner1 from "../src/images/image1.jpg"
import owner2 from "../src/images/image2.jpg"
import owner3 from "../src/images/image3.jpg"
import owner4 from "../src/images/image4.jpg"
import owner5 from "../src/images/image5.jpg"
import owner6 from "../src/images/image6.jpeg"


function Editors() {
  // const [nft, setNft] = useState([{    photo:boredape1},
  //   {    photo:boredape2},
  //   {    photo:boredape3},
  //   {    photo:boredape4}
  // ] )


  const nftArtArray =[{    photo:boredape1, title:'Tiger Swag', no:'#321', ownersName:"Peter Gills", currentBid:"1.2ETH", ownersImg:owner1},
    {    photo:boredape2,title:'Perfecto Beam', no:'#050', ownersName:"Kate Paul", currentBid:"1.5ETH", ownersImg:owner2},
    {    photo:boredape3, title:'FaveShave Honey', no:'#210', ownersName:"Joan Kid", currentBid:"0.5ETH", ownersImg:owner3},
    {    photo:boredape4,  title:'New Orlean Kid', no:'#080', ownersName:"Karl Max", currentBid:"1.2ETH", ownersImg:owner4},
    {    photo:boredape5,  title:'Homicide Pig', no:'#100', ownersName:"Karl Max", currentBid:"1.2ETH", ownersImg:owner5},
    {    photo:boredape6,  title:'Everton Fox', no:'#001', ownersName:"Anthony ", currentBid:"0.2ETH", ownersImg:owner6}
  ] 

  const nftVideoArray =[{    photo:boredape1, title:'Tiger Swag', no:'#321', ownersName:"Peter Gills", currentBid:"1.2ETH", ownersImg:owner1},
  {    photo:boredape2,title:'Perfecto Beam', no:'#050', ownersName:"Kate Paul", currentBid:"1.5ETH", ownersImg:owner2},
  {    photo:boredape3, title:'FaveShave Honey', no:'#210', ownersName:"Joan Kid", currentBid:"0.5ETH", ownersImg:owner3},
  {    photo:boredape4,  title:'New Orlean Kid', no:'#080', ownersName:"Karl Max", currentBid:"1.2ETH", ownersImg:owner4},
  {    photo:boredape5,  title:'Homicide Pig', no:'#100', ownersName:"Karl Max", currentBid:"1.2ETH", ownersImg:owner5},
  {    photo:boredape6,  title:'Everton Fox', no:'#001', ownersName:"Anthony ", currentBid:"0.2ETH", ownersImg:owner6}
] 

  const nftMusicArray =[{    photo:boredape7, title:'Expression', no:'#321', ownersName:"Peter Gills", currentBid:"1.2ETH", ownersImg:owner1},
  {    photo:boredape8,title:'Perfecto Beam', no:'#6391', ownersName:"Kate Paul", currentBid:"1.5ETH", ownersImg:owner2},
  {    photo:boredape9, title:'Huang Shin', no:'#210', ownersName:"Joan Kid", currentBid:"0.5ETH", ownersImg:owner3},
  {    photo:boredape10,  title:'Dare Devil', no:'#080', ownersName:"Karl Max", currentBid:"1.2ETH", ownersImg:owner4},
  {    photo:boredape11,  title:'Volcano Rocky', no:'#100', ownersName:"Karl Max", currentBid:"1.2ETH", ownersImg:owner5},
  {    photo:boredape12,  title:'Moody Fox', no:'#001', ownersName:"Anthony ", currentBid:"0.2ETH", ownersImg:owner6}
] 

const nftCartoonArray =[{    photo:boredape7, title:'Expression', no:'#321', ownersName:"Peter Gills", currentBid:"1.2ETH", ownersImg:owner1},
{    photo:boredape8,title:'Perfecto Beam', no:'#6391', ownersName:"Kate Paul", currentBid:"1.5ETH", ownersImg:owner2},
{    photo:boredape9, title:'Huang Shin', no:'#210', ownersName:"Joan Kid", currentBid:"0.5ETH", ownersImg:owner3},
{    photo:boredape10,  title:'Dare Devil', no:'#080', ownersName:"Karl Max", currentBid:"1.2ETH", ownersImg:owner4},
{    photo:boredape11,  title:'Volcano Rocky', no:'#100', ownersName:"Karl Max", currentBid:"1.2ETH", ownersImg:owner5},
{    photo:boredape12,  title:'Moody Fox', no:'#001', ownersName:"Anthony ", currentBid:"0.2ETH", ownersImg:owner6}
] 

const nftCraftArray =[{    photo:boredape1, title:'Tiger Swag', no:'#321', ownersName:"Peter Gills", currentBid:"1.2ETH", ownersImg:owner1},
{    photo:boredape2,title:'Perfecto Beam', no:'#050', ownersName:"Kate Paul", currentBid:"1.5ETH", ownersImg:owner2},
{    photo:boredape3, title:'FaveShave Honey', no:'#210', ownersName:"Joan Kid", currentBid:"0.5ETH", ownersImg:owner3},
{ photo:boredape7, title:'Expression', no:'#321', ownersName:"Peter Gills", currentBid:"1.2ETH", ownersImg:owner1},
{    photo:boredape8,title:'Perfecto Beam', no:'#6391', ownersName:"Kate Paul", currentBid:"1.5ETH", ownersImg:owner2},
{    photo:boredape9, title:'Huang Shin', no:'#210', ownersName:"Joan Kid", currentBid:"0.5ETH", ownersImg:owner3},

] 

const nftTokenArray =[
  {    photo:boredape10,  title:'Dare Devil', no:'#080', ownersName:"Karl Max", currentBid:"1.2ETH", ownersImg:owner4},
  {    photo:boredape11,  title:'Volcano Rocky', no:'#100', ownersName:"Karl Max", currentBid:"1.2ETH", ownersImg:owner5},
  {    photo:boredape12,  title:'Moody Fox', no:'#001', ownersName:"Anthony ", currentBid:"0.2ETH", ownersImg:owner6},
  {    photo:boredape3, title:'FaveShave Honey', no:'#210', ownersName:"Joan Kid", currentBid:"0.5ETH", ownersImg:owner3},
  {    photo:boredape4,  title:'New Orlean Kid', no:'#080', ownersName:"Karl Max", currentBid:"1.2ETH", ownersImg:owner4},
  {    photo:boredape5,  title:'Homicide Pig', no:'#100', ownersName:"Karl Max", currentBid:"1.2ETH", ownersImg:owner5},

] 
  const[nftArt, setNftArt] = useState(  nftArtArray.map(info =>{
    return(
      
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
    
    )
  }))

  const [nftMusic, setnftMusic] = useState([''])
  const [nftVideo, setnftVideo] = useState([''])
  const [nftCartoon, setnftCartoon] = useState([''])
  const [nftCraft, setnftCraft] = useState([''])
  const [nftToken, setnftToken] = useState([''])
    


  //the whole onClick function starts here
const handleArt =()=>{
  setnftMusic('')
  setnftVideo('')
  setnftCartoon('')
  setnftCraft('')
  setnftToken('')
  setNftArt (
    nftArtArray.map(info =>{
      return(
        
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
      
      )
    })

  )
  
}
//music
const handleMusic =()=>{
    setNftArt('')
    setnftVideo('')
    setnftCartoon('')
    setnftCraft('')
    setnftToken('')
    setnftMusic (
      nftMusicArray.map(info =>{
        return(
          
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
        
        )
      })
  
    )
    
    
}

//video
const handleVideo =()=>{
  setNftArt('')
  setnftMusic('')
  setnftCraft('')
  setnftCartoon('')
  setnftToken('')
  setnftVideo (
    nftVideoArray.map(info =>{
      return(
        
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
      
      )
    })

  )
}

//carton
const handleCartoon =()=>{
  setNftArt('')
  setnftMusic('')
  setnftVideo('')
  setnftCraft('')
  setnftToken('')
  setnftCartoon (
    nftCartoonArray.map(info =>{
      return(
        
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
      
      )
    })

  )
}

//craft
const handleCraft =()=>{
  setNftArt('')
  setnftMusic('')
  setnftVideo('')
  setnftCartoon('')
  setnftToken('')
  setnftCraft (
    nftCraftArray.map(info =>{
      return(
        
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
      
      )
    })

  )
}
//Token
const handleToken =()=>{
  setNftArt('')
  setnftMusic('')
  setnftVideo('')
  setnftCartoon('')
  setnftCraft('')
  setnftToken (
    nftTokenArray.map(info =>{
      return(
        
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
      
      )
    })

  )
}
  return (
    <div className='container'  >
      <div id='main-editor'>
      <div>
            <h2 id='editors-text'>Editors Pick For The Week</h2>
        </div>
        <div id='editors'>
           <div> <button onClick={handleArt} id='button'>Art</button></div>
           <div> <button onClick={handleMusic}  id='button'>Music</button></div>
           <div> <button  onClick={handleVideo} id='button'>Video</button></div>
           <div> <button onClick={handleCartoon}id='button'>Cartoon</button></div>
           <div> <button onClick={handleCraft}id='button'>Craft</button></div>
           <div> <button onClick={handleToken}id='button'>Token</button></div>
           
         
        </div>
      </div>

      <div id='nft-display'>
      <div id='mainnftcard'>{nftArt}</div>
        <div id='mainnftcard'>{nftMusic}</div>
        <div id='mainnftcard'>{nftVideo}</div>
        <div id='mainnftcard'>{nftCartoon}</div>
        <div id='mainnftcard'>{nftCraft}</div>
        <div id='mainnftcard'>{nftToken}</div>
      </div>
        
    </div>
  )
}

export default Editors