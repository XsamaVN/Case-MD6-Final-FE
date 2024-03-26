import {Link} from "react-router-dom";
import $ from 'jquery';
import React, {useEffect, useState} from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/owl.carousel';
import img from '../img/carousel-1.jpg'
import axios from "axios";




export default function Body() {
    const [recruitmentPost, setRecruitmentPost] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(3);

    useEffect(() => {
        axios.get('http://localhost:8080/api/recruitment-posts').then(res => {
            console.log("data", res.data)
            setRecruitmentPost(res.data)
        })
    }, []);


    const indexOfLastJob = currentPage * jobsPerPage;

    const indexOfFirstJob = indexOfLastJob - jobsPerPage;

    const currentJobs = recruitmentPost.slice(indexOfFirstJob, indexOfLastJob);

    const paginate = (pageNumber, event) => {
        event.preventDefault();
        setCurrentPage(pageNumber);
    };
    return (
        <>
            {/*<div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">*/}
            {/*    <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">*/}
            {/*        <span className="sr-only">Loading...</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*Search Start */}
           <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding:"35px"}}>
               <div className="container">
                   <div className="row g-2">
                       <div className="col-md-10">
                           <div className="row g-2">
                               <div className="col-md-4">
                                   <input type="text" className="form-control border-0" placeholder="Keyword" />
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

           {/*<div className="container-fluid p-0">*/}
           {/*    <div className="owl-carousel header-carousel position-relative">*/}
           {/*        <div className="owl-carousel-item position-relative">*/}
           {/*            <img className="img-fluid" src={img} alt=""/>*/}
           {/*                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"  style={{background: "rgba(43, 57, 64, .5)"}}>*/}
           {/*                    <div className="container">*/}
           {/*                        <div className="row justify-content-start">*/}
           {/*                            <div className="col-10 col-lg-8">*/}
           {/*                                <h1 className="display-3 text-white animated slideInDown mb-4">Find The Perfect Job That You Deserved</h1>*/}
           {/*                                <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>*/}
           {/*                                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Search A Job</a>*/}
           {/*                                <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Find A Talent</a>*/}
           {/*                            </div>*/}
           {/*                        </div>*/}
           {/*                    </div>*/}
           {/*                </div>*/}
           {/*        </div>*/}
           {/*        <div className="owl-carousel-item position-relative">*/}
           {/*            <img className="img-fluid" src={img} alt=""/>*/}
           {/*                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: "rgba(43, 57, 64, .5)"}}>*/}
           {/*                    <div className="container">*/}
           {/*                        <div className="row justify-content-start">*/}
           {/*                            <div className="col-10 col-lg-8">*/}
           {/*                                <h1 className="display-3 text-white animated slideInDown mb-4">Find The Best Startup Job That Fit You</h1>*/}
           {/*                                <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>*/}
           {/*                                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Search A Job</a>*/}
           {/*                                <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Find A Talent</a>*/}
           {/*                            </div>*/}
           {/*                        </div>*/}
           {/*                    </div>*/}
           {/*                </div>*/}
           {/*        </div>*/}
           {/*    </div>*/}
           {/*</div>*/}
            {/*Carousel End */}
            <div className="container-xxl py-5">
                <div className="container">
                    <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Explore By Category</h1>
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                                <h6 className="mb-3">Marketing</h6>
                                <p className="mb-0">123 Vacancy</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                                <h6 className="mb-3">Customer Service</h6>
                                <p className="mb-0">123 Vacancy</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                                <h6 className="mb-3">Human Resource</h6>
                                <p className="mb-0">123 Vacancy</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-tasks text-primary mb-4"></i>
                                <h6 className="mb-3">Project Management</h6>
                                <p className="mb-0">123 Vacancy</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-chart-line text-primary mb-4"></i>
                                <h6 className="mb-3">Business Development</h6>
                                <p className="mb-0">123 Vacancy</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-hands-helping text-primary mb-4"></i>
                                <h6 className="mb-3">Sales & Communication</h6>
                                <p className="mb-0">123 Vacancy</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-book-reader text-primary mb-4"></i>
                                <h6 className="mb-3">Teaching & Education</h6>
                                <p className="mb-0">123 Vacancy</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <a className="cat-item rounded p-4" href="">
                                <i className="fa fa-3x fa-drafting-compass text-primary mb-4"></i>
                                <h6 className="mb-3">Design & Creative</h6>
                                <p className="mb-0">123 Vacancy</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="row g-0 about-bg rounded overflow-hidden">
                                <div className="col-6 text-start">
                                    <img className="img-fluid w-100" src="img/about-1.jpg" alt="About 1"/>
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid" src="img/about-2.jpg"
                                         style={{width: '85%', marginTop: '15%'}} alt="About 2"/>
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid" src="img/about-3.jpg" style={{width: '85%'}}
                                         alt="About 3"/>
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid w-100" src="img/about-4.jpg" alt="About 4"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="mb-4">We Help To Get The Best Job And Find A Talent</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
                                amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
                                magna dolore erat amet</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet
                            </p>
                            <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/*Job Listing*/}
            <div className="container-xxl py-5">
                <div className="container">
                    <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>
                    <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">


                                {currentJobs.map((item, index) => (
                                    <div className="job-item p-4 mb-4">
                                        <div className="row g-4">
                                            <div className="col-sm-12 col-md-8">
                                                <div className="d-flex align-items-center">
                                                    <img className="flex-shrink-0 img-fluid border rounded"
                                                         src="/"
                                                         alt=""
                                                         style={{width: "140px", height: "150px"}}/>
                                                    <div className="text-start ps-4 item-details">
                                                        <h5 className="mb-3" style={{color: "green"}}>{item.title}</h5>
                                                        <span className="text-truncate me-3"><i
                                                            className="fa fa-map-marker-alt text-primary me-2"></i>{item.enterprise.address},{item.enterprise.branch}</span>
                                                        <span className="text-truncate me-3"><i
                                                            className="far fa-clock text-primary me-2"></i>{item.workingForm}</span>
                                                        <span className="text-truncate me-0"><i
                                                            className="far fa-money-bill-alt text-primary me-2"></i>{item.salary}</span>
                                                        <span
                                                            className="text-truncate me-0 mr-5">Kinh nghiệm: {item.exp}</span>
                                                        <span
                                                            className="text-truncate me-5 mr-5">Chức vụ: {item.position}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4">
                                                <div
                                                    className="d-flex flex-column align-items-start align-items-md-end justify-content-between h-100">
                                                    <div className="mb-3">
                                                        <a className="btn btn-primary" href="">Áp dụng ngay bây giờ</a>
                                                    </div>
                                                    <small className="text-truncate"><i
                                                        className="far fa-calendar-alt text-primary me-2"></i>Ngày hết
                                                        hạn: {item.expiryDate}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="pagination justify-content-center">
                    {Array.from({length: Math.ceil(recruitmentPost.length / jobsPerPage)}, (_, i) => i + 1).map(number => (
                        <li key={number} className="page-item">
                            <a onClick={(event) => paginate(number, event)} href="" className="page-link">{number}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
