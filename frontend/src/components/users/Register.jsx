import React, { useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { RegisterUser, clearErrors } from "../../actions/userActions";
import { REGISTER_USER_RESET } from "../../constants/userConstants";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Toast } from 'primereact/toast';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toastCenter = useRef(null);

  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required('Firstname is required'),
    lastname: Yup.string().required('Lastname is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
  });

  const { error, success, loading } = useSelector((state) => state.authUser);

  useEffect(() => {
    if (error) {
      toastCenter.current.show({ severity: 'error', summary: 'Error', detail: error, life: 3000 });
      dispatch(clearErrors());
    }

    if (success) {
      toastCenter.current.show({ severity: 'success', summary: 'Success', detail: 'Registration Successful', life: 3000 });
      setTimeout(() => {
        navigate("/login");
        dispatch({ type: REGISTER_USER_RESET });
      }, 3000);
    }
  }, [dispatch, error, success, navigate]);

  const submitHandler = (values) => {
    console.log("Form Values: ", values);

    const formData = new FormData();
    formData.set("firstname", values.firstname);
    formData.set("lastname", values.lastname);
    formData.set("email", values.email);
    formData.set("password", values.password);

    dispatch(RegisterUser(formData));
  };

  const LoginHandler = () => {
    navigate("/login");
  };

  return (
    <div className="flex align-items-center justify-content-center">
      <Toast ref={toastCenter} position="top-center" />
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">Register Form</div>
          <span className="text-600 font-medium line-height-3">
            Already have an account?
          </span>
          <a onClick={LoginHandler} className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">
            Login
          </a>
        </div>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitHandler}>
            <Form>
              <div>
                <label htmlFor="firstname" className="block text-900 font-medium mb-2">
                  Firstname
                </label>
                <Field
                  id="firstname"
                  name="firstname"
                  as={InputText}
                  placeholder="Firstname"
                  className="w-full mb-3"
                />
                <ErrorMessage name="firstname" component="div" className="p-error" />

                <label htmlFor="lastname" className="block text-900 font-medium mb-2">
                  Lastname
                </label>
                <Field
                  id="lastname"
                  name="lastname"
                  as={InputText}
                  placeholder="Lastname"
                  className="w-full mb-3"
                />
                <ErrorMessage name="lastname" component="div" className="p-error" />

                <label htmlFor="email" className="block text-900 font-medium mb-2">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  as={InputText}
                  type="text"
                  placeholder="Email address"
                  className="w-full mb-3"
                />
                <ErrorMessage name="email" component="div" className="p-error" />

                <label htmlFor="password" className="block text-900 font-medium mb-2">
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  as={InputText}
                  type="password"
                  placeholder="Password"
                  className="w-full mb-3"
                />
                <ErrorMessage name="password" component="div" className="p-error" />

                <label htmlFor="confirmPassword" className="block text-900 font-medium mb-2">
                  Confirm Password
                </label>
                <Field
                  id="confirmPassword"
                  name="confirmPassword"
                  as={InputText}
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full mb-3"
                />
                <ErrorMessage name="confirmPassword" component="div" className="p-error" />

                <div className="text-center">
                  <Button
                    type="submit"
                    label="Sign Up"
                    icon="pi pi-user"
                    className="pl-8 pr-8"
                    disabled={loading}
                  />
                </div>
              </div>
            </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
