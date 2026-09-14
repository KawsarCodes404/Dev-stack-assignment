import { Suspense } from 'react';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js'
import Banner from './components/banner.js'
import Cards from './components/cards/Cards.js';
import type { ICardType } from './types/techcardtype.js';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardsPromise = async() : Promise<ICardType[]> => {

  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {

  const cardsPromise = CardsPromise();

  return (
    <>
        <Navbar/>

        <Banner/>

        <Suspense fallback = {<h2>loading the desired content wait brother...</h2>}>
                    <Cards cardsPromise = {cardsPromise} />
        </Suspense>

        <Footer/>

        <ToastContainer position="bottom-right" />
    </>
  )
}

export default App