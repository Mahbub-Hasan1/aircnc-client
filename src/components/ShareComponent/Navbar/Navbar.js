import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import './Navbar.css';
import { SearchContext } from '../../../App';

const Navbar = (props) => {

    const { hostelId } = props;

    const { homesLocation, setHomesLocation } = useContext(SearchContext);

    return (
        <nav className="navbar navbar-expand-lg container">
            <div className="container-fluid">

                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h2 className="navbar-brand logo" style={{ textDecoration: 'none' }}>Aircnc</h2>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {
                    window.location.pathname == '/homes' || window.location.pathname == `/hostel-detail_id=/${hostelId}` ?
                        <>
                            <div className="collapse navbar-collapse d-flex justify-content-end col-sm" id="navbarNav">
                                <input className="nav-search nav-search-input" onChange={(event) => setHomesLocation(event.target.value)} type="text" placeholder="Dhaka Division, Bangladesh" />
                                <button className="nav-search nav-search-btn-left">Apr 13-17</button>
                                <button className="nav-search nav-search-btn-right">3 Guests <SearchIcon style={{ color: '#2BDE8C' }} /></button>
                            </div>
                            <div className="collapse navbar-collapse d-flex justify-content-end col-sm" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Log in</a>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-btn">Sign up</button>
                                    </li>
                                </ul>
                            </div>
                        </>
                        :


                        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Host Your home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Host your experiance</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Help</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Log in</a>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-btn">Sign up</button>
                                </li>
                            </ul>
                        </div>
                }
            </div>
        </nav>
    );
};

export default Navbar;