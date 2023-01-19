import React, { useState } from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useSpring, animated } from 'react-spring';
import { motion } from "framer-motion";

import './Hero.css'


function Hero() {
  const [flip, setflip] = useState(false)

  const props = useSpring({
    to: {opacity:1},
    from: {opacity:0},
    config: {duration:2000},
    reset:true,
    reverse:flip,
    delay:10,
    onRest: ()=> setflip(!flip),
  })
  return (
    <div className='container-fliud'>
       <div id='hero-div'>
       <div id='hero-text-div'>
       <motion.h1
                animate={{ x: [50, 150, 50], opacity: 1, scale: 1.2 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                    yoyo:Infinity
                }}
                initial={{ opacity: 0, scale: 1.5 }}
                whileHover={{ scale: 1.5 }}
            >
                Discover, sell and explore the beautiful art of NFTs
            </motion.h1>
            {/* <h1> Discover, sell and explore the beautiful art of NFTs</h1> */}
            <p id="text-description">Discover and sell the art of NFT, Discover and sell the
                art of NFT. Discover and sell the art of NFT Discover and sell the art of NFT
            </p>
            <div id='directory-div'>
             <div> <button id='explore-btn'>Explore <ArrowForwardIcon id="arrow-icon"/> </button></div>
              <div>
                <button id ="watch-btn">   <  PlayCircleIcon id="play-icon"/> Watch Video</button></div>
            </div>

            <div id='directory-div1'>
             <div> <button id='explore-btn'>Explore <ArrowForwardIcon id="arrow-icon"/> </button></div>
            <div> <  PlayCircleIcon id="play-icon"/> </div>
            </div>
        </div>

        
        
        <div></div>
        <animated.div style={props} id='bored-ape' >

        </animated.div>
        
       </div>
    </div>
  )
}

export default Hero