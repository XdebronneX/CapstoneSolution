import React, { useRef, useEffect } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";
import { forgotPassword, clearErrors } from "../../actions/userActions";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useRef(null);

  const { error, loading, message } = useSelector((state) => state.forgotPassword);

  // Handle errors and messages
  useEffect(() => {
    if (error) {
      toast.current.show({ severity: 'error', summary: 'Error', detail: error });
      dispatch(clearErrors());
    }
    if (message) {
      toast.current.show({ severity: 'success', summary: 'Success', detail: message });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [error, message, dispatch, navigate]);

  return (
    <div className="flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">
            Forgot Password
          </div>
        </div>

        <Formik
          initialValues={{ email: '' }}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email address').required('Required')
          })}
          onSubmit={(values) => {
            const formData = new FormData();
            formData.set("email", values.email);
            dispatch(forgotPassword(formData));
          }}
        >
            <Form>
              <div>
                <label htmlFor="email" className="block text-900 font-medium mb-2">
                  Email
                </label>
                <Field
                  as={InputText}
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email address"
                  className="w-full mb-3"
                />
                <ErrorMessage name="email" component="div" className="text-red-600 mb-3" />

                <div className="text-center">
                  <Button
                    type="submit"
                    label="Send request"
                    icon="pi pi-inbox"
                    className="pl-8 pr-8"
                    disabled={loading}
                  />
                </div>
              </div>
            </Form>
        </Formik>

        <Toast ref={toast} position="top-center" />
      </div>
    </div>
  );
};

export default ForgotPassword;
