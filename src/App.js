import React from 'react';
import "./App.css"
import Navbars from './Navbar';
import Hero from './Hero'
import Ratings from './Ratings';
import Editors from './Editors';
import FirstFoot from './FirstFoot';
import Create from './Create'
import Auctions from './Auctions';
import NFTsellers from './NFTsellers';
import Email from './Email';
import LastFooter from './LastFooter';

//import {BrowserRouter, Router, Route} from "react-router-dom"

function App() {
  return (
  <div>
    <Navbars/>
    <Hero/>
    <Ratings/>
    <Editors/>
    <FirstFoot/>
    <Create/>
    <Auctions/>
    <NFTsellers/>
    <Email/>
    <LastFooter/>
  </div>
  );
}

export default App;
