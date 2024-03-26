import {useEffect, useState} from "react";
import axios from "axios";
import img from "../../../../img/carousel-1.jpg";
import './List.css';

export default function List() {
    const [recruitmentPost, setRecruitmentPost] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(4);

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
            <div className="container-xxl py-5">
                <div className="container">
                    <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        Danh sách công việc</h1>
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
            </div>

            <ul className="pagination justify-content-center">
                {Array.from({length: Math.ceil(recruitmentPost.length / jobsPerPage)}, (_, i) => i + 1).map(number => (
                    <li key={number} className="page-item">
                        <a onClick={(event) => paginate(number, event)} href="" className="page-link">{number}</a>
                    </li>
                ))}
            </ul>
        </>
    )
}
