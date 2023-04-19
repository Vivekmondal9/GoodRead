
import axios from "axios";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
    const navigate = useNavigate()

    const [responseData, setResponseData] = useState({
        responseText: "",
        responseClass: "",
        flag:false

    })
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: ""

    }

    const validationSchema = Yup.object({
        firstName: Yup.string("Please Enter a valid Name").required("First Name is required."),
        lastName: Yup.string("Please Enter a valid Name").required("First Name is required."),
        email: Yup.string().email("Enter a Valid email address.").required("Email is required."),
        mobile: Yup.number("Enter a valid mobile Number").required("Number is required"),
        password: Yup.string().required("Password is required").min(6, "Password must contain 6 Minimum charecters")
    })

    function onSubmit(values, { resetForm }) {


        axios
            .post(
                "https://orca-app-jhg4l.ondigitalocean.app/api/auth/register",
                values
            )
            .then(
                (response) => {
                    setResponseData({
                        responseText: response.data.message,
                        responseClass: "alert alert-success",
                        flag:true
                    });
                    setTimeout(()=>{
                        navigate("/login",true)
                    },1000)
                },
                (error) => {
                    setResponseData({
                        responseText: error.message,
                        responseClass: "alert alert-danger",
                        flag:false
                    });
                }
            )
            .catch((error) => console.log(error));
        resetForm()







    };


    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div style={{
                            background: "#fff",
                            padding: "30px 40px",
                            borderRadius: "10 px",
                            marginTop: "80px"
                        }}>
                            <div className={responseData.responseClass} role="alert">{responseData.responseText}</div>
                            <h2>Register</h2>
                            <hr />
                            <Formik initialValues={initialValues} validationSchema={validationSchema} validateOnMount onSubmit={onSubmit}  >
                                {(formik) => {
                                    return (
                                        <Form>
                                            <div className="form-group">
                                                <label htmlFor="">First Name</label>
                                                <Field type="text" name="firstName" className={formik.errors.firstName &&
                                                    formik.touched.firstName ? "form-control is-invalid" : "form-control"}/>
                                                <ErrorMessage name="firstName">
                                                    {(errormessage) => (<small className="text-danger">{errormessage}</small>)}
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Last Name</label>
                                                <Field type="text" name="lastName" className={formik.errors.lastName &&
                                                    formik.touched.lastName ? "form-control is-invalid" : "form-control"}/>
                                                <ErrorMessage name="lastName">
                                                    {(errormessage) => (<small className="text-danger">{errormessage}</small>)}
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">E-Mail</label>
                                                <Field type="email" name="email" className={formik.errors.email &&
                                                    formik.touched.email ? "form-control is-invalid" : "form-control"}/>
                                                <ErrorMessage name="email">
                                                    {(errormessage) => (<small className="text-danger">{errormessage}</small>)}
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">mobile No.</label>
                                                <Field type="mobile" name="mobile" className={formik.errors.mobile &&
                                                    formik.touched.mobile ? "form-control is-invalid" : "form-control"}/>
                                                <ErrorMessage name="mobile">
                                                    {(errormessage) => (<small className="text-danger">{errormessage}</small>)}
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Password</label>
                                                <Field type="password" name="password" className={formik.errors.password &&
                                                    formik.touched.password ? "form-control is-invalid" : "form-control"}/>
                                                <ErrorMessage name="password">
                                                    {(errormessage) => (<small className="text-danger">{errormessage}</small>)}
                                                </ErrorMessage>
                                            </div>
                                            <input type="submit" value="register" disabled={!formik.isValid} className="btn btn-primary btn-block" />
                                        </Form>
                                    )
                                }}

                            </Formik>


                            <br />
                            <p className="text-center">
                                Already Have an Account? <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )







}


export default RegisterPage;