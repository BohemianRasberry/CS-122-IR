import React from "react";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import BG from './Components/Background/BG';

function PageHome() {
    return(
        <div>
            <Header />
            <Home />
            <BG />
        </div>
    )
}

export default PageHome