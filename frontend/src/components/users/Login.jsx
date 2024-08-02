import React, { useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUsers, clearErrors } from "../../actions/userActions";
import { Toast } from "primereact/toast";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useRef(null);

  const { isAuthenticated, error, loading } = useSelector((state) => state.authUser);

  useEffect(() => {
    if (isAuthenticated) {
      toast.current.show({ severity: 'success', summary: 'Success', detail: 'Login Successful', life: 3000 });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }

    if (error) {
      toast.current.show({ severity: 'error', summary: 'Error', detail: error, life: 3000 });
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, error, navigate]);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const submitHandler = (values) => {
    dispatch(LoginUsers(values.email, values.password));
  };

  const ForgotPasswordHandler = () => {
    navigate("/forgotPassword");
  };

  const RegisterHandler = () => {
    navigate("/register");
  };

  return (
    <div className="flex align-items-center justify-content-center">
      <Toast ref={toast} position="top-center" />
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
          <span className="text-600 font-medium line-height-3">
            Don't have an account?
          </span>
          <a onClick={RegisterHandler} className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">
            Create today!
          </a>
        </div>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitHandler}>
            <Form>
              <div>
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

                <div className="flex align-items-center justify-content-between mb-6">
                  <a
                    onClick={ForgotPasswordHandler}
                    className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
                  >
                    Forgot your password?
                  </a>
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    label="Sign In"
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

export default Login;
