import img from "../../../img/carousel-1.jpg";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useSelector} from "react-redux";

export default function Enterprise(){
    const user = useSelector(state =>{
        console.log("hello",state)
        return state.users.users
    })
    const [recruitmentPost, setRecruitmentPost] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(4);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/recruitment-posts?idEnterprise=1`).then(res => {
            console.log("data", res.data)
            setRecruitmentPost(res.data)
        })
    }, []);
    const indexOfLastJob = currentPage * jobsPerPage;

    const indexOfFirstJob = indexOfLastJob - jobsPerPage;

    const recentJobs = recruitmentPost.slice(indexOfFirstJob, indexOfLastJob);
    const paginate = (pageNumber, event) => {
        event.preventDefault();
        setCurrentPage(pageNumber);
    };

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
                                    {/*<p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>*/}
                                </div>
                                <div className="container-xxl py-5">
                                    <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="tab-content">
                                            <div id="tab-1" className="tab-pane fade show p-0 active">


                                                {recentJobs.map((item, index) => (
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
                                                                    {/*<div className="mb-3">*/}
                                                                    {/*    <a className="btn btn-primary" href="">Áp dụng ngay bây giờ</a>*/}
                                                                    {/*</div>*/}
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}