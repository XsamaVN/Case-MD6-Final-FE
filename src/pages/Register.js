import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router';
import * as yup from 'yup';
import {registerUser} from '../services/UserService';
import {Field, Form, Formik} from 'formik';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginSchema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
    });

    const handleRegister = async (values) => {
        try {
            let data = {
                email: values.email,
            };
            await dispatch(registerUser(data));
            navigate('/login');
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle registration error
        }
    };

    return (
        <>
            <div className={"row"}>
                <section className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>register</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="breadcrumb">
                                    <li>
                                        <Link to="#">home</Link>
                                    </li>
                                    <li className="active">pages</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ptb80" id="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Formik
                                    initialValues={{
                                        fullName: '',
                                        username: '',
                                        email: '',
                                        agree: false,
                                    }}
                                    validationSchema={loginSchema}
                                    onSubmit={(values, {setSubmitting}) => {
                                        handleRegister(values);
                                        setSubmitting(false);
                                    }}
                                >
                                    {({isSubmitting}) => (
                                        <Form>
                                            <ul className="nav nav-tabs" role="tablist">

                                                <li role="presentation" className="active">
                                                    <Link to="#personal" aria-controls="personal" role="tab"
                                                          data-toggle="tab" aria-expanded="true">
                                                        <h6>Personal Account</h6>
                                                        <span>I'm looking for a job</span>
                                                    </Link>
                                                </li>

                                                <li role="presentation" className="">
                                                    <Link to="#company" aria-controls="company" role="tab"
                                                          data-toggle="tab" aria-expanded="false">
                                                        <h6>Company Account</h6>
                                                        <span>We are hiring</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="tab-content ptb60">
                                                <div role="tabpanel" className="tab-pane active" id="personal">
                                                    <div className="row">
                                                        <div className="col-md-8 col-md-offset-2">
                                                            <div className="form-group">
                                                                <label>Full Name</label>
                                                                <Field type="text" name="fullName"
                                                                       className="form-control"/>
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Username</label>
                                                                <Field
                                                                    type="text"
                                                                    name="username"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>E-mail</label>
                                                                <Field
                                                                    type="email"
                                                                    name="email"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div className="form-group text-left">
                                                                <Field
                                                                    type="checkbox"
                                                                    name="agree"
                                                                    id="agree"
                                                                    className="mr10"
                                                                />
                                                                <label htmlFor="agree">
                                                                    Agree with the{' '}
                                                                    <Link to="#">Terms and Conditions</Link>
                                                                </label>
                                                            </div>
                                                            <div className="form-group text-center nomargin">
                                                                <button
                                                                    type="submit"
                                                                    className="btn btn-blue btn-effect"
                                                                    disabled={isSubmitting}
                                                                >
                                                                    {isSubmitting
                                                                        ? 'Creating Account...'
                                                                        : 'Create Account'}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div role="tabpanel" className="tab-pane" id="company">
                                                    <div className="row">

                                                        <div className="col-md-6">

                                                            <div className="form-group">
                                                                <label>Company Name</label>
                                                                <Field type="text" name="Company Name" className="form-control"/>
                                                            </div>

                                                            <div className="form-group">
                                                                <label>E-mail</label>
                                                                <Field type="email" name="email" className="form-control"/>
                                                            </div>

                                                            <div className="form-group">
                                                                <label>Address</label>
                                                                <Field type="text" name="address" className="form-control"/>
                                                            </div>

                                                            <div className="form-group">
                                                                <label>Branch</label>
                                                                <Field type="text" name="Branch" className="form-control"/>
                                                            </div>

                                                        </div>

                                                        <div className="col-md-6">

                                                            <div className="form-group">
                                                                <label>Short Name</label>
                                                                <Field type="text" name="Nick name" className="form-control"/>
                                                            </div>

                                                            <div className="form-group">
                                                                <label>Number Of Employees</label>
                                                                <Field type="text" name="Number Of Employees" className="form-control"/>
                                                            </div>

                                                            <div className="form-group">
                                                                <label>Website</label>
                                                                <Field type="text" name={"Website"} className="form-control"/>
                                                            </div>

                                                            <div className="form-group">
                                                                <label>Phone</label>
                                                                <Field type="text" name={"Phone"} className="form-control"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row mt20">
                                                        <div className="col-md-12 text-center">

                                                            <div className="form-group text-left">
                                                                <Field
                                                                    type="checkbox"
                                                                    name="agree"
                                                                    id="agree"
                                                                    className="mr10"
                                                                />
                                                                <label htmlFor="agree">
                                                                    Agree with the{' '}
                                                                    <Link to="#">Terms and Conditions</Link>
                                                                </label>
                                                            </div>

                                                            <div className="form-group nomargin">
                                                                <button type="submit"
                                                                        className="btn btn-blue btn-effect">create
                                                                    account
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Register;
