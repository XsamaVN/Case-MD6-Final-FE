import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {useNavigate} from "react-router";
import * as yup from "yup";
import {loginUser} from "../services/UserService";
import {Field, Form, Formik} from "formik";
import {current} from "@reduxjs/toolkit";

// function checkrole(values) {
//     if(values.)
// }

export default function Navbar() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const user = useSelector(state => {
        console.log(state)
        return state.users.users
    });
    const loginSchema = yup.object().shape({
        email: yup.string().email("Invalid email").required("Email is required"),
        password: yup.string().required("Password is required"),
    });


    const initialValues = {
        email: "",
        password: ""
    };

    const handleLogin = async (values) => {
        try {
         await dispatch(loginUser(values));
         // checkrole(values)
            navigate('/');

            // const data = response.payload.data;
            // await navigate(data.roles[0].length > 0 ? '"ROLE_USER"' : '/');
        } catch (error) {
            console.error("Login failed:", error);
        }
    };
    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <div className="row">
            <nav className="navbar navbar-default navbar-static-top fluid_header centered">
                <div className="container">

                    {/* Logo */}
                    <div className="col-md-2 col-sm-6 col-xs-8 nopadding">
                        <Link className="navbar-brand nomargin" to="/"><img src="images/logo.svg" alt="logo"/></Link>
                        {/* INSERT YOUR LOGO HERE */}
                    </div>

                    {/* Start of Main Menu */}
                    <div className="col-md-10 col-sm-6 col-xs-4 nopadding">
                        <div className="navbar-header page-scroll">
                            <button type="button" className="navbar-toggle toggle-menu menu-right push-body"
                                    data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>

                        {/* Start of Main Nav */}
                        <div className="collapse navbar-collapse cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right"
                             id="main-nav">
                            <ul className="nav navbar-nav pull-right">

                                {/* Mobile Menu Title */}
                                <li className="mobile-title">
                                    <h4>main menu</h4>
                                </li>

                                {/* Menu Items */}
                                {/* You can replace the href values with your desired routes */}

                                <li className="dropdown simple-menu active">
                                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button">home<i
                                        className="fa fa-angle-down"></i></Link>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><Link to="index.html">home 1</Link></li>
                                        <li><Link to="index-02.html">home 2 - slider</Link></li>
                                        <li><Link to="index-03.html">home 3</Link></li>
                                        <li><Link to="index-04.html">boxed version</Link></li>
                                    </ul>
                                </li>

                                <li className="dropdown simple-menu">
                                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button">For
                                        Candidates<i className="fa fa-angle-down"></i></Link>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><Link to="search-jobs-1.html">search jobs 1</Link></li>
                                        <li><Link to="search-jobs-2.html">search jobs 2</Link></li>
                                        <li><Link to="search-jobs-3.html">search jobs 3</Link></li>
                                        <li><Link to="search-jobs-4.html">search jobs 4</Link></li>
                                        <li><Link to="submit-resume.html">submit resume</Link></li>
                                    </ul>
                                </li>

                                <li className="dropdown simple-menu">
                                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button">for
                                        employers<i className="fa fa-angle-down"></i></Link>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><Link to="find-candidate-1.html">find a candidate 1</Link></li>
                                        <li><Link to="find-candidate-2.html">find a candidate 2</Link></li>
                                        <li><Link to="post-job.html">post a job</Link></li>
                                    </ul>
                                </li>

                                <li className="dropdown mega-menu">
                                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown"
                                          role="button">pages<i className="fa fa-angle-down"></i></Link>
                                    <ul className="dropdown-menu" role="menu">
                                        <li>
                                            <div className="mega-menu-inner">
                                                <div className="row">
                                                    <ul className="col-md-4">
                                                        <li className="menu-title">pages 1</li>
                                                        <li><Link to="about-us.html">about us</Link></li>
                                                        <li><Link to="contact-1.html">contact us 1</Link></li>
                                                        <li><Link to="contact-2.html">contact us 2</Link></li>
                                                        <li><Link to="companies.html">companies</Link></li>
                                                        <li><Link to="company-page-1.html">company page 1</Link></li>
                                                        <li><Link to="company-page-2.html">company page 2</Link></li>
                                                    </ul>

                                                    <ul className="col-md-4">
                                                        <li className="menu-title">pages 2</li>
                                                        <li><Link to="candidate-profile-1.html">candidate profile
                                                            1</Link></li>
                                                        <li><Link to="candidate-profile-2.html">candidate profile
                                                            2</Link></li>
                                                        <li><Link to="candidate-profile-3.html">candidate profile
                                                            3</Link></li>
                                                        <li><Link to="faq.html">faq</Link></li>
                                                        <li><Link to="job-page.html">job page</Link></li>
                                                        <li><Link to="privacy-policy.html">privacy policy</Link></li>
                                                    </ul>

                                                    <ul className="col-md-4">
                                                        <li className="menu-title">pages 3</li>
                                                        <li><Link to="404.html">404</Link></li>
                                                        <li><Link to="404-2.html">404 ver. 2</Link></li>
                                                        <li><Link to="coming-soon.html">coming soon</Link></li>
                                                        <li><Link to="login.html">login</Link></li>
                                                        <li><Link to="register.html">register</Link></li>
                                                        <li><Link to="lost-password.html">lost password</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>

                                <li className="dropdown simple-menu">
                                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button">elements<i
                                        className="fa fa-angle-down"></i></Link>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-submenu">
                                            <Link to="#">headers<i className="fa fa-angle-right"></i></Link>
                                            <ul className="dropdown-menu">
                                                <li><Link to="header1.html">header 1 - default</Link></li>
                                                <li><Link to="header2.html">header 2 - logo top</Link></li>
                                                <li><Link to="header3.html">header 3 - top bar</Link></li>
                                                <li><Link to="header4.html">header 4 - sticky</Link></li>
                                            </ul>
                                        </li>

                                        <li className="dropdown-submenu">
                                            <Link to="#">footers<i className="fa fa-angle-right"></i></Link>
                                            <ul className="dropdown-menu">
                                                <li><Link to="footer1.html">default</Link></li>
                                                <li><Link to="footer2.html">light</Link></li>
                                                <li><Link to="footer3.html">dark</Link></li>
                                                <li><Link to="footer4.html">simple</Link></li>
                                            </ul>
                                        </li>

                                        <li className="dropdown-submenu">
                                            <Link to="#">page headers<i className="fa fa-angle-right"></i></Link>
                                            <ul className="dropdown-menu">
                                                <li><Link to="page-header1.html">default</Link></li>
                                                <li><Link to="page-header2.html">light</Link></li>
                                                <li><Link to="page-header3.html">dark</Link></li>
                                                <li><Link to="page-header4.html">parallax</Link></li>
                                            </ul>
                                        </li>

                                        <li><Link to="buttons.html">buttons</Link></li>
                                        <li><Link to="pricing-tables.html">pricing tables</Link></li>
                                        <li><Link to="typography.html">typography</Link></li>
                                    </ul>
                                </li>

                                <li className="dropdown simple-menu">
                                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button">blog<i
                                        className="fa fa-angle-down"></i></Link>
                                    <ul className="dropdown-menu" role="menu">
                                        <li className="dropdown-submenu">
                                            <Link to="#">blog right sidebar<i className="fa fa-angle-right"></i></Link>
                                            <ul className="dropdown-menu">
                                                <li><Link to="blog-right-sidebar-v1.html">version 1</Link></li>
                                                <li><Link to="blog-right-sidebar-v2.html">version 2</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu">
                                            <Link to="#">blog left sidebar<i className="fa fa-angle-right"></i></Link>
                                            <ul className="dropdown-menu">
                                                <li><Link to="blog-left-sidebar-v1.html">version 1</Link></li>
                                                <li><Link to="blog-left-sidebar-v2.html">version 2</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu">
                                            <Link to="#">blog fullwidth<i className="fa fa-angle-right"></i></Link>
                                            <ul className="dropdown-menu">
                                                <li><Link to="blog-fullwidth-v1.html">version 1</Link></li>
                                                <li><Link to="blog-fullwidth-v2.html">version 2</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu">
                                            <Link to="#">masonry<i className="fa fa-angle-right"></i></Link>
                                            <ul className="dropdown-menu">
                                                <li><Link to="blog-masonry-4col.html">4 columns</Link></li>
                                                <li><Link to="blog-masonry-3col.html">3 columns</Link></li>
                                                <li><Link to="blog-masonry-2col.html">2 columns</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu">
                                            <Link to="#">single post<i className="fa fa-angle-right"></i></Link>
                                            <ul className="dropdown-menu">
                                                <li><Link to="blog-post-right-sidebar.html">post - right sidebar</Link></li>
                                                <li><Link to="blog-post-left-sidebar.html">post - left sidebar</Link></li>
                                                <li><Link to="blog-post.html">post - fullwidth</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                {localStorage.getItem("roles")!==null &&
                                    <li className="dropdown simple-menu">
                                        <Link to="#">{localStorage.getItem("currentUser")} <i
                                            className="fa fa-angle-down"></i></Link>
                                        <ul className="dropdown-menu nav-prf" >
                                            <li><Link to="#">Profile</Link></li>
                                            <li><button onClick={()=>{
                                              handleLogout()
                                            }} className="btn btn-danger btn-effect" >Logout</button></li>
                                        </ul>
                                    </li>}
                                {localStorage.getItem("roles")===null &&
                                    <li className="login-btn">
                                        <Link id="modal_trigger" to="javascript:void(0)" role="button"><i
                                            className="fa fa-lock"></i>login</Link>
                                    </li>}


                            </ul>
                        </div>
                        {/* End of Main Nav */}
                    </div>
                    <div className="cd-user-modal">
                        <div className="cd-user-modal-container">
                            <ul className="cd-switcher" style={{display: "flex", justifyContent: "center"}}>
                                <li><Link to="#0">Sign in</Link></li>
                            </ul>

                            <Formik
                                initialValues={initialValues}
                                validationSchema={loginSchema}
                                onSubmit={(values) => {
                                    handleLogin(values)
                                }}>
                                {({errors, touched}) => (
                                    <div id="cd-login">
                                        <Form className="cd-form">
                                            <div className="fieldset">
                                                <label className="image-replace cd-email"
                                                       htmlFor="signin-email">E-mail</label>
                                                <Field name={"email"} className="full-width has-padding has-border"
                                                       id="signin-email" type="email" placeholder="E-mail"/>
                                            </div>
                                            <div className="fieldset">
                                                <label className="image-replace cd-password"
                                                       htmlFor="signin-password">Password</label>
                                                <Field name={"password"} className="full-width has-padding has-border"
                                                       id="signin-password"
                                                       type="password" placeholder="Password"/>
                                            </div>
                                            <div className="fieldset">
                                                <Field type="checkbox" id="remember-me" defaultChecked/>
                                                <label htmlFor="remember-me">Remember me</label>
                                            </div>
                                            <div className="fieldset">
                                                <button type="submit" value="Login"
                                                        className="btn btn-blue btn-effect"
                                                        style={{width: "100%"}}>Login
                                                </button>
                                            </div>
                                            <Link to={"register"}>I don't have account</Link>
                                        </Form>
                                    </div>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
