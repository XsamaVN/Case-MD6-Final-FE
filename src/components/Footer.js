import { Formik, Form, Field } from 'formik';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="row">
            <footer className="footer1">
                <div className="footer-info ptb80">
                    <div className="container">
                        <div className="col-md-3 col-sm-6 col-xs-6 footer-about">
                            <Link to="/">
                                <img src="images/logo-white.svg" alt=""/>
                            </Link>
                            <p className="pt40" >Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type changed.</p>
                            <ul className="nopadding">
                                <ul className="nopadding">
                                    <li><i className="fa fa-map-marker"></i>New York City, USA</li>
                                    <li><i className="fa fa-phone"></i>(123) 456 789 0012</li>
                                    <li><i className="fa fa-envelope-o"></i>youremail@cariera.com</li>
                                </ul>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6 footer-links">
                            <h3>useful links</h3>

                            <ul className="nopadding">
                                <li><Link to="post-job.html"><i className="fa fa-angle-double-right"></i>add job</Link></li>
                                <li><Link to="blog-right-sidebar-v1.html"><i className="fa fa-angle-double-right"></i>blog</Link></li>
                                <li><Link to="search-jobs-1.html"><i className="fa fa-angle-double-right"></i>find jobs</Link></li>
                                <li><Link to="faq.html"><i className="fa fa-angle-double-right"></i>FAQ</Link></li>
                                <li><Link to="login.html"><i className="fa fa-angle-double-right"></i>login</Link></li>
                                <li><Link to="privacy-policy.html"><i className="fa fa-angle-double-right"></i>privacy policy</Link></li>
                                <li><Link to="register.html"><i className="fa fa-angle-double-right"></i>register</Link></li>
                                <li><Link to="shop-right-sidebar.html"><i className="fa fa-angle-double-right"></i>shop</Link></li>
                                <li><Link to="submit-resume.html"><i className="fa fa-angle-double-right"></i>submit resume</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6 footer-posts">
                            <h3>popular posts</h3>
                            <div className="footer-blog-post">

                                <div className="thumbnail-post">
                                    <Link to="blog-post-right-sidebar.html">
                                        <img src="images/blog/blog1.jpg" alt=""/>
                                    </Link>
                                </div>

                                <div className="post-info">
                                    <a href="blog-post-right-sidebar.html">blog post 1</a>
                                    <span>1 day ago</span>
                                </div>
                            </div>

                            <div className="footer-blog-post">

                                <div className="thumbnail-post">
                                    <Link to="blog-post-right-sidebar.html">
                                        <img src="images/blog/blog2.jpg" alt=""/>
                                    </Link>
                                </div>

                                <div className="post-info">
                                    <Link to="blog-post-right-sidebar.html">blog post 2</Link>
                                    <span>2 day ago</span>
                                </div>
                            </div>

                            <div className="footer-blog-post">

                                <div className="thumbnail-post">
                                    <Link to="blog-post-right-sidebar.html">
                                        <img src="images/blog/blog3.jpg" alt=""/>
                                    </Link>
                                </div>

                                <div className="post-info">
                                    <Link to="blog-post-right-sidebar.html">blog post 3</Link>
                                    <span>4 day ago</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6 footer-newsletter">
                            <h3>newsletter</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            <Formik
                                initialValues={{ email: '' }}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                    }, 400);
                                }}
                            >
                                <Form className="form-inline mailchimp mtb30" noValidate>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <Field type="email" name="email" className="form-control" id="mc-email"
                                                   placeholder="Your Email" autoComplete="off"/>
                                            <label htmlFor="mc-email"></label>
                                            <button type="submit" className="btn btn-blue btn-effect">Submit</button>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>
                            <div className="footer-chat row nomargin">

                                <div className="col-md-4">
                                    <div className="supporter-image">
                                        <img src="images/clients/client4.jpg" alt=""/>
                                    </div>
                                </div>

                                <div className="col-md-8">
                                    <div className="chat-details">
                                        <span>Helpline Center</span>

                                        <p className="pt10 nomargin">Chat Live now!
                                            Hello, my name is John Doe, how may i help you?
                                            <br/>
                                        </p>

                                        <div className="text-right pt15">
                                            <Link to="#"><i className="fa fa-comments-o"></i>Live Chat</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright ptb40">
                    <div className="container">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <span>Copyright &copy; <Link to="#">cariera</Link>. All Rights Reserved</span>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <ul className="social-btns list-inline text-right">
                                <li>
                                    <Link to="#" className="social-btn-roll facebook">
                                        <div className="social-btn-roll-icons">
                                            <i className="social-btn-roll-icon fa fa-facebook"></i>
                                            <i className="social-btn-roll-icon fa fa-facebook"></i>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="social-btn-roll twitter">
                                        <div className="social-btn-roll-icons">
                                            <i className="social-btn-roll-icon fa fa-twitter"></i>
                                            <i className="social-btn-roll-icon fa fa-twitter"></i>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="social-btn-roll google-plus">
                                        <div className="social-btn-roll-icons">
                                            <i className="social-btn-roll-icon fa fa-google-plus"></i>
                                            <i className="social-btn-roll-icon fa fa-google-plus"></i>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="social-btn-roll instagram">
                                        <div className="social-btn-roll-icons">
                                            <i className="social-btn-roll-icon fa fa-instagram"></i>
                                            <i className="social-btn-roll-icon fa fa-instagram"></i>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="social-btn-roll linkedin">
                                        <div className="social-btn-roll-icons">
                                            <i className="social-btn-roll-icon fa fa-linkedin"></i>
                                            <i className="social-btn-roll-icon fa fa-linkedin"></i>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="social-btn-roll rss">
                                        <div className="social-btn-roll-icons">
                                            <i className="social-btn-roll-icon fa fa-rss"></i>
                                            <i className="social-btn-roll-icon fa fa-rss"></i>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <Link to="#" className="back-top"><i className="fa fa-chevron-up"></i></Link>
        </div>
    );
}
