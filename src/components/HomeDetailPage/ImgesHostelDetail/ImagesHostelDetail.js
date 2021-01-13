import React from 'react';

const ImagesHostelDetail = (props) => {
    const { HostelsData } = props;
    return (
        <>
            <div className="row d-flex justify-content-center">

                <div className="col-sm-6 img-div">
                    <img className="img-fluid" src={HostelsData.hostelPhoto.img1} alt="" />
                </div>

                <div className="col-sm-6 img-div">
                    <div className="row img-div">
                        <div className="col-sm-6 img-div">
                            <img className="img-fluid" src={HostelsData.hostelPhoto.img2} alt="" />
                        </div>
                        <div className="col-sm-6 img-div">
                            <img className="img-fluid" src={HostelsData.hostelPhoto.img3} alt="" />
                        </div>
                        <div className="col-sm-6 img-div">
                            <img className="img-fluid" src={HostelsData.hostelPhoto.img4} alt="" />
                        </div>
                        <div className="col-sm-6 img-div">
                            <img className="img-fluid" src={HostelsData.hostelPhoto.img5} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ImagesHostelDetail;