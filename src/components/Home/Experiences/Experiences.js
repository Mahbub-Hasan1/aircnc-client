import React from 'react';
import { useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import './Experiences.css';

const ExperiencesData = [
    {
        id: '1',
        location: 'NEW YORK',
        title: 'Dlscover The City`s party',
        prise: '49',
        star: '72',
        img: 'https://i.imgur.com/4BXeIV4.jpg'
    },
    {
        id: '2',
        location: 'NEW YORK',
        title: 'Dlscover The City`s party',
        prise: '49',
        star: '72',
        img: 'https://i.imgur.com/4BXeIV4.jpg'
    },
    {
        id: '3',
        location: 'NEW YORK',
        title: 'Dlscover The City`s party',
        prise: '49',
        star: '72',
        img: 'https://i.imgur.com/4BXeIV4.jpg'
    },
    {
        id: '4',
        location: 'NEW YORK',
        title: 'Dlscover The City`s party',
        prise: '49',
        star: '72',
        img: 'https://i.imgur.com/4BXeIV4.jpg'
    },
    {
        id: '5',
        location: 'NEW YORK',
        title: 'Dlscover The City`s party',
        prise: '49',
        star: '72',
        img: 'https://i.imgur.com/4BXeIV4.jpg'
    },
]

const Experiences = () => {
    const [experiences, setExperiences] = useState(ExperiencesData);

    return (
        <div>
            <div className="row">

                <div className="col-sm">
                    <h4>Experiences</h4>
                </div>

                <div className="col-sm d-flex justify-content-end">
                    <p>See all {'>'}</p>
                </div>

            </div>

            <div className="row">

                {
                    experiences.slice(0, 4).map(experience =>

                        <div key={experience.id} className="col-sm">
                            <div>
                                <img src={experience.img} style={{ width: '100%' }} alt="" />
                            </div>
                            <div>
                                <p className="img-title">{experience.location}</p>
                                <h5 className="experiences-title">{experience.title}</h5>
                                <p className="price-per-person">${experience.prise} per person</p>
                                <p>
                                    <StarIcon style={{ fontSize: 15, color: '#00A799' }} />
                                    <StarIcon style={{ fontSize: 15, color: '#00A799' }} />
                                    <StarIcon style={{ fontSize: 15, color: '#00A799' }} />
                                    <StarIcon style={{ fontSize: 15, color: '#00A799' }} />
                                    <StarHalfIcon style={{ fontSize: 15, color: '#00A799' }} />
                                    <span style={{ fontSize: 13 }}> {experience.star}</span>
                                </p>
                            </div>
                        </div>
                )}

            </div>
        </div>
    );
};

export default Experiences;