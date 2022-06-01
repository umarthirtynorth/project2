import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const SignUp = () => {

    const [SignUpState, setSignUpState] = useState({
        accesstoken: "",
        isError: false,
        message: "",
    });
    const navigate = useNavigate();
    const handleformSubmit = async () => {
        try {
          const results = await axios.post("http://localhost:3004/register", {
            name:formik.values.name,
            email: formik.values.email,
            password: formik.values.password,
          });
          if (results) {
            
              setSignUpState({
                accesstoken: results.data.accessToken,
                isError:false,
                message:"",
              });
               navigate("/home");
          }
        } catch (error) {
          // console.log('something wrong' , error)
          setSignUpState({
            accesstoken: "",
            isError: true,
            message: error.response.message,
          });
        }
    }    


    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:""
        },
        validationSchema:yup.object({
            name:yup.string()
                        .required("Please enter  Name"),            
            email:yup.string()
                        .email("Please enter valid Email")
                        .required("Please enter valid Email"),
            password:yup.string().required("Please enter Password")
        }),
        handleSubmit(event){
            event.preventDefault()
        },

        onSubmit: (values, { setStatus, setSubmitting }) => {
            handleformSubmit(values);
          },
          
    })
    return (
        <div className="login-page">
            <div className="form">
            <h1>Sign Up</h1>
                <form className="login-form" onSubmit={formik.handleSubmit}>
                    <div>
                        <input 
                            type="text" 
                            placeholder="name"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name} 
                        />
                        {formik.touched.name && formik.errors.name && 
                            (<p style={{color:"red"}}>{formik.errors.name}</p>
                        )}
                    </div>
                    <div>
                        <input 
                            type="email" 
                            placeholder="email"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email} 
                        />
                        {formik.touched.email && formik.errors.email && 
                            (<p style={{color:"red"}}>{formik.errors.email}</p>
                        )}
                    </div>
                    <div>
                        <input 
                            type="password" 
                            placeholder="password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password} 
                        />
                        {formik.touched.password && formik.errors.password && 
                            (<p style={{color:"red"}}>{formik.errors.password}</p>
                        )}
                    </div>
                    <button type="submit">SignUp</button>
                    <p className="message">Already registered? <Link to="/">Sign In</Link></p>
                </form>
            </div>
        </div>
        
    );
};

export default SignUp;