import React, { createContext, useState } from 'react';
import Navbar from '../ShareComponent/Navbar/Navbar';
import Experiences from './Experiences/Experiences';
import HomesItems from './HomesItems/HomesItems';
import SearchItems from './SearchItems/SearchItems';
import './Home.css';



const Home = () => {



    return (
        <>
            <>
            <Navbar />
            <hr/>
            <div className="container home-items">
                <div className="row">
                    <div className="col-sm-4 col-md-4">
                        <SearchItems />
                    </div>
                    <div className="col-sm-8 col-md-8">
                        <Experiences />
                        <HomesItems />
                    </div>
                </div>
            </div>
            </>
        </>
    );
};

export default Home;