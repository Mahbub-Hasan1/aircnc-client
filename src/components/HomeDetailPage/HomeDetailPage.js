import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HostelsFakeData from '../../HostelsFakeData/HostelsFakeData';
import Navbar from '../ShareComponent/Navbar/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import BathtubIcon from '@material-ui/icons/Bathtub';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import StarIcon from '@material-ui/icons/Star';
import './HomeDetailPage.css';
import EditHostelDetail from './EditeHostelDetail/EditHostelDetail';
import ShowMore from 'react-show-more';
import ImagesHostelDetail from './ImgesHostelDetail/ImagesHostelDetail';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const HomeDetailPage = () => {
    const classes = useStyles();

    const { id } = useParams();

    let hostelDetailData = HostelsFakeData.find(hosData => hosData.id === id);


    return (
        <>
            <Navbar hostelId={id}></Navbar>
            <hr />

            <div className="container">

                {/* images */}
                <ImagesHostelDetail HostelsData={hostelDetailData}></ImagesHostelDetail>

                <br />

                <div className="row container-md">

                    <div className="col-sm-7">

                        {/* This is hostel detail main part */}
                        <div className="row">

                            {/* This is hostel hade line part */}
                            <div className="col-sm-8">
                                <h2 className="detail-hostel-title">{hostelDetailData.title}</h2>
                                <p className="detailLocationTitle">{hostelDetailData.location}</p>
                                <p className="detail-room-evr">
                                    <span>{hostelDetailData.guests} guests</span>
                                    <span>{hostelDetailData.bedrooms} bedrooms</span>
                                    <span>{hostelDetailData.bedrooms} beds</span>
                                    <span>{hostelDetailData.baths} baths</span>
                                </p>
                            </div>

                            {/* This is hostel manager photo part */}
                            <div className="col-sm-4 d-flex justify-content-center">
                                <div className="">
                                    <Avatar
                                        alt="hotel manager img"
                                        src={hostelDetailData.hostelOwnerPhoto}
                                        className={classes.large}
                                        style={{ margin: '0 auto' }}
                                    />
                                    <p className="text-center hotel-manager-name">
                                        {hostelDetailData.hostelOwnerName}
                                    </p>
                                </div>
                            </div><hr />


                        </div>


                        {/* This is hostel rules part */}
                        <div>
                            <div className="d-flex" style={{ marginTop: '25px' }}>
                                <HomeIcon style={{ fontSize: '25px', color: '#6F6F6F' }} />
                                <div className="hostel-rules">
                                    <h5>Entire home</h5>
                                    <p>You'll have the condominium to yourself.</p>
                                </div>
                            </div>
                            <div className="d-flex" style={{ marginTop: '25px' }}>
                                <CheckBoxIcon style={{ fontSize: '25px', color: '#6F6F6F' }} />
                                <div className="hostel-rules">
                                    <h5>Self check-in</h5>
                                    <p>You can check in with the doorman.</p>
                                </div>
                            </div>
                            <div className="d-flex" style={{ marginTop: '25px' }}>
                                <BathtubIcon style={{ fontSize: '25px', color: '#6F6F6F' }} />
                                <div className="hostel-rules">
                                    <h5>Sparkling clean</h5>
                                    <p>10 recent guests said this place was sparkling clean.</p>
                                </div>
                            </div>
                            <div className="d-flex" style={{ marginTop: '25px' }}>
                                <PermIdentityIcon style={{ fontSize: '25px', color: '#6F6F6F' }} />
                                <div className="hostel-rules">
                                    <h5>Rowdra is Superhost</h5>
                                    <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
                                </div>
                            </div>
                        </div>

                        <br /><hr />

                        {/* this is hostel-detail-description part */}
                        <p className="hostel-detail-description">
                            <ShowMore
                                lines={5}
                                more={<h5 style={{ color: '#0377FF' }}>Read more about the space <ExpandMoreIcon /></h5>}
                                less={<p>Show less <ExpandLessIcon /></p>}
                                anchorClass=''
                            >
                                {hostelDetailData.Description}
                            </ShowMore>
                        </p>

                        {/* hostel reviews */}
                        <div className="hostel-reviews">
                            <h5>Reviews</h5>
                            <p>
                                <StarIcon style={{ fontSize: 20, color: '#65EB5D' }} />
                                <span style={{ fontWeight: 'bold' }}> 4.9</span>
                                        ({hostelDetailData.star} reviews)
                                    </p>
                        </div>

                    </div>


                    <div className="col-sm-5">
                        <EditHostelDetail hostelDetailData={hostelDetailData}></EditHostelDetail>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HomeDetailPage;