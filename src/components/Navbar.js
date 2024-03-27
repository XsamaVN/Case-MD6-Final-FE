import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import * as yup from "yup";
import {loginUser} from "../services/UserService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faKey, faRightFromBracket, faUserTie} from "@fortawesome/free-solid-svg-icons";


export default function Navbar() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
    const [showAvatarMenu, setShowAvatarMenu] = useState(false);
    const user = useSelector(state => {
        console.log(state)
        return state.users.users
    });
    const loginSchema = yup.object().shape({
        email: yup.string()
            .required('Email is required')
            .matches(/^.*@gmail\.com$/, 'Email must end with @gmail.com'),
        password: yup.string()
            .required('Password is required'),
    });
    // let [check, setCheck] = useState(true)


    const initialValues = {
        email: "", password: ""
    };
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setLoggedIn(true);
        }
    }, []);
    const handleLogin = async (values) => {
        await dispatch(loginUser(values)).then((user) => {
            if (user.payload === undefined) {
                alert("Wrong Username or Password Check it out!");
            } else {
                const userRoles = user.payload.roles.map((role) => role.authority);
                if (userRoles.includes("ROLE_USER")) {
                    navigate(`/`);
                    localStorage.setItem("token", user.payload.accessToken);
                    setLoggedIn(true);
                } else if (userRoles.includes("ROLE_ADMIN")) {
                    navigate(`/admin`);
                    localStorage.setItem("token", user.payload.accessToken);
                    setLoggedIn(true);
                }
            }
        });
    };
    // const showError = (errorMessage) => {
    //     const errorElement = document.getElementById(`error-title`);
    //     if (errorElement) {
    //         errorElement.innerHTML = errorMessage;
    //         errorElement.style.display = 'block';
    //         document.getElementById(`background`).style.display = 'block';
    //         setCheck(false);
    //     } else {
    //         console.error("Error element not found");
    //     }
    // };
    //
    // const showSuccess = (successMessage) => {
    //     const successElement = document.getElementById(`error-title`);
    //     successElement.innerHTML = successMessage;
    //     successElement.style.display = 'block';
    //     document.getElementById(`background`).style.display = 'block';
    //     setCheck(true)
    // };
    //
    // const hideMessage = () => {
    //     document.getElementById(`error-title`).style.display = 'none';
    //     document.getElementById("background").style.display = "none"
    //     setCheck(true)
    // };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setLoggedIn(false);
        navigate("/");
        setShowAvatarMenu(false);
    };

    const toggleAvatarMenu = () => {
        setShowAvatarMenu(!showAvatarMenu);
    };

    let currentUser = useSelector(state => {
        return state.users.users
    })

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <div className={`container-fluid nav-bar bg-transparent ${isSticky ? 'sticky-top' : ''}`}>
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                    <Link to={"/"} className="navbar-brand d-flex align-items-center text-center">
                        <div className="icon p-2 me-2">
                            {/*<img className="img-fluid" src={} alt="Icon"*/}
                            {/*     style={{ width: "30px", height: "30px" }} />*/}
                        </div>
                        <h1 className="m-0 text-primary">UHome</h1>
                    </Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <Link to={"/"} className="nav-item nav-link active">Home</Link>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="property-list.html" className="dropdown-item">Property List</a>
                                    <a href="property-type.html" className="dropdown-item">Property Type</a>
                                    <a href="property-agent.html" className="dropdown-item">Property Agent</a>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    <a href="404.html" className="dropdown-item">404 Error</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <div className="header__navbar-item header__navbar-user">
                            {loggedIn ? (
                                <div className="nav-item dropdown">
                                    <div className="nav-item dropdown custom1">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8r6t_A-qGsYI-ex-KeovQDi1XANwlZTjFw&usqp=CAU"
                                            alt="" className="header__navbar-user-img" onClick={toggleAvatarMenu}/>
                                        <i className="bi bi-list"></i>
                                        <ul className="dropdown-menu rounded-0 m-0 custom-dropdown-menu">
                                            <li className="dropdown-item custom-dropdown-item">
                                                <div onClick={() => {
                                                    navigate(`user/edit/${currentUser.id}`)
                                                }}>
                                                    <FontAwesomeIcon icon={faUserTie}/>
                                                    <span style={{marginLeft: "5px"}}>Profile</span>
                                                </div>
                                            </li>
                                            <li className="dropdown-item custom-dropdown-item">
                                                <div onClick={() => {
                                                    document.getElementById("idForm").style.display = "block"
                                                }}>
                                                    <FontAwesomeIcon icon={faGear}/>
                                                    <span style={{marginLeft: "5px"}}>Setting</span>
                                                </div>
                                            </li>
                                            <li className="dropdown-item custom-dropdown-item">
                                                <div onClick={handleLogout}>
                                                    <FontAwesomeIcon icon={faRightFromBracket}/>
                                                    <span style={{marginLeft: "5px"}}>Logout</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <div className="nav-item dropdown custom1">
                                    <i className="bi bi-person-circle"></i>
                                    <i className="bi bi-list"></i>
                                    <div className="dropdown-menu">
                                        <div className="custom-item">
                                            <button className="login-btn"
                                                    onClick={() => document.getElementById("id01").style.display = "block"}>
                                                Login
                                            </button>
                                        </div>
                                        <div className="custom-item">
                                            <button className="login-btn"
                                                  onClick={()=>{
                                                      navigate("register")
                                                  }}>Register</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </nav>
            </div>
            <div id="id01" className="modal" onClick={() => document.getElementById('id01').style.display = 'none'}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={loginSchema}
                    onSubmit={handleLogin}
                >
                    {({isSubmitting}) => (
                        <Form className="login-form">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-md-8">
                                    <div className="modal-content animate" onClick={(e) => e.stopPropagation()}>
                                        <div className="form-group">
                                            <h1 className="title text-center">LOGIN</h1>
                                        </div>
                                        <div className="login-body">
                                            <div className="form-group login-item">
                                                <label htmlFor="email"><b>Email</b></label>
                                                <Field type="email" name="email" className="form-control"
                                                       placeholder="Enter Email"/>
                                                <ErrorMessage name="email" component="div" className="error-message"/>
                                            </div>
                                            <div className="form-group login-item">
                                                <label htmlFor="password"><b>Password</b></label>
                                                <Field type="password" name="password" className="form-control"
                                                       placeholder="Enter Password"/>
                                                <ErrorMessage name="password" component="div"
                                                              className="error-message"/>
                                            </div>
                                            <div className="form-group ">
                                                <button className="btn btn-primary btn-block"
                                                        style={{width: "100%", marginTop: "25px"}}
                                                        type="submit" disabled={isSubmitting}
                                                        onClick={() => document.getElementById('id01').style.display = 'none'}>
                                                    {isSubmitting ? 'Logging in...' : 'Login'}
                                                </button>
                                            </div>

                                            <div className="form-group" style={{marginTop: "5px"}}>
                                                <Link to={'register'}
                                                      onClick={() => document.getElementById('id01').style.display = 'none'}>Don't
                                                    have account</Link>
                                                <span className="psw">Forgot <a href="#">password?</a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>

            </div>
        </>
    )
        ;
}
