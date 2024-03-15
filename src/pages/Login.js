import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {loginUser} from "../services/UserService";
import {Field, Form, Formik} from "formik";
import * as yup from "yup";
import '../main.css'
import {Link} from "react-router-dom";

export default function Login() {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const loginSchema = yup.object().shape({
        email: yup.string().email("Invalid email").required("Email is required"),
        password: yup.string().required("Password is required"),
    });

    const handleLogin = async (values) => {
        try {
            const response = await dispatch(loginUser(values));
            const data = response.payload.data;
            await navigate(data.roles.length > 1 ? 'admin' : 'home');
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-8 mt-5"
                     style={{overflow: 'hidden', overflowY: 'auto', maxHeight: 'calc(100vh - 100%)'}}>
                    <div className="hic col-8">
                        <div className="hg">
                            <h4 className="text-success">Welcome back</h4>
                            <p>Together, build an outstanding profile and get ideal career opportunities</p>
                            <Formik
                                initialValues={{email: '', password: ''}}
                                onSubmit={(values) => handleLogin(values)}
                                validationSchema={loginSchema}>
                                <Form>
                                    <div className="form-group mb-3">
                                        <label htmlFor="email" className="mb-8">Email</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa-solid fa-envelope" style={{color: "#26cf61"}}></i>
                                            </span>
                                            </div>
                                            <Field name="email" placeholder="Insert Email" className="form-control"
                                                   id="email"/>
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="password" className="mb-8">Password</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa-solid fa-shield-halved" style={{color: "#26cf61"}}></i>
                                            </span>
                                            </div>
                                            <Field name="password" type="password" placeholder="Insert password"
                                                   className="form-control" id="password"/>
                                            <div className="input-group-prepend">
                                                <button type="button" tabIndex="-1" data-input-target="#password"
                                                        className="input-group-text toggle-password"
                                                        style={{background: "white"}}>
                                                    <i className="fa-solid fa-eye-slash" style={{color: "#aaacb1"}}></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mx-lg-auto wrap-forgot-passwork">
                                        <Link style={{color: "green"}} to={'/'}> Forgot password? </Link>
                                    </div>
                                    <div className="form-group col-12">
                                        <button type="submit" className="btn btn-primary btn-block btn-success">Login
                                        </button>
                                    </div>
                                </Form>

                            </Formik>
                            <p className="or text-center fz-12px">Or login with</p>
                            <div className="row mt-2 ml-4">
                                <div className="login-social-list col-4">
                                    <a href="" className="btn btn-default btn-signin input-block-level h-40"
                                       style={{background: "red"}}>
                                        <i className="fa-brands fa-google" style={{color: "#ffffff"}}></i>
                                        <span className="ml-1" style={{color: "white"}}>Google</span>
                                    </a>
                                    <div className="d-none" id="login-google-render"></div>
                                </div>

                                <div className="col-4">
                                    <a href=""
                                       className="btn btn-signin btn-primary input-block-level h-40 btn-login-social">
                                        <i className="fa-brands fa-facebook" style={{color: "#eceff3"}}></i>
                                        <span className="ml-1">Facebook</span>
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href=""
                                       className="btn btn-default btn-signin btn-signin-linkedin input-block-level h-40 btn-login-social"
                                       style={{background: "black"}}>
                                        <i className="fa-brands fa-x-twitter" style={{color: "#e7eaee"}}></i>
                                        <span className="ml-1" style={{color: "white"}}>Twitter</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div style={{position: "relative", width: "100%", height: "100vh"}}>
                        <img className="img p-0"
                             src="https://static.topcv.vn/v4/image/auth/auth_bg_desktop.png"
                             alt=""
                             style={{
                                 position: "absolute",
                                 top: 0,
                                 left: 0,
                                 width: "100%",
                                 height: "100vh",
                                 objectFit: "cover"
                             }}/>
                        <div className="col-9 m-0 ml-4">
                            <a href="/">
                                <br/>
                                <br/>
                                <img width="160" src="https://static.topcv.vn/v4/image/auth/topcv_white.png"
                                     alt=""/>
                            </a>

                            <h1 className="mt-4" style={{color: "white"}}>
                                Continued advantage
                                <br/>
                                Connect to success
                            </h1>
                            <h6>
                                <p style={{color: "white"}} className="mt-2">TopCV - Pioneering human resources
                                    ecosystem applying technology in Vietnam</p>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

