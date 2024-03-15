import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import * as yup from "yup";
import {registerUser} from "../services/UserService";
import {Field,Formik} from "formik";

export default function Register() {
    const dispatch = useDispatch();

    const loginSchema = yup.object().shape({
        email: yup.string().email("Invalid email").required("Email is required")
    });
    const handleRegister = (values) => {
        let data = {
            email: values.email,
        };
        dispatch(registerUser(data));
    }
    return (
        <>
            <style>{`
            
              .input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
              border-bottom-left-radius: 0;
              border-top-left-radius: 0;
              margin-left: -1px;
              }
              
              .auth .form-control {
    background: #fff 0 0 no-repeat padding-box;
    border: none;
    font-size: 14px;
    padding-bottom: 7px;
    padding-top: 7px;
}

.input-group>.form-control, .input-group>.form-select {
    flex: 1 1 auto;
    min-width: 0;
    position: relative;
    width: 1%;
}
.form-control {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-clip: padding-box;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    color: #212529;
    display: block;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 0.375rem 0.75rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    width: 100%;
}
.col-8{
display: flex;
    justify-content: center;
}
.col-12 {
display: flex;
flex:1;
padding:0 0 0;
position: relative;
scrollbar-width: none;
Justify-content: center
}

                `}</style>

            <div className={'row'}>
                <div className="col-12 container-fluid"
                     style={{overflow: 'hidden', overflowY: 'auto', maxHeight: 'calc(100vh - 100%)'}}>
                    <div className="hic col-8 mt-5">
                        <div className="hg">
                            <h4 className="text-success">Welcome to TopCV</h4>
                            <p>Together, build an outstanding profile and get ideal career opportunities</p>
                            <Formik
                                initialValues={{email: ''}}
                                onSubmit={(values) => handleRegister(values)}
                                validationSchema={loginSchema}
                            >
                                {formik => (
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="form-group mb-3">
                                            <label htmlFor="email" className="mb-8">Email</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fa-solid fa-envelope"
                                                       style={{color: "#26cf61"}}></i>
                                                </span>
                                                </div>
                                                <Field name={'email'} placeholder="Email" className={'form-control'}
                                                       id="email"/>
                                            </div>
                                        </div>
                                        <p>
                                            I agree with
                                            <a href="/" className="text-success">Terms of service</a> and
                                            <a href="/" className="text-success">Privacy Policy</a> of TopCV
                                        </p>
                                        <div className="form-group col-12">
                                            <button type="submit"
                                                    className="btn btn-primary btn-block btn btn-success">Register
                                            </button>
                                        </div>
                                        <div className="mt-3 d-flex justify-content-center option-auth text-center wrap-redirect-login">
                                        <span>You already have an account?
                                            <Link style={{color: "green"}} to={''}>Login now</Link>
                                        </span>
                                        </div>
                                        <br/>
                                        <div className="mt-3 support text-center">
                                            <p className="font-weight-bold mb-0">Can't create an account?</p>
                                            <p className="mb-0">
                                                HOTLINE:
                                                <a href="/" style={{color: "green"}}> 01234567889 </a>
                                            </p>
                                            <br/>
                                            <p className="auth-copy-right mt-5" style={{color: "green"}}>© 2016. All
                                                Rights
                                                Reserved. TopCV Vietnam JSC.</p>
                                        </div>
                                    </form>
                                )}
                            </Formik>
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
                                    <img width="160"
                                         src="https://static.topcv.vn/v4/image/auth/topcv_white.png"
                                         alt=""/></a>

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
            </div>
        </>
    )
}
