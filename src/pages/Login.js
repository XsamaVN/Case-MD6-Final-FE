import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {loginUser} from "../services/UserService";
import {Field, Formik} from "formik";
import * as yup from "yup";

export default function Login() {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const signUpSchema = yup.object().shape({
        username: yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Firstname is required"),
    })
    const handleLogin = async (values) => {
        let data = await dispatch(loginUser(values))
        console.log(data.payload)
         await navigate(data.payload.data.roles.length > 1 ? 'admin' : 'home')
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
}`
            }

            </style>
            <div className={'row'}>
                <div className="col-8 mt-5"
                     style={{overflow: 'hidden', overflowY: 'auto', maxHeight: 'calc(100vh - 100%)'}}>
                    <div className="hic col-8">

                            <div className="hg">
                                <h4 className="text-success">Welcome back</h4>
                                <p>Together, build an outstanding profile and get ideal career opportunities</p>
                                <Formik
                                    initialValues={
                                        {
                                            email: '',
                                            password: '',
                                        }
                                    }
                                    onSubmit={(values) => {
                                        console.log(1)
                                        handleLogin(values)
                                    }}
                                    validationSchema={signUpSchema}>
                                <div className="form-group mb-3">
                                    <label form="email" className="mb-8">Email</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa-solid fa-envelope" style={{color: "#26cf61"}}></i>
                                            </span>
                                        </div>
                                        <Field name={'email'} placeholder="Insert Email" className={'form-control'} id="email"/>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <label form="password" className="mb-8">Password</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa-solid fa-shield-halved" style={{color: "#26cf61"}}></i>
                                            </span>
                                        </div>
                                        <Field name={'password'} placeholder="Insert password"
                                               className={'form-control'} id="password"/>
                                        <div className="input-group-prepend">
                                            <button type="button" tabIndex="-1" data-input-taget="#passwork"
                                                    className="input-group-text toggle-passwork" style={{background: "white"}}>
                                                <i className="fa-solid fa-eye-slash" style={{color: "#aaacb1"}}></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group col-12">
                                    <button type={'submit'} className="btn btn-primary btn-block btn btn-success">Login
                                    </button>
                                </div>
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
                                <img width="160" src="https://static.topcv.vn/v4/image/auth/topcv_white.png" alt=""/>
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
