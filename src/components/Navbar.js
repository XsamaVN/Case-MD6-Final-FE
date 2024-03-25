import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import * as yup from "yup";
import {loginUser} from "../services/UserService";

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
            const response = await dispatch(loginUser(values));
            const data = response.payload.data;
            await navigate(data.roles.length > 1 ? 'admin' : '/');
            console.log("Success")
        } catch (error) {
            console.error("Login failed:", error);
        }
    };
    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    }

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
                    <a href="/" className="navbar-brand d-flex align-items-center text-center">
                        <div className="icon p-2 me-2">
                            {/*<img className="img-fluid" src={} alt="Icon"*/}
                            {/*     style={{ width: "30px", height: "30px" }} />*/}
                        </div>
                        <h1 className="m-0 text-primary">UHome</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <a href="/list" className="nav-item nav-link active">Trang chủ</a>
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
                        <li className="header__navbar-item header__navbar-user">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8r6t_A-qGsYI-ex-KeovQDi1XANwlZTjFw&usqp=CAU"
                                alt="" className="header__navbar-user-img"/>
                            <span className="header__navbar-user-name">Hải Đỗ</span>

                            <ul className="header__navbar-user-menu">
                                <li className="header__navbar-user-item">
                                    <a href="">Tài khoản của tôi</a>
                                </li>
                                <li className="header__navbar-user-item">
                                    <a href="">Địa chỉ của tôi</a>
                                </li>
                                <li className="header__navbar-user-item">
                                    <a href="">Đơn mua</a>
                                </li>
                                <li className="header__navbar-user-item header__navbar-user-item--separate">
                                    <a href="">Đăng xuất</a>
                                </li>
                            </ul>
                        </li>
                    </div>
                </nav>
            </div>

        </>
    );
}
