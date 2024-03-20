import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginUser } from "../services/UserService";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <div className="row">
            <section className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Login</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="breadcrumb">
                                <li><Link to="/">Home</Link></li>
                                <li className="active">Pages</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ptb80" id="login">
                <div className="container">
                    <div className="col-md-6 col-md-offset-3 col-xs-12">
                        <div className="login-box">
                            <div className="login-title">
                                <h4>Login to Cariera</h4>
                            </div>

                            <Formik
                                initialValues={initialValues}
                                validationSchema={loginSchema}
                                onSubmit={handleLogin}
                            >
                                {({ errors, touched }) => (
                                    <Form>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <Field type="email" name="email" className="form-control" placeholder="Your Email" />
                                            {errors.email && touched.email ? (
                                                <div className="text-danger">{errors.email}</div>
                                            ) : null}
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <Field type="password" name="password" className="form-control" placeholder="Your Password" />
                                            {errors.password && touched.password ? (
                                                <div className="text-danger">{errors.password}</div>
                                            ) : null}
                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <Field type="checkbox" id="remember-me2" name="rememberMe" />
                                                    <label htmlFor="remember-me2">Remember me</label>
                                                </div>

                                                <div className="col-xs-6 text-right">
                                                    <Link to="/forgot-password">Forgot password?</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group text-center">
                                            <button type="submit" className="btn btn-blue btn-effect" style={{width:'100%'}}>Login</button>
                                        </div>
                                            <Link to="/register" className="btn btn-blue btn-effect">Signup</Link>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
