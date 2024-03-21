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

           <div className="container-fluid p-0">
               <div className="owl-carousel header-carousel position-relative">
                   <div className="owl-carousel-item position-relative">
                       <img className="img-fluid" src={img} alt=""/>
                           <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"  style={{background: "rgba(43, 57, 64, .5)"}}>
                               <div className="container">
                                   <div className="row justify-content-start">
                                       <div className="col-10 col-lg-8">
                                           <h1 className="display-3 text-white animated slideInDown mb-4">Find The Perfect Job That You Deserved</h1>
                                           <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                           <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Search A Job</a>
                                           <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Find A Talent</a>
                                       </div>
                                   </div>
                               </div>
                           </div>
                   </div>
                   <div className="owl-carousel-item position-relative">
                       <img className="img-fluid" src={img} alt=""/>
                           <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: "rgba(43, 57, 64, .5)"}}>
                               <div className="container">
                                   <div className="row justify-content-start">
                                       <div className="col-10 col-lg-8">
                                           <h1 className="display-3 text-white animated slideInDown mb-4">Find The Best Startup Job That Fit You</h1>
                                           <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                           <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Search A Job</a>
                                           <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Find A Talent</a>
                                       </div>
                                   </div>
                               </div>
                           </div>
                   </div>
               </div>
           </div>
            {/*Carousel End */}
       </>
    );
}
