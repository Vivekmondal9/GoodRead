import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./LoginPage.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

function LoginPage() {
    const navigate=useNavigate()

    const [responseData, setResponseData] = useState({
        responseText: "",
        responseClass: "",
        flag:false,
    })

    const initialValues = {
        email: "",
        password: ""
    }

    function onsubmit(values, { resetForm }) {
        
        axios
            .post("https://orca-app-jhg4l.ondigitalocean.app/api/auth/login", values)
            .then((response) => {
                localStorage.setItem("Token", response.data.token);

                setResponseData({
                    responseText: "Login Success, Thank You",
                    responseClass: "alert alert-success",
                    flag:true
                });

                setTimeout(()=>{
                    navigate("/")
                },1500)
          
          
            },
                (error) => {
                    setResponseData({
                        responseText: "Invalid Username or Password!",
                        responseClass: "alert alert-danger",
                        flag:false
                    })
                }
            )
            .catch((error) => {
                console.log(error)
            });
            
        

           
            
            

          
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Enter a Valid Email"),
        password: Yup.string().min(6, "Password must contain Minimum 6 charecters.")

    })

    return (
        <div>
            <Navbar></Navbar>
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  
                    <div className="wrapper">
                        <div className={responseData.responseClass}>{responseData.responseText}</div>
                        <h2>Log in</h2>
                        <hr />
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            validateOnMount
                            onSubmit={onsubmit}>
                            {(formik) => {
                                return (
                                    <Form>
                                        <div className="form-group">
                                            <label htmlFor="">E-Mail</label>
                                            <Field type="email" name="email" className={formik.errors.email && formik.touched.email ?
                                                "form-control is-invalid" : "form-control"} />
                                            <ErrorMessage name="email">
                                                {(errormessage) => (
                                                    <small className="text-danger">{errormessage}</small>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <Field type="password" name="password" className={formik.errors.password && formik.touched.password ?
                                                "form-control is-invalid" : "form-control"} />
                                            <ErrorMessage name="password">{(errormessage) => (<small className="text-danger">{errormessage}</small>)}</ErrorMessage>
                                        </div>
                                        <input type="submit" value="Login" disabled={!formik.isValid} className="btn btn-primary btn-block log-btn" />
                                    </Form>

                                )
                            }}

                        </Formik>
                        <p className="text-center">
                            New users? <Link to="/register">Click Here</Link>
                        </p>
                    </div>


                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
        </div>
    )


}


export default LoginPage;