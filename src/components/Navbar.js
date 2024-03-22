import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { loginUser } from "../services/UserService";
import logo from "../img/logo.svg";

export default function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.users.users);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLogin = async (values) => {
        try {
            await dispatch(loginUser(values));
            navigate("/");
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <div className={`container-fluid nav-bar bg-transparent ${isSticky ? 'sticky-top' : ''}`}>
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                <Link to={"/"} className="navbar-brand d-flex align-items-center text-center">
                    <div className="icon p-2 me-2">
                        <svg className="img-fluid logo" viewBox="0 0 200 200">
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#FFFFFF"/>
                                    <stop offset="10%" stopColor="#00AF74" />
                                    <stop offset="100%" stopColor="#00AF74" />
                                </linearGradient>
                            </defs>
                            <image href={logo} width="200" height="200" className="svg-logo"/>
                        </svg>
                    </div>
                </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
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
                    {currentUser === null || currentUser === undefined ?
                        <button className="btn btn-primary px-3 d-none d-lg-flex" onClick={handleLogin}>Login</button>
                        :
                        <button className="btn btn-primary px-3 d-none d-lg-flex" onClick={handleLogout}>Logout</button>
                    }
                </div>
            </nav>
        </div>
    );
}
