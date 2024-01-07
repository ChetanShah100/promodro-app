import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import './Signup.css'
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
  function SignUp(){
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [key, setkey] = useState('');
    const navigate=useNavigate("")
  const initialState = {
    name: "",
    password: "",
    email: "",
    phone: "",
  };
  const validationSchema = yup.object().shape({
    name: yup.string().required("Enter your name"),
    password: yup.string().required("Enter your name"),
    email: yup.string().required().email("Enter your email"),
    city: yup.string().required("Enter your city"),
  });
  const handelSubmit = (values) => {
    let obj = {
      ...values,
    };
    console.log(obj);
};
 
const handle = () => {
    localStorage.setItem('Name', name);
    localStorage.setItem('Password', pwd);
    localStorage.setItem('email', email);
    localStorage.setItem('city', phone);
    navigate("/")
 };

 const handletwo=()=>{
    navigate("/")
 }

  return (
    <Formik
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={handelSubmit}
    >
      <div className="container">
        <Form className="SignUp">
            <h2>SignUp</h2>
            {/* <hr></hr> */}

          <div><Field type="text"  value={name}
            onChange={(e) => setName(e.target.value)} placeholder="Enter your name"></Field>    
        </div>
         <div>
         <Field
            type="text"
            name="email"
            placeholder="Enter your email"  value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Field>
         </div>
        <div>
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"  value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          ></Field>
          </div>
          <div>
          <Field type="number" value={phone}
            onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number"></Field>
          </div>
          <button type="submit" onClick={handle}>SignUp</button>
          <p>if already registered</p>
         <button onClick={handletwo} >Login</button>
        </Form>
      </div>
    </Formik>
  );
}

export default SignUp;