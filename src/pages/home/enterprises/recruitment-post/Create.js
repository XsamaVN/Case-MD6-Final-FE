import {useState, useEffect} from 'react';
import axios from 'axios';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {useNavigate} from 'react-router-dom';
import * as Yup from "yup";

function AddRecruitmentPost() {
    const [enterprises, setEnterprises] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/enterprises')
            .then(res => {
                console.log("enterprises", res.data)
                setEnterprises(res.data);
            })
    }, []);

    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Vui lòng nhập thông tin'),
        salary: Yup.number().required('Vui lòng nhập thông tin'),
        position: Yup.string().required('Vui lòng nhập thông tin'),
        exp: Yup.string().required('Vui lòng nhập thông tin'),
        workingForm: Yup.string().required('Vui lòng nhập thông tin'),
        expiryDate: Yup.date().required('Vui lòng nhập thông tin'),
        description: Yup.string().required('Vui lòng nhập thông tin'),
        recruitmentQuota: Yup.string().required('Vui lòng nhập thông tin'),
        sex: Yup.string().required('Vui lòng nhập thông tin'),
        status: Yup.string().required('Vui lòng nhập thông tin'),
    })

    const initialValues = {
        title: '',
        salary: '',
        position: '',
        exp: '',
        workingForm: '',
        expiryDate: '',
        description: '',
        recruitmentQuota: '',
        sex: '',
        status: '',
        enterprise: {
            id: '',
            address:'',
            branch:''
        }

    };

    const handleSubmit = (values) => {
        axios.post('http://localhost:8080/api/recruitmentPosts', values)
            .then(res => {
                console.log("data", res.data);
                navigate("/list");
            })
    };

    return (
        <>
            <div className="container-xxl bg-white p-0">
                <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                    <a href="index.html"
                       className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                        <h1 className="m-0 text-primary">JobEntry</h1>
                    </a>
                    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto p-4 p-lg-0">
                            <a href="index.html" className="nav-item nav-link">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle active"
                                   data-bs-toggle="dropdown">Jobs</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="job-list.html" className="dropdown-item active">Job List</a>
                                    <a href="job-detail.html" className="dropdown-item">Job Detail</a>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="category.html" className="dropdown-item">Job Category</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    <a href="404.html" className="dropdown-item">404</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <a href="" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Post A Job<i
                            className="fa fa-arrow-right ms-3"></i></a>
                    </div>
                </nav>

                <div className="container-xxl py-5 bg-dark page-header mb-1">
                    <div className="container my-5 pt-5 pb-4">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Job List</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb text-uppercase">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Job List</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

           <div className="container">
            <div className="container-xxl py-5">
                <div className="container">
                    <h4 className="mb-4">Apply For The Job</h4>
                    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                        <Form className="mt-5">
                            <div className="row g-2">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-12 row g-3">
                                            <div className="col-12 col-sm-6 d-flex align-items-center">
                                                <Field type="file" name="file" className="form-control bg-white"/>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="title" className="form-label"></label>
                                                <Field type="text" name="title" className="form-control"
                                                       placeholder="Tiêu đề"/>
                                                <ErrorMessage name="title" component="div" className="text-danger"/>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="salary" className="form-label"></label>
                                                <Field type="text" name="salary" className="form-control"
                                                       placeholder="Mức lương"/>
                                                <ErrorMessage name="salary" component="div" className="text-danger"/>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="position" className="form-label"></label>
                                                <Field type="text" name="position" className="form-control"
                                                       placeholder="Chức vụ"/>
                                                <ErrorMessage name="position" component="div" className="text-danger"/>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="exp" className="form-label"></label>
                                                <Field type="text" name="exp" className="form-control"
                                                       placeholder="Kinh nghiệm"/>
                                                <ErrorMessage name="exp" component="div" className="text-danger"/>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="workingForm" className="form-label"></label>
                                                <Field type="text" name="workingForm" className="form-control"
                                                       placeholder="Hình thức làm
                                                    việc"/>
                                                <ErrorMessage name="workingForm" component="div"
                                                              className="text-danger"/>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="expiryDate" className="form-label"></label>
                                                <Field type="date" name="expiryDate" className="form-control"
                                                       placeholder="Ngày hết hạn"/>
                                                <ErrorMessage name="expiryDate" component="div"
                                                              className="text-danger"/>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="description" className="form-label"></label>
                                                <Field as="textarea" name="description" rows="5"
                                                       className="form-control"
                                                       placeholder="Sự miêu tả"/>
                                                <ErrorMessage name="description" component="div"
                                                              className="text-danger"/>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="recruitmentQuota" className="form-label"></label>
                                                <Field type="text" name="recruitmentQuota" className="form-control"
                                                       placeholder="Chỉ tiêu tuyển
                                                    dụng"/>
                                                <ErrorMessage name="recruitmentQuota" component="div"
                                                              className="text-danger"/>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="sex" className="form-label"></label>
                                                <Field type="text" name="sex" className="form-control"
                                                       placeholder="Giới tính"/>
                                                <ErrorMessage name="sex" component="div" className="text-danger"/>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="status" className="form-label"></label>
                                                <Field type="text" name="status" className="form-control"
                                                       placeholder="Trạng thái"/>
                                                <ErrorMessage name="status" component="div" className="text-danger"/>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="enterprise.id" className="form-label"></label>
                                                <Field as="select" name="enterprise.address" className="form-control"
                                                       placeholder="Địa chỉ">
                                                    <option value="">Chọn địa chỉ</option>
                                                    {enterprises.map((enterprise) => (
                                                        <option key={enterprise.id}
                                                                value={enterprise.id}>{enterprise.address}</option>
                                                    ))}
                                                </Field>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="enterprise.id" className="form-label"></label>
                                                <Field as="select" name="enterprise.branch" className="form-control"
                                                       placeholder="Chi nhánh">
                                                    <option value="">Chọn chi nhánh</option>
                                                    {enterprises.map((enterprise) => (
                                                        <option key={enterprise.id}
                                                                value={enterprise.id}>{enterprise.branch}</option>
                                                    ))}
                                                </Field>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary">Thêm</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
           </div>
        </>
    );
}

export default AddRecruitmentPost;
