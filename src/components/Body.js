import {Link} from "react-router-dom";
import img from '../img/carousel-1.jpg'

export default function Body() {
    return (
        <>
            {/*<div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">*/}
            {/*    <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">*/}
            {/*        <span className="sr-only">Loading...</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*Search Start */}
            <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding: "35px"}}>
                <div className="container">
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <div className="col-md-4">
                                    <input type="text" className="form-control border-0" placeholder="Keyword"/>
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select border-0">
                                        <option selected>Category</option>
                                        <option value="1">Category 1</option>
                                        <option value="2">Category 2</option>
                                        <option value="3">Category 3</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select border-0">
                                        <option selected>Location</option>
                                        <option value="1">Location 1</option>
                                        <option value="2">Location 2</option>
                                        <option value="3">Location 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-dark border-0 w-100">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*Search End */}

            {/*Carousel Start */}

            <div className="container-fluid p-0">
                <div className="owl-carousel header-carousel position-relative">
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src={img} alt=""/>
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                             style={{background: "rgba(43, 57, 64, .5)"}}>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-10 col-lg-8">
                                        <h1 className="display-3 text-white animated slideInDown mb-4">Find The Perfect
                                            Job That You Deserved</h1>
                                        <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem.
                                            Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et
                                            kasd rebum sea elitr.</p>
                                        <a href=""
                                           className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Search
                                            A Job</a>
                                        <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Find
                                            A Talent</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src={img} alt=""/>
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                             style={{background: "rgba(43, 57, 64, .5)"}}>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-10 col-lg-8">
                                        <h1 className="display-3 text-white animated slideInDown mb-4">Find The Best
                                            Startup Job That Fit You</h1>
                                        <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem.
                                            Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et
                                            kasd rebum sea elitr.</p>
                                        <a href=""
                                           className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Search
                                            A Job</a>
                                        <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Find
                                            A Talent</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Carousel End */}



            <div className="container-xxl py-5">
                <div className="container">
                    <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>
                    <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">

                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">

                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded"
                                                 src="../../Desktop/Project/MD6FE/md6-fe/public/img/com-logo-1.jpg"
                                                 alt=""
                                                 style={{width: "80px", height: "80px"}}/>
                                            <div className="text-start ps-4">
                                                <h5 className="mb-3">Software Engineer</h5>
                                                <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                                <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-primary me-2"></i>Full Time</span>
                                                <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                            </div>
                                        </div>
                                        <div
                                            className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <a className="btn btn-light btn-square me-3" href=""><i
                                                    className="far fa-heart text-primary"></i></a>
                                                <a className="btn btn-primary" href="/list">Apply Now</a>
                                            </div>
                                            <small className="text-truncate"><i
                                                className="far fa-calendar-alt text-primary me-2"></i>Date
                                                Line: 01 Jan, 2045</small>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
