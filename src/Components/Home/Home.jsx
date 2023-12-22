import React from "react"; 
import './Home.css';
import toggler from '../Assets/toggle-off.png';


const Home = () => {    
    return(
        <div className='home-container'>
            <div className="home-text">
                <div className="home-text-header">WELCOME!</div>
                <div className="home-text-subheader">TO THE UNIVERSITY OF THE PHILIPPINES MANILA LIBRARY REGISTER</div>
            </div>

            <div className="home-search-container">
                <div className="home-search">
                    <input type="id" placeholder="Enter Book Name"/>
                </div>

                <button className='home-search-button'>
                    SEARCH!
                </button>
            </div>

            <div className="home-search-ins">
                <div className="home-search-in">Search in:</div>
                <img src={toggler} alt="off" />
                <div className="home-toggles-text">PDF/A</div>
                <img src={toggler} alt="off" />
                <div className="home-toggles-text">DOC</div>
                <img src={toggler} alt="off" />
                <div className="home-toggles-text">DOCX</div>
                <img src={toggler} alt="off" />
                <div className="home-toggles-text">PDF</div>
                <img src={toggler} alt="off" />
                <div className="home-toggles-text">TIFF</div>
                <img src={toggler} alt="off" />
                <div className="home-toggles-text">SVG</div>
                <img src={toggler} alt="off" />
                <div className="home-toggles-text">JPEG2000</div>
                <img src={toggler} alt="off" />
                <div className="home-toggles-text">PNG</div>
            </div>

            <div className="home-buttons-container">
                <button className="h-b-c-ul">UNIVERSITY LEVEL</button>
                <button className="h-b-c-cl">COLLEGE LEVEL</button>
                <button className="h-b-c-dl">DEPARTMENT LEVEL</button>
                <button className="h-b-c-upmard">UPMARD</button>
            </div>
        </div>
    );
}

export default Home;