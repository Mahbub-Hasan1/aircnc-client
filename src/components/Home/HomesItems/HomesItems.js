import React, { useContext, useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import InfiniteCarousel from 'react-leaf-carousel';
import { SearchContext } from '../../../App';
import { useHistory } from 'react-router-dom';

const HomesData = [
    {
        id: '1',
        location: 'Dhaka',
        title: 'Unique Cob Cottage',
        prise: '128',
        star: '284',
        img: 'https://i.imgur.com/ZyDFz4u.jpg'
    },
    {
        id: '2',
        location: 'Sylhet',
        title: 'The Joshua Tree House',
        prise: '250',
        star: '269',
        img: 'https://i.imgur.com/ZyDFz4u.jpg'
    },
    {
        id: '3',
        location: 'Bahobal',
        title: "A Pirate's Life For Me - Houseboat!",
        prise: '209',
        star: '140',
        img: 'https://i.imgur.com/ZyDFz4u.jpg'
    },
    {
        id: '4',
        location: 'NIGHTLIFE-NEW YORK',
        title: 'Dlscover The City`s party',
        prise: '49',
        star: '72',
        img: 'https://i.imgur.com/ZyDFz4u.jpg'
    },
    {
        id: '5',
        location: 'NEW YORK',
        title: 'Dlscover The City`s party',
        prise: '49',
        star: '72',
        img: 'https://i.imgur.com/ZyDFz4u.jpg'
    },
]


const HomesItems = () => {
    const [homes, setHomes] = useState(HomesData);

    const { searchLocation, setSearchLocation, homesLocation, setHomesLocation } = useContext(SearchContext);

    //history push detail page
    let history = useHistory();
    const currentRouteChange = () => {
        history.push("/homes");
    }


    return (
        <div>
            <div className="row">

                <div className="col-sm">
                    <h4>Home </h4>
                </div>

                <div className="col-sm d-flex justify-content-end">
                    <p>See all {'>'}</p>
                </div>

            </div>

            <InfiniteCarousel
                breakpoints={[
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        },
                    },
                ]}
                dots={true}
                showSides={true}
                sidesOpacity={0.5}
                sideSize={0}
                slidesToScroll={3}
                slidesToShow={3}
                scrollOnDevice={true}
            >
                {
                    homes.filter((home) => {
                        if (searchLocation == "") {
                            return home
                        }
                        else if (home.location.toLowerCase().includes(searchLocation.toLowerCase())) {
                            return home
                        }
                    }).map(home =>

                        <div onClick={() => { setHomesLocation(home.location); currentRouteChange(); }} key={home.id} className="home-items-card">
                            <div>
                                <img src={home.img} alt="" />
                            </div>
                            <div>
                                <p className="img-title">{home.location}</p>
                                <h5 className="homes-title">{home.title}</h5>
                                <p className="price-per-person">${home.prise} per person</p>
                                <p>
                                    <StarIcon style={{ fontSize: 15, color: '#00A799' }} />
                                    <StarIcon style={{ fontSize: 15, color: '#00A799' }} />
                                    <StarIcon style={{ fontSize: 15, color: '#00A799' }} />
                                    <StarIcon style={{ fontSize: 15, color: '#00A799' }} />
                                    <StarHalfIcon style={{ fontSize: 15, color: '#00A799' }} />
                                    <span style={{ fontSize: 13 }}> {home.star}</span>
                                </p>
                            </div>
                        </div>
                    )
                }
            </InfiniteCarousel>
        </div>
    );
};

export default HomesItems;