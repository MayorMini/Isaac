import React from 'react'
import "./nftsellers.css"
import owner1 from "../src/images/image1.jpg"
import owner2 from "../src/images/image2.jpg"
import owner3 from "../src/images/image3.jpg"
import owner4 from "../src/images/image4.jpg"
import owner5 from "../src/images/image5.jpg"
import owner6 from "../src/images/image6.jpeg"

function NFTsellers() {

    const topNftArray =[{   ownersName:"Peter Gills", currentBid:"  10.5ETH", ownersImg:owner1},
    {    ownersName:"Kate Paul", currentBid:"  20.0ETH", ownersImg:owner2},
    {    ownersName:"Joan Kid", currentBid:"  30.0ETH", ownersImg:owner3},
    {      ownersName:"Karl Max", currentBid:"  20.5ETH", ownersImg:owner4},
    {     ownersName:"Karl Max", currentBid:"  21.5ETH", ownersImg:owner5},
    {      ownersName:"Anthony ", currentBid:"  10.5ETH", ownersImg:owner6}
  ] 
  return (
    <div className='container' id='nft-div'>
        <div>
            <h3> Top NFT sellers</h3>
            <div id='nftsellercard'>
            {topNftArray.map((info =>{
      return(        
     
     <div>
    <div id='main-nft'>
      <div id='ownersImg'>
        <img src={info.ownersImg} alt="owners img"  id='ownersImg'/>
      </div>
      <div>
        <h3 id='nft-owner'> {info.ownersName}</h3>
        <p> Over {info.currentBid}</p>
      </div>
    </div>
      

     </div>
    
     
        
      )
    }))}
            </div>
        </div>
        <div id='button-div'>
        <button id='button1'> See More</button>
        </div>
        
    </div>

  )
}

export default NFTsellers