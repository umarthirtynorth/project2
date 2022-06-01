import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const Login = () => {

  const [LoginState, setLoginState] = useState({
    accesstoken: "",
    isError: false,
    message: "",
    
  });
   const navigate = useNavigate();
  const handleformSubmit = async () => {
    try {
      const results = await axios.post("http://localhost:3004/login", {
        email: formik.values.email,
        password: formik.values.password,
      });
      if (results) {
        localStorage.setItem("login", results.data.accessToken);
          setLoginState({
            accesstoken: results.data.accessToken,
            isError:false,
            message:""
          });
          console.log(results)
          navigate("/home")
         
      }
    } catch (error) {
      //console.log(error);
      setLoginState({
        accesstoken: "",
        isError: true,
        message: error.response.data.user,
      });     
    }
    //console.log(LoginState);

    
  };

    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: yup.object({
          email: yup
            .string()
            .email("Please enter valid email")
            .required("Please Enter valid email"),
          password: yup.string().required("Please enter valid password"),
        }),
        handleSubmit(event) {
          event.preventDefault(); 
        },
        onSubmit: (values, { setStatus, setSubmitting }) => {
          handleformSubmit(values);
        },
      });
    return (
         <div className="login-page">
            <div className="form">
            <h1>Log In</h1>
                <form className="login-form" onSubmit={formik.handleSubmit}>
                    <div>
                    <input 
                        type="email" 
                        placeholder="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p style={{ color: "red" }}>{formik.errors.email}</p>
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
                    {formik.touched.password && formik.errors.password && (
                        <p style={{ color: "red" }}>{formik.errors.password}</p>
                    )}
                    </div>
                    <button type="submit">login</button>
                    <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;