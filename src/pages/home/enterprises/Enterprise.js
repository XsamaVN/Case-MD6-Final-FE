export default function Enterprise(){
    return(
        <>
            <section className="profile-header">
            </section>
            <section className="pb80" id="company-profile">
                <div className="container">


                    <div className="row company-profile">


                        <div className="col-md-3 col-xs-12">
                            <div className="profile-photo">
                                <img src="images/companies/envato.svg" className="img-responsive" alt=""/>
                            </div>


                            <ul className="social-btns list-inline text-center mt20">

                                <li>
                                    <a href="#" className="social-btn-roll facebook transparent">
                                        <div className="social-btn-roll-icons">
                                            <i className="social-btn-roll-icon fa fa-facebook"></i>
                                            <i className="social-btn-roll-icon fa fa-facebook"></i>
                                        </div>
                                    </a>
                                </li>


                                <li>
                                    <a href="#" className="social-btn-roll twitter transparent">
                                        <div className="social-btn-roll-icons">
                                            <i className="social-btn-roll-icon fa fa-twitter"></i>
                                            <i className="social-btn-roll-icon fa fa-twitter"></i>
                                        </div>
                                    </a>
                                </li>


                                <li>
                                    <a href="#" className="social-btn-roll google-plus transparent">
                                        <div className="social-btn-roll-icons">
                                            <i className="social-btn-roll-icon fa fa-google-plus"></i>
                                            <i className="social-btn-roll-icon fa fa-google-plus"></i>
                                        </div>
                                    </a>
                                </li>


                                <li>
                                    <a href="#" className="social-btn-roll instagram transparent">
                                        <div className="social-btn-roll-icons">
                                            <i className="social-btn-roll-icon fa fa-instagram"></i>
                                            <i className="social-btn-roll-icon fa fa-instagram"></i>
                                        </div>
                                    </a>
                                </li>


                                <li>
                                    <a href="#" className="social-btn-roll linkedin transparent">
                                        <div className="social-btn-roll-icons">
                                            <i className="social-btn-roll-icon fa fa-linkedin"></i>
                                            <i className="social-btn-roll-icon fa fa-linkedin"></i>
                                        </div>
                                    </a>
                                </li>

                            </ul>


                        </div>

                        <div className="col-md-9 col-xs-12">
                            <div className="profile-descr">


                                <div className="profile-title">
                                    <h2 className="capitalize">envato</h2>
                                    <h5 className="pt10">Marketplace</h5>
                                </div>


                                <div className="profile-details mt20">
                                    <p>Envato Market is a collection of themed marketplaces, where creatives sell digital assets to help bring your ideas to life.</p>
                                </div>

                                <ul className="profile-info mt20 nopadding">
                                    <li>
                                        <i className="fa fa-map-marker"></i>
                                        <span>Melbourn, Australia</span>
                                    </li>

                                    <li>
                                        <i className="fa fa-globe"></i>
                                        <a href="#">envato.com</a>
                                    </li>

                                    <li>
                                        <i className="fa fa-phone"></i>
                                        <span>(+1) 123 456 7890</span>
                                    </li>
                                </ul>

                            </div>
                        </div>


                    </div>

                </div>
            </section>







            <section className="company-jobs ptb80">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="pb60">Our Latest Jobs</h3>
                        </div>
                    </div>


                    <div className="single-job-post row shadow-hover">

                        <div className="col-md-2 col-xs-3 nopadding">
                            <div className="job-company">
                                <a href="#">
                                    <img src="images/companies/envato.svg" alt=""/>
                                </a>
                            </div>
                        </div>


                        <div className="col-md-8 col-xs-6 ptb20">
                            <div className="job-title">
                                <a href="job-page.html">php senior developer</a>
                            </div>
                        </div>


                        <div className="col-md-2 col-xs-3 ptb30">
                            <div className="job-category">
                                <a href="javascript:void(0)" className="btn btn-green btn-small btn-effect">full time</a>
                            </div>
                        </div>
                    </div>

                    <div className="single-job-post row mt30 shadow-hover">

                        <div className="col-md-2 col-xs-3 nopadding">
                            <div className="job-company">
                                <a href="#">
                                    <img src="images/companies/envato.svg" alt=""/>
                                </a>
                            </div>
                        </div>


                        <div className="col-md-8 col-xs-6 ptb20">
                            <div className="job-title">
                                <a href="job-page.html">Graphic Designer</a>
                            </div>
                        </div>


                        <div className="col-md-2 col-xs-3 ptb30">
                            <div className="job-category">
                                <a href="javascript:void(0)" className="btn btn-purple btn-small btn-effect">part time</a>
                            </div>
                        </div>
                    </div>

                    <div className="single-job-post row mt30 shadow-hover">

                        <div className="col-md-2 col-xs-3 nopadding">
                            <div className="job-company">
                                <a href="#">
                                    <img src=".images/companies/envato.svg" alt=""/>
                                </a>
                            </div>
                        </div>


                        <div className="col-md-8 col-xs-6 ptb20">
                            <div className="job-title">
                                <a href="job-page.html">Wordpress Developer</a>
                            </div>
                        </div>


                        <div className="col-md-2 col-xs-3 ptb30">
                            <div className="job-category">
                                <a href="javascript:void(0)" className="btn btn-green btn-small btn-effect">full time</a>
                            </div>
                        </div>
                    </div>


                    <div className="row mt30">
                        <div className="col-md-12 text-center">
                            <a href="#" className="btn btn-blue btn-effect">show all</a>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}