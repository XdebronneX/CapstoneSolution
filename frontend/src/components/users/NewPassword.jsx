import React, { useRef, useEffect } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Toast } from "primereact/toast";
import { resetPassword, clearErrors } from "../../actions/userActions";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const NewPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useRef(null);
  let { token } = useParams();

  const { error, success, loading } = useSelector((state) => state.forgotPassword);

  useEffect(() => {
    if (error) {
      toast.current.show({ severity: 'error', summary: 'Error', detail: error });
      dispatch(clearErrors());
    }
    if (success) {
      toast.current.show({ severity: 'success', summary: 'Success', detail: 'Password reset successfully' });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [error, success, dispatch, navigate]);

  const submitHandler = (values) => {
    const formData = new FormData();
    formData.set("password", values.password);
    formData.set("confirmPassword", values.confirmPassword);

    dispatch(resetPassword(token, formData));
  };

  return (
    <div className="flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">
            Reset Password
          </div>
        </div>

        <Formik
          initialValues={{ password: '', confirmPassword: '' }}
          validationSchema={Yup.object({
            password: Yup.string()
              .min(6, 'Password must be at least 6 characters')
              .required('Required'),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('password'), null], 'Passwords must match')
              .required('Required')
          })}
          onSubmit={submitHandler}
        >
            <Form>
              <div>
                <label htmlFor="password" className="block text-900 font-medium mb-2">
                  New Password
                </label>
                <Field
                  as={InputText}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="New password"
                  className="w-full mb-3"
                />
                <ErrorMessage name="password" component="div" className="text-red-600 mb-3" />

                <label htmlFor="confirmPassword" className="block text-900 font-medium mb-2">
                  Confirm Password
                </label>
                <Field
                  as={InputText}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  className="w-full mb-3"
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-600 mb-3" />

                <div className="text-center">
                  <Button
                    type="submit"
                    label="Reset Password"
                    icon="pi pi-refresh"
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

export default NewPassword;
