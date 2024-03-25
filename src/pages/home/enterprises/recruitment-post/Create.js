import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router";

export default function Create() {
    const [enterprises, setEnterprises] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8080/api/enterprises').then(res => {
            console.log(res.data);
            setEnterprises(res.data);
        })
    }, []);

    const handlesubmit = (values) => {
        axios.post('http://localhost:8080/api/recruitmentPosts', values).then(res => {
            console.log(res.data);
            navigate("/list")
        })
    }

    let initValues = {
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
            id: ''
        }
    };

    return (
        <>
            <h1>Add company</h1>
            <Formik initialValues={initValues} onSubmit={handlesubmit}>
                <Form>
                    <Field name={'title'}></Field>
                    <Field name={'salary'}></Field>
                    <Field name={'position'}></Field>
                    <Field name={'exp'}></Field>
                    <Field name={'workingForm'}></Field>
                    <Field name={'expiryDate'}></Field>
                    <Field name={'description'}></Field>
                    <Field name={'recruitmentQuota'}></Field>
                    <Field name={'sex'}></Field>
                    <Field name={'status'}></Field>
                    <Field as={'select'} name={'enterprise'}>
                        {enterprises.map((item) =>
                        <option key={item.id} value={item.id}>{item.address}</option>
                        )}
                    </Field>
                    <button>Add</button>
                </Form>
            </Formik>
        </>
    )
}