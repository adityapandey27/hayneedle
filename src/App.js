import './App.css';
import Ads from './Components/ads';
import NavbarShow from '../src/Components/Navbar/navbarShow.js';
import CarouselA from './Components/carousel.js';
import SquareItem from './Components/squareItem';
import ExpressStyle from './Components/expressStyle';
import CommonOffer from './Components/commonOffer';
import Bottom from './Components/bottom';
import Curated from './Components/curated';
import Trending from './Components/trending';
import HashTag from './Components/hashTag';
import DesignRoom from './Components/designRoom';
// import A from './Components/a';
// import temp from './Components/temp';
import Temp from './Components/temp';

import { expressData } from './Data/express';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    // <BrowserRouter>
    <>
     <Ads/>
      <NavbarShow/>
      <CarouselA/>
      <CommonOffer/>
      <SquareItem/>
      <ExpressStyle data={expressData} />
      <DesignRoom/>
      <Curated/>
      <Trending/>
      <HashTag/>
      <CommonOffer/>
      <Bottom/>
      
      
    </>
    
    
  );
}

export default App;