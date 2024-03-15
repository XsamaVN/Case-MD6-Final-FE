import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {useNavigate} from "react-router";

export default function Navbar() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const user = useSelector(state => {
        console.log(state)
        return state.users.currentUser
    });
    const handleLogout = () => {
        localStorage.clear();
        navigate('/')
    }
    return (
        <div className={'row'}>
            <div className={'col-12'}>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={''}>LOGO</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to={''}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'create'}>Create</Link>
                                </li>
                                <li className="nav-item">
                                    <button onClick={(e) => {
                                    }}> Sort
                                    </button>
                                </li>
                            </ul>
                            {/*<form className="d-flex" role="search">*/}
                            {/*    <input className="form-control me-2" type="search" placeholder="Search"*/}
                            {/*           aria-label="Search" onInput={(e) => {*/}
                            {/*        dispatch(search(e.target.value))*/}
                            {/*    }}/>*/}
                            {/*</form>*/}
                            <div className="form-inline my-2 my-lg-0">
                                {user.username}
                                <button className="ml-2 btn btn-outline-danger my-2 my-sm-0" type="submit"
                                        onClick={handleLogout}>Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}