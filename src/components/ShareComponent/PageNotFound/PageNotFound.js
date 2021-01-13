import React from 'react';
import { useHistory } from 'react-router-dom';
import PageNotFoundImg from "../../../images/PageNotFound.png"

const PageNotFound = () => {

    const history = useHistory();
    const pathChangeToHome = () => {
        history.push('/')
    }

    return (
        <div className="container col-sm-12 col-md-12 col-lg-6" >
            <img src={PageNotFoundImg} className="img-fluid" alt="" />
            <h2 className="text-center">This Page Not Found !!!! 404</h2>

            <button
                onClick={pathChangeToHome}
                type="button"
                class="btn btn-primary btn-lg d-flex justify-content-center mb-5"
                style={{ background: '#6C63FF', fontWeight: 'bold', margin: '0 auto' }}
            >
                Back to Home page
            </button>
            
        </div>
    );
};

export default PageNotFound;