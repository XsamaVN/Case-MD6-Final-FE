import img from "../../../img/carousel-1.jpg";
import React from "react";
import {Link} from "react-router-dom";

export default function Enterprise(){
    return(
        <>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-9 col-xl-7">
                        <div className="card">
                            <div className="rounded-top text-white d-flex flex-row" style={{backgroundColor: "#00B074", height:"200px"}}>

                                <div className="ms-4 mt-5 d-flex flex-column" style={{width: "150px"}}>
                                    {/*<button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark"*/}
                                    {/*        style={{zIndex: 1, marginTop: "160px"}}>*/}
                                    {/*    Edit profile*/}
                                    {/*</button>*/}
                                    <Link to={""} className="btn btn-primary" data-mdb-ripple-color="dark" style={{zIndex: 1, marginTop: "160px"}}>Edit profile</Link>
                                </div>
                                <div className="ms-3" style={{marginTop: "130px"}}>
                                    <h5>Andy Horwitz</h5>
                                    <p>New York</p>
                                </div>
                            </div>
                            <div className="p-4 text-black" style={{backgroundColor: "#f8f9fa"}}>
                                <div className="d-flex justify-content-end text-center py-1">
                                    <div>
                                        <p className="mb-1 h5">253</p>
                                        <p className="small text-muted mb-0">Photos</p>
                                    </div>
                                    <div className="px-3">
                                        <p className="mb-1 h5">1026</p>
                                        <p className="small text-muted mb-0">Followers</p>
                                    </div>
                                    <div>
                                        <p className="mb-1 h5">478</p>
                                        <p className="small text-muted mb-0">Following</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-4 text-black">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1">About</p>
                                    <div className="p-4" style={{backgroundColor: "#f8f9fa"}}>
                                        <p className="font-italic mb-1">Web Developer</p>
                                        <p className="font-italic mb-1">Lives in New York</p>
                                        <p className="font-italic mb-0">Photographer</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <p className="lead fw-normal mb-0">Recent recruitment</p>
                                    <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
                                </div>
                                <div className="row g-1">
                                    <div className="col">
                                        <div className="job-item p-4 mb-4">
                                            <div className="row g-4">
                                                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                    <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style={{ width: '80px', height: '80px' }} />
                                                    <div className="text-start ps-4">
                                                        <h5 className="mb-3">Software Engineer</h5>
                                                        <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                        <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                                        <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                    <div className="d-flex mb-3">
                                                        <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                                        <a className="btn btn-primary" href="">Apply Now</a>
                                                    </div>
                                                    <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="job-item p-4 mb-4">
                                            <div className="row g-4">
                                                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                    <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style={{ width: '80px', height: '80px' }} />
                                                    <div className="text-start ps-4">
                                                        <h5 className="mb-3">Software Engineer</h5>
                                                        <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                        <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                                        <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                    <div className="d-flex mb-3">
                                                        <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                                        <a className="btn btn-primary" href="">Apply Now</a>
                                                    </div>
                                                    <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="job-item p-4 mb-4">
                                            <div className="row g-4">
                                                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                    <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style={{ width: '80px', height: '80px' }} />
                                                    <div className="text-start ps-4">
                                                        <h5 className="mb-3">Software Engineer</h5>
                                                        <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                        <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                                        <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                    <div className="d-flex mb-3">
                                                        <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                                        <a className="btn btn-primary" href="">Apply Now</a>
                                                    </div>
                                                    <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="job-item p-4 mb-4">
                                            <div className="row g-4">
                                                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                    <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style={{ width: '80px', height: '80px' }} />
                                                    <div className="text-start ps-4">
                                                        <h5 className="mb-3">Software Engineer</h5>
                                                        <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                        <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                                        <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                    <div className="d-flex mb-3">
                                                        <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                                        <a className="btn btn-primary" href="">Apply Now</a>
                                                    </div>
                                                    <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="job-item p-4 mb-4">
                                            <div className="row g-4">
                                                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                    <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style={{ width: '80px', height: '80px' }} />
                                                    <div className="text-start ps-4">
                                                        <h5 className="mb-3">Software Engineer</h5>
                                                        <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                        <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                                        <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                    <div className="d-flex mb-3">
                                                        <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                                        <a className="btn btn-primary" href="">Apply Now</a>
                                                    </div>
                                                    <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}