import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SearchContext } from '../../../App';
import StarIcon from '@material-ui/icons/Star';
import './Hostels.css';
import CancellationFlexibilityPopup from './CancellationFlexibilityPopup/CancellationFlexibilityPopup';
import HostelsFakeData from '../../../HostelsFakeData/HostelsFakeData';


const Hostels = () => {

    const [allHostels, setAllHostels] = useState(HostelsFakeData);
    const { homesLocation, setHomesLocation } = useContext(SearchContext);

    const history = useHistory();
    const hostelDetailPageRoute = (hostelId) => {
        history.push(`/hostel-detail_id=/${hostelId}`)
    }

    return (
        <>
            <div>
                <br />
                <p id="hostel-date">252 stays Apr 13-17 3 guests</p>
                <h5 id="hostel-stay-location">Stay in {homesLocation ? homesLocation : "Dhaka Division"}</h5>
                <div id="hostel-buttons">

                    <button className="hostel-Search-btn">
                        <CancellationFlexibilityPopup></CancellationFlexibilityPopup>
                    </button>

                    <button className="hostel-Search-btn">Type of place</button>
                    <button className="hostel-Search-btn">Price</button>
                    <button className="hostel-Search-btn">Instant Book</button>
                    <button className="hostel-Search-btn">More Filters</button>
                </div>
            </div>


            {
                allHostels.filter((hostel) => {
                    if (homesLocation == "") {
                        return hostel;
                    }
                    else if (hostel.location.toLowerCase().includes(homesLocation.trim().toLowerCase())) {
                        return hostel;
                    }
                }).map(hostel =>

                    <>
                        <div key={hostel.id} className="row hostel-items-card" onClick={()=> hostelDetailPageRoute(hostel.id)}>
                            <div className="col-sm-5 col-md-5 col-lg-5">
                                <img src={hostel.hostelPhoto.img1} className="img-fluid hostel-card-img" alt="hostel-img" />
                            </div>
                            <div className="col-sm-7 col-md-7 col-lg-7">
                                <h5 className="hostel-title">{hostel.title}</h5>
                                <p className="hostel-everything">
                                    <span> •{hostel.guests} guests. </span>
                                    <span> •{hostel.bedrooms} bedrooms. </span>
                                    <span> •{hostel.beds} beds. </span>
                                    <span> •{hostel.baths} baths. </span>
                                </p>
                                <p>{hostel.network}</p>
                                <p className="hostel-status">{hostel.status}</p>
                                <div className="row">
                                    <div className="col-sm">
                                        <StarIcon style={{ fontSize: 15, color: '#65EB5D' }} />{hostel.star}
                                    </div>
                                    <div className="col-sm d-flex justify-content-end">
                                        <h6>${hostel.prise}/<span>night</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr id="hostel-hr"></hr>
                    </>
                )
            }
        </>
    );
};

export default Hostels;