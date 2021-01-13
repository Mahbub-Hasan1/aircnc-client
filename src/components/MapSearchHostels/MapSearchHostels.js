import React from 'react';
import Navbar from '../ShareComponent/Navbar/Navbar';
import Hostels from './Hostels/Hostels';
import MapSearch from './MapSearch/MapSearch';


const MapSearchHostels = () => {

    return (
        <div className="container">
            <div className="row">
                <Navbar></Navbar>
                <hr />
                <div className="col-sm-12 col-md-12 col-lg-7">
                    <Hostels></Hostels>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-5">
                    <MapSearch></MapSearch>
                </div>
            </div>
        </div>
    );
};

export default MapSearchHostels;