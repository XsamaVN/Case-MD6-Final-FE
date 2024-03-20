import {Link} from "react-router-dom";

export default function Body() {
    return (
        <div className={"row"}>
            <section className="main overlay-black">
                <div className="container wrapper">
                    <h1 className="capitalize text-center text-white">your career starts now</h1>

                    {/* Start of Form */}
                    <form className="job-search-form row pt40" action="#" method="get">

                        {/* Start of keywords input */}
                        <div className="col-md-3 col-sm-12 search-keywords">
                            <label htmlFor="search-keywords">Keywords</label>
                            <input type="text" name="search-keywords" id="search-keywords" placeholder="Keywords"/>
                        </div>

                        {/* Start of category input */}
                        <div className="col-md-3 col-sm-12 search-categories">
                            <label htmlFor="search-categories">Category</label>
                            <select name="search-categories" className="selectpicker" id="search-categories"
                                    data-live-search="true" title="Any Category" data-size="5" data-container="body">
                                <option value="1">Accountance</option>
                                <option value="2">Banking</option>
                                <option value="3">Design & Art</option>
                                <option value="4">Developement</option>
                                <option value="5">Insurance</option>
                                <option value="6">IT Engineer</option>
                                <option value="7">Healthcare</option>
                                <option value="8">Marketing</option>
                                <option value="9">Management</option>
                            </select>
                        </div>

                        {/* Start of location input */}
                        <div className="col-md-4 col-sm-12 search-location">
                            <label htmlFor="search-location">Location</label>
                            <input type="text" name="search-location" id="search-location" placeholder="Location"/>
                        </div>

                        {/* Start of submit input */}
                        <div className="col-md-2 col-sm-12 search-submit">
                            <button type="submit" className="btn btn-blue btn-effect btn-large"><i
                                className="fa fa-search"></i>search
                            </button>
                        </div>

                    </form>
                    {/* End of Form */}

                    <div className="extra-info pt20">
                        <span className="text-left text-white"><b>36</b> job offers for <b>you.</b></span>
                        <Link to="#" className="capitalize pull-right text-white">advanced search</Link>
                    </div>

                </div>
            </section>
            <section className="ptb80" id="categories">
                <div className="container">

                    <div className="section-title">
                        <h2>popular categories</h2>
                    </div>

                    <div className="row nomargin">
                        <div className="col-md-3 col-sm-6 col-xs-12 cat-wrapper">
                            <div className="category ptb30">

                                <div className="category-icon">
                                    <i className="fa fa-line-chart"></i>
                                </div>

                                <div className="category-info pt30">
                                    <Link to="#">accountance</Link>
                                    <p>(9 open positions)</p>
                                </div>

                                <div className="category-descr">
                                    <span>Lorem Ipsum is simply dummy text of the printing industry. Lorem has been the standard dummy text since 1500s.</span>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12 cat-wrapper">
                            <div className="category ptb30">

                                <div className="category-icon">
                                    <i className="fa fa-university"></i>
                                </div>

                                <div className="category-info pt30">
                                    <Link to="#">banking</Link>
                                    <p>(9 open positions)</p>
                                </div>

                                <div className="category-descr">
                                    <span>Lorem Ipsum is simply dummy text of the printing industry. Lorem has been the standard dummy text since 1500s.</span>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12 cat-wrapper">
                            <div className="category ptb30">

                                <div className="category-icon">
                                    <i className="fa fa-pencil"></i>
                                </div>

                                <div className="category-info pt30">
                                    <Link to="#">design & art</Link>
                                    <p>(36 open positions)</p>
                                </div>

                                <div className="category-descr">
                                    <span>Lorem Ipsum is simply dummy text of the printing industry. Lorem has been the standard dummy text since 1500s.</span>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12 cat-wrapper">
                            <div className="category ptb30">

                                <div className="category-icon">
                                    <i className="fa fa-umbrella"></i>
                                </div>

                                <div className="category-info pt30">
                                    <Link to="#">insurance</Link>
                                    <p>(6 open positions)</p>
                                </div>

                                <div className="category-descr">
                                    <span>Lorem Ipsum is simply dummy text of the printing industry. Lorem has been the standard dummy text since 1500s.</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row pt40 nomargin">
                        <div className="col-md-3 col-sm-6 col-xs-12 cat-wrapper">
                            <div className="category ptb30">

                                <div className="category-icon">
                                    <i className="fa fa-desktop"></i>
                                </div>

                                <div className="category-info pt30">
                                    <Link to="#">IT engineer</Link>
                                    <p>(22 open positions)</p>
                                </div>

                                <div className="category-descr">
                                    <span>Lorem Ipsum is simply dummy text of the printing industry. Lorem has been the standard dummy text since 1500s.</span>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12 cat-wrapper">
                            <div className="category ptb30">

                                <div className="category-icon">
                                    <i className="fa fa-line-chart"></i>
                                </div>

                                <div className="category-info pt30">
                                    <Link to="#">healthcare</Link>
                                    <p>(14 open positions)</p>
                                </div>

                                <div className="category-descr">
                                    <span>Lorem Ipsum is simply dummy text of the printing industry. Lorem has been the standard dummy text since 1500s.</span>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12 cat-wrapper">
                            <div className="category ptb30">

                                <div className="category-icon">
                                    <i className="fa fa-heart"></i>
                                </div>

                                <div className="category-info pt30">
                                    <Link to="#">marketing</Link>
                                    <p>(7 open positions)</p>
                                </div>

                                <div className="category-descr">
                                    <span>Lorem Ipsum is simply dummy text of the printing industry. Lorem has been the standard dummy text since 1500s.</span>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12 cat-wrapper">
                            <div className="category ptb30">

                                <div className="category-icon">
                                    <i className="fa fa-lightbulb-o"></i>
                                </div>


                                <div className="category-info pt30">
                                    <Link to="#">management</Link>
                                    <p>(4 open positions)</p>
                                </div>


                                <div className="category-descr">
                                    <span>Lorem Ipsum is simply dummy text of the printing industry. Lorem has been the standard dummy text since 1500s.</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 mt60 text-center">
                        <Link to="search-jobs-1.html" className="btn btn-blue btn-effect nomargin">browse all</Link>
                    </div>

                </div>
            </section>
            <section id="signup-video">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 signup-sec ptb80 text-center">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="section-title">
                                    <h2 className="text-white">Start your Career today by signing up now!</h2>
                                </div>
                                <p className="text-white mt20">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                    since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.</p>
                                <Link to="register.html" className="btn btn-purple btn-effect mt80">signup now!</Link>
                                <img src="images/icons/arrow.svg" alt="" className="signup-arrow visible-lg-block"/>
                            </div>
                            <img src="images/icons/icon1.svg" alt="" className="signup-icon visible-lg-block"/>
                        </div>
                        <div className="col-md-6 video-sec overlay-gradient">
                            <Link to="https://vimeo.com/99876106" className="popup-video" target="_blank"
                                  rel="noopener noreferrer">
                                <i className="fa fa-play"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ptb80" id="job-post">
                <div className="container">

                    {/* Start of Job Post Main */}
                    <div className="col-md-8 col-sm-12 col-xs-12 job-post-main">
                        <h2 className="capitalize"><i className="fa fa-briefcase"></i>latest jobs</h2>

                        {/* Start of Job Post Wrapper */}
                        <div className="job-post-wrapper mt60">

                            {/* Start of Single Job Post 1 */}
                            <div className="single-job-post row nomargin">
                                {/* Job Company */}
                                <div className="col-md-2 col-xs-3 nopadding">
                                    <div className="job-company">
                                        <Link to="company-page-1.html">
                                            <img src="images/companies/envato.svg" alt=""/>
                                        </Link>
                                    </div>
                                </div>

                                {/* Job Title & Info */}
                                <div className="col-md-8 col-xs-6 ptb20">
                                    <div className="job-title">
                                        <Link to="job-page.html">php senior developer</Link>
                                    </div>

                                    <div className="job-info">
                                        <span className="company"><i className="fa fa-building-o"></i>envato</span>
                                        <span className="location"><i className="fa fa-map-marker"></i>Melbourn, Australia</span>
                                    </div>
                                </div>

                                {/* Job Category */}
                                <div className="col-md-2 col-xs-3 ptb30">
                                    <div className="job-category">
                                        <Link to="javascript:void(0)" className="btn btn-green btn-small btn-effect">full
                                            time</Link>
                                    </div>
                                </div>
                            </div>
                            {/* End of Single Job Post 1 */}

                            {/* Start of Single Job Post 2 */}
                            <div className="single-job-post row nomargin">
                                {/* Job Company */}
                                <div className="col-md-2 col-xs-3 nopadding">
                                    <div className="job-company">
                                        <Link to="company-page-1.html">
                                            <img src="images/companies/google.svg" alt=""/>
                                        </Link>
                                    </div>
                                </div>

                                {/* Job Title & Info */}
                                <div className="col-md-8 col-xs-6 ptb20">
                                    <div className="job-title">
                                        <Link to="job-page.html">department head</Link>
                                    </div>

                                    <div className="job-info">
                                        <span className="company"><i className="fa fa-building-o"></i>google</span>
                                        <span className="location"><i
                                            className="fa fa-map-marker"></i>berlin, germany</span>
                                    </div>
                                </div>

                                {/* Job Category */}
                                <div className="col-md-2 col-xs-3 ptb30">
                                    <div className="job-category">
                                        <Link to="javascript:void(0)" className="btn btn-purple btn-small btn-effect">part
                                            time</Link>
                                    </div>
                                </div>
                            </div>
                            {/* End of Single Job Post 2 */}

                            {/* Start of Single Job Post 3 */}
                            <div className="single-job-post row nomargin">
                                {/* Job Company */}
                                <div className="col-md-2 col-xs-3 nopadding">
                                    <div className="job-company">
                                        <Link to="company-page-1.html">
                                            <img src="images/companies/facebook.svg" alt=""/>
                                        </Link>
                                    </div>
                                </div>

                                {/* Job Title & Info */}
                                <div className="col-md-8 col-xs-6 ptb20">
                                    <div className="job-title">
                                        <Link to="job-page.html">graphic designer</Link>
                                    </div>

                                    <div className="job-info">
                                        <span className="company"><i className="fa fa-building-o"></i>facebook</span>
                                        <span className="location"><i className="fa fa-map-marker"></i>london, UK</span>
                                    </div>
                                </div>

                                {/* Job Category */}
                                <div className="col-md-2 col-xs-3 ptb30">
                                    <div className="job-category">
                                        <Link to="javascript:void(0)"
                                              className="btn btn-blue btn-small btn-effect">freelancer</Link>
                                    </div>
                                </div>
                            </div>
                            {/* End of Single Job Post 3 */}

                            {/* Start of Single Job Post 4 */}
                            <div className="single-job-post row nomargin">
                                {/* Job Company */}
                                <div className="col-md-2 col-xs-3 nopadding">
                                    <div className="job-company">
                                        <Link to="company-page-1.html">
                                            <img src="images/companies/envato.svg" alt=""/>
                                        </Link>
                                    </div>
                                </div>

                                {/* Job Title & Info */}
                                <div className="col-md-8 col-xs-6 ptb20">
                                    <div className="job-title">
                                        <Link to="job-page.html">senior UI & UX designer</Link>
                                    </div>

                                    <div className="job-info">
                                        <span className="company"><i className="fa fa-building-o"></i>envato</span>
                                        <span className="location"><i className="fa fa-map-marker"></i>Melbourn, Australia</span>
                                    </div>
                                </div>

                                {/* Job Category */}
                                <div className="col-md-2 col-xs-3 ptb30">
                                    <div className="job-category">
                                        <Link to="javascript:void(0)"
                                              className="btn btn-orange btn-small btn-effect">intership</Link>
                                    </div>
                                </div>
                            </div>
                            {/* End of Single Job Post 4 */}

                            {/* Start of Single Job Post 5 */}
                            <div className="single-job-post row nomargin">
                                {/* Job Company */}
                                <div className="col-md-2 col-xs-3 nopadding">
                                    <div className="job-company">
                                        <Link to="company-page-1.html">
                                            <img src="images/companies/twitter.svg" alt=""/>
                                        </Link>
                                    </div>
                                </div>

                                {/* Job Title & Info */}
                                <div className="col-md-8 col-xs-6 ptb20">
                                    <div className="job-title">
                                        <Link to="job-page.html">senior health advisor</Link>
                                    </div>

                                    <div className="job-info">
                                        <span className="company"><i className="fa fa-building-o"></i>twitter</span>
                                        <span className="location"><i
                                            className="fa fa-map-marker"></i>New York, USA</span>
                                    </div>
                                </div>

                                {/* Job Category */}
                                <div className="col-md-2 col-xs-3 ptb30">
                                    <div className="job-category">
                                        <Link to="javascript:void(0)"
                                              className="btn btn-red btn-small btn-effect">temporary</Link>
                                    </div>
                                </div>
                            </div>
                            {/* End of Single Job Post 5 */}

                        </div>
                        {/* End of Job Post Wrapper */}

                        {/* Start of Pagination */}
                        <ul className="pagination list-inline text-center">
                            <li className="active"><Link to="javascript:void(0)">1</Link></li>
                            <li><Link to="#">2</Link></li>
                            <li><Link to="#">3</Link></li>
                            <li><Link to="#">4</Link></li>
                            <li><Link to="#">Next</Link></li>
                        </ul>
                        {/* End of Pagination */}

                    </div>
                    {/* End of Job Post Main */}


                    {/* Start of Job Post Sidebar */}
                    <div className="col-md-4 col-xs-12 job-post-sidebar">
                        <h2 className="capitalize"><i className="fa fa-star"></i>golden jobs</h2>

                        {/* Start of Featured Job Widget */}
                        <div className="featured-job widget mt60">

                            {/* Start of Company Logo */}
                            <div className="company">
                                <img src="images/companies/cloudify.svg" alt=""/>
                            </div>
                            {/* End of Company Logo */}

                            {/* Start of Featured Job Info */}
                            <div className="featured-job-info">

                                {/* Job Title */}
                                <div className="job-title">
                                    <h5 className="uppercase pull-left">ui designer</h5>
                                    <Link to="javascript:void(0)"
                                          className="btn btn-green btn-small btn-effect pull-right">full time</Link>
                                </div>

                                {/* Job Info */}
                                <div className="job-info pt5">
                                    <span id="company"><i className="fa fa-building-o"></i>cloudify</span>
                                    <span id="location"><i className="fa fa-map-marker"></i>london, uk</span>
                                </div>

                                <p className="mt20"> Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s.</p>

                                {/* View Job Button */}
                                <div className="text-center mt20">
                                    <Link to="job-page.html" className="btn btn-purple btn-small btn-effect">view
                                        job</Link>
                                </div>
                            </div>
                            {/* End of Featured Job Info */}

                        </div>
                        {/* End of Featured Job Widget */}

                        {/* Start of Upload Resume Widget */}
                        <div className="upload-resume widget mt40 text-center">
                            <h4 className="capitalize">upload your resume</h4>
                            <p className="mtb10"> Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry...</p>

                            <Link to="submit-resume.html" className="btn btn-blue btn-effect mt10">upload resume</Link>
                        </div>
                        {/* End of Upload Resume Widget */}
                    </div>
                    {/* End of Job Post Sidebar */}

                </div>
            </section>
            <section className="ptb40" id="countup">
                <div className="container">

                    {/* 1st Count up item */}
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        <span className="counter" data-from="0" data-to="743"></span>
                        <h4>members</h4>
                    </div>

                    {/* 2nd Count up item */}
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        <span className="counter" data-from="0" data-to="579"></span>
                        <h4>jobs</h4>
                    </div>

                    {/* 3rd Count up item */}
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        <span className="counter" data-from="0" data-to="251"></span>
                        <h4>resumes</h4>
                    </div>

                    {/* 4th Count up item */}
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        <span className="counter" data-from="0" data-to="330"></span>
                        <h4>companies</h4>
                    </div>

                </div>
            </section>
            <section className="ptb80" id="testimonials">
                <div className="container">

                    {/* Section Title */}
                    <div className="section-title">
                        <h2 className="text-white">testimonials</h2>
                    </div>


                    {/* Start of Owl Slider */}
                    <div className="owl-carousel testimonial">

                        {/* Start of Slide item */}
                        <div className="item">
                            <div className="review">
                                <blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy t ext ever since the 1500s.
                                </blockquote>
                            </div>
                            <div className="customer">
                                <img src="images/clients/client1.jpg" alt=""/>
                                <h4 className="uppercase pt20">customer</h4>
                            </div>
                        </div>
                        {/* End Slide item */}

                        {/* Start of Slide item */}
                        <div className="item">
                            <div className="review">
                                <blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy t ext ever since the 1500s.
                                </blockquote>
                            </div>
                            <div className="customer">
                                <img src="images/clients/client2.jpg" alt=""/>
                                <h4 className="uppercase pt20">customer</h4>
                            </div>
                        </div>
                        {/* End Slide item */}

                        {/* Start of Slide item */}
                        <div className="item">
                            <div className="review">
                                <blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy t ext ever since the 1500s.
                                </blockquote>
                            </div>
                            <div className="customer">
                                <img src="images/clients/client3.jpg" alt=""/>
                                <h4 className="uppercase pt20">customer</h4>
                            </div>
                        </div>
                        {/* End Slide item */}

                    </div>
                    {/* End of Owl Slider */}

                </div>
            </section>
            <section className="ptb80" id="latest-news">
                <div className="container">

                    {/* Section Title */}
                    <div className="section-title">
                        <h2>latest news</h2>
                    </div>

                    {/* Start of Blog Post */}
                    <div className="col-md-4 col-xs-12">
                        <div className="blog-post">
                            {/* Blog Post Image */}
                            <div className="blog-post-thumbnail">
                                <Link to="blog-post.html" className="hover-link">
                                    <img src="images/blog/blog1.jpg" alt=""/>
                                </Link>
                            </div>

                            {/* Blog Post Info */}
                            <div className="post-info">
                                <Link to="blog-post.html">Top 10 tipps for Web Developers</Link>

                                <div className="post-details">
                                    <span className="date"><i className="fa fa-calendar"></i>September 7, 2016</span>
                                    <span className="comments"><i className="fa fa-comment"></i>0 Comments</span>
                                </div>

                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s....</p>

                            </div>

                            {/* Read More Button */}
                            <Link to="blog-post.html" className="btn btn-blue btn-small btn-effect">read more</Link>

                        </div>
                    </div>
                    {/* End of Blog Post */}

                    {/* Start of Blog Post */}
                    <div className="col-md-4 col-xs-12">
                        <div className="blog-post">
                            {/* Blog Post Image */}
                            <div className="blog-post-thumbnail">
                                <Link to="blog-post.html" className="hover-link">
                                    <img src="images/blog/blog2.jpg" alt=""/>
                                </Link>
                            </div>

                            {/* Blog Post Info */}
                            <div className="post-info">
                                <Link to="blog-post.html">How to prepare for an Interview</Link>

                                <div className="post-details">
                                    <span className="date"><i className="fa fa-calendar"></i>September 7, 2016</span>
                                    <span className="comments"><i className="fa fa-comment"></i>0 Comments</span>
                                </div>

                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s....</p>

                            </div>

                            {/* Read More Button */}
                            <Link to="blog-post.html" className="btn btn-blue btn-small btn-effect">read more</Link>

                        </div>
                    </div>
                    {/* End of Blog Post */}

                    {/* Start of Blog Post */}
                    <div className="col-md-4 col-xs-12">
                        <div className="blog-post">
                            {/* Blog Post Image */}
                            <div className="blog-post-thumbnail">
                                <Link to="blog-post.html" className="hover-link">
                                    <img src="images/blog/blog3.jpg" alt=""/>
                                </Link>
                            </div>

                            {/* Blog Post Info */}
                            <div className="post-info">
                                <Link to="blog-post.html">Freelancing vs Employment</Link>

                                <div className="post-details">
                                    <span className="date"><i className="fa fa-calendar"></i>September 7, 2016</span>
                                    <span className="comments"><i className="fa fa-comment"></i>0 Comments</span>
                                </div>

                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s....</p>

                            </div>

                            {/* Read More Button */}
                            <Link to="blog-post.html" className="btn btn-blue btn-small btn-effect">read more</Link>

                        </div>
                    </div>
                    {/* End of Blog Post */}

                    <div className="col-md-12 col-xs-12 mt60 text-center">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.</p>

                        <Link to="blog-right-sidebar-v1.html" className="btn btn-purple btn-effect mt20">visit
                            blog</Link>
                    </div>

                </div>
            </section>
            <section className="ptb40" id="partners">
                <div className="container">

                    {/* Start of Owl Slider */}
                    <div className="owl-carousel partners-slider">
                        {/* Partner Logo */}
                        <div className="item">
                            <a href="#"><img src="images/companies/themeforest.png" alt=""/></a>
                        </div>

                        {/* Partner Logo */}
                        <div className="item">
                            <a href="#"><img src="images/companies/codecanyon.png" alt=""/></a>
                        </div>

                        {/* Partner Logo */}
                        <div className="item">
                            <a href="#"><img src="images/companies/graphicriver.png" alt=""/></a>
                        </div>

                        {/* Partner Logo */}
                        <div className="item">
                            <a href="#"><img src="images/companies/photodune.png" alt=""/></a>
                        </div>

                        {/* Partner Logo */}
                        <div className="item">
                            <a href="#"><img src="images/companies/audiojungle.png" alt=""/></a>
                        </div>
                    </div>
                    {/* End of Owl Slider */}

                </div>
            </section>

        </div>
    );
}
