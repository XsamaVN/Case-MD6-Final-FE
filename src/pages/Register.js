import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router';
import * as yup from 'yup';
import {registerUser} from '../services/UserService';
import {ErrorMessage, Field, Form, Formik} from 'formik';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [role, setRole] = useState('user');
    const registerUserSchema = yup.object().shape({
        email: yup.string()
            .required('Email is required')
            .matches(/^.*@gmail\.com$/, 'Email must end with @gmail.com'),
        agreePersonal: yup.boolean()
            .oneOf([true], 'Accept with the Terms and Conditions to create account'),
    });

    const registerCompanySchema = yup.object().shape({
        email: yup.string()
            .required('Email is required')
            .matches(/^.*@gmail\.com$/, 'Email must end with @gmail.com'),
        company_name: yup.string()
            .required('Company name is required')
            .min(2, 'Company name must be at least 2 characters')
            .max(32, 'Company name must not exceed 32 characters'),
        short_name: yup.string()
            .required('Short name is required')
            .min(2, 'Short name must be at least 2 characters')
            .max(20, 'Short name must not exceed 20 characters'),
        address: yup.string()
            .required('Address is required'),
        number_of_employees: yup.string()
            .required('Address is required'),
        website: yup.string()
            .required('Website is required'),
        branch: yup.string()
            .required('Branch is required'),
        phone: yup.string()
            .required('Phone is required'),
        agreeCompany: yup.boolean()
            .oneOf([true], 'Accept with the Terms and Conditions to create account'),
    });

    const handleRegister = async (values) => {
        try {
            let data = {
                email: values.email,
            };
            await dispatch(registerUser({id: role === 'user' ? 2 : 3, data: values}));
            await navigate('/');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };
    const handleRoleChange = (selectedRole) => {
        setRole(selectedRole);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 register-header">
                        <h2>Welcome to our website</h2>
                    </div>
                </div>
            </div>

            <section className="pt-5" id="register">
                <div className="container">
                    <div className="row" style={{display: "flex", justifyContent: "center"}}>
                        <div className="col-md-10 ">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <Link
                                        to="#personal"
                                        className={`nav-link ${role === 'user' ? 'active' : ''}`}
                                        role="2"
                                        data-toggle="tab"
                                        aria-expanded="true"
                                        onClick={() => handleRoleChange('user')}
                                    >
                                        <h6>Personal Account</h6>
                                        <span>I'm looking for a job</span>
                                    </Link>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <Link
                                        to="#company"
                                        className={`nav-link ${role === 'enterprise' ? 'active' : ''}`}
                                        role="3"
                                        data-toggle="tab"
                                        aria-expanded="false"
                                        onClick={() => handleRoleChange('enterprise')}
                                    >
                                        <h6>Company Account</h6>
                                        <span>We are hiring</span>
                                    </Link>
                                </li>
                            </ul>
                            <div className="form-register">
                                <Formik initialValues={{
                                    email: '',
                                    agreePersonal: false,
                                }}
                                        validationSchema={registerUserSchema}
                                        onSubmit={(values, {setSubmitting}) => {
                                            handleRegister(values);
                                            setSubmitting(false);
                                        }}
                                >
                                    {({isSubmitting}) => (
                                        <Form>
                                            <div className="tab-content pt-4 register-person-body">
                                                <div role="tabpanel"
                                                     className={`tab-pane ${role === 'user' ? 'active' : ''}`}
                                                     id="personal">
                                                    <div className="row">
                                                        <div className="col-md-8 offset-md-2">
                                                            <div className="mb-3">
                                                                <label htmlFor="email"
                                                                       className="form-label">E-mail</label>
                                                                <Field type="email" name="email" id="email"
                                                                       className="form-control"/>
                                                                <ErrorMessage
                                                                    name="email"
                                                                    component="div"
                                                                    className="text-danger"
                                                                />
                                                            </div>
                                                            <div className="mb-3 form-check">
                                                                <Field type="checkbox" name="agreePersonal" id="agree"
                                                                       className="form-check-input"/>
                                                                <label htmlFor="agree" className="form-check-label">Agree
                                                                    with the <Link to="#">Terms and
                                                                        Conditions</Link></label>
                                                                <ErrorMessage
                                                                    name="agreePersonal"
                                                                    component="div"
                                                                    className="text-danger"
                                                                />
                                                            </div>
                                                            <div className="text-center mt-4">
                                                                <button
                                                                    type="submit"
                                                                    className="btn btn-primary"
                                                                    disabled={isSubmitting}
                                                                    style={{width: "100%"}}>
                                                                    {isSubmitting ? 'Creating Account...' : 'CreatePost Account'}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>

                                <Formik initialValues={{
                                    email: '',
                                    agreeCompany: false,
                                }}
                                        validationSchema={registerCompanySchema}
                                        onSubmit={(values, {setSubmitting}) => {
                                            handleRegister(values);
                                            setSubmitting(false);
                                        }}
                                >
                                    {({isSubmitting}) => (
                                        <Form>
                                            <div className="tab-content pt-4 register-company-body">
                                                <div role="tabpanel"
                                                     className={`tab-pane ${role === 'enterprise' ? 'active' : ''}`}
                                                     id="company">
                                                    <div className="row">
                                                        <div role="tabpanel"
                                                             className={`tab-pane fade ${role === 'enterprise' ? 'show active' : ''}`}
                                                             id="company">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label htmlFor="companyName"
                                                                               className="form-label">Company
                                                                            Name</label>
                                                                        <Field type="text" name="company_name"
                                                                               id="companyName"
                                                                               className="form-control"/>
                                                                        <ErrorMessage
                                                                            name="company_name"
                                                                            component="div"
                                                                            className="text-danger"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="companyEmail"
                                                                               className="form-label">E-mail</label>
                                                                        <Field type="email" name="email"
                                                                               id="companyEmail"
                                                                               className="form-control"/>
                                                                        <ErrorMessage
                                                                            name="email"
                                                                            component="div"
                                                                            className="text-danger"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="companyAddress"
                                                                               className="form-label">Address</label>
                                                                        <Field type="text" name="address"
                                                                               id="companyAddress"
                                                                               className="form-control"/>
                                                                        <ErrorMessage
                                                                            name="address"
                                                                            component="div"
                                                                            className="text-danger"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="companyBranch"
                                                                               className="form-label">Branch</label>
                                                                        <Field type="text" name="branch"
                                                                               id="companyBranch"
                                                                               className="form-control"/>
                                                                        <ErrorMessage
                                                                            name="branch"
                                                                            component="div"
                                                                            className="text-danger"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label htmlFor="companyShortName"
                                                                               className="form-label">Short Name</label>
                                                                        <Field type="text" name="short_name"
                                                                               id="companyShortName"
                                                                               className="form-control"/>
                                                                        <ErrorMessage
                                                                            name="short_name"
                                                                            component="div"
                                                                            className="text-danger"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="numberOfEmployees"
                                                                               className="form-label">Number Of
                                                                            Employees</label>
                                                                        <Field type="text" name="number_of_employees"
                                                                               id="numberOfEmployees"
                                                                               className="form-control"/>
                                                                        <ErrorMessage
                                                                            name="number_of_employees"
                                                                            component="div"
                                                                            className="text-danger"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="companyWebsite"
                                                                               className="form-label">Website</label>
                                                                        <Field type="text" name="website"
                                                                               id="companyWebsite"
                                                                               className="form-control"/>
                                                                        <ErrorMessage
                                                                            name="website"
                                                                            component="div"
                                                                            className="text-danger"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="companyPhone"
                                                                               className="form-label">Phone</label>
                                                                        <Field type="text" name="phone"
                                                                               id="companyPhone"
                                                                               className="form-control"/>
                                                                        <ErrorMessage
                                                                            name="phone"
                                                                            component="div"
                                                                            className="text-danger"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row mt-4">
                                                                <div className="col-md-12 text-right">
                                                                    <div className="form-check">
                                                                        <Field type="checkbox" name="agreeCompany"
                                                                               id="companyAgree"
                                                                               className="form-check-input"/>
                                                                        <label htmlFor="agreeCompany"
                                                                               className="form-check-label">Agree with
                                                                            the <Link to="#" className="link-primary">Terms
                                                                                and Conditions</Link></label>
                                                                        <ErrorMessage
                                                                            name="agreeCompany"
                                                                            component="div"
                                                                            className="text-danger"
                                                                        />
                                                                    </div>
                                                                    <div className="form-group mt-3">
                                                                        <button type="submit"
                                                                                className="btn btn-primary"
                                                                                style={{width: "100%"}}>Create Account
                                                                        </button>
                                                                    </div>
                                                                </div>
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
                </div>
            </section>
        </>
    );
};

export default Register;
