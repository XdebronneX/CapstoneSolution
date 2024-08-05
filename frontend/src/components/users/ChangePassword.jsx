import React, { useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatePassword, clearErrors } from "../../actions/userActions";
import { UPDATE_PASSWORD_RESET } from "../../constants/userConstants";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Toast } from "primereact/toast";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useRef(null);

  const { isUpdated, error, loading } = useSelector((state) => state.updateUser);

 const initialValues = {oldPassword: '', password: ''} 

 const validationSchema = Yup.object({
  oldPassword: Yup.string().required('Old Password is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('New Password is required'),
});

const submitHandler = ((data) => {
  const formData = new FormData();
  formData.set('oldPassword', data.oldPassword);
  formData.set('password', data.password);
  dispatch(updatePassword(formData));
});

  useEffect(() => {
    if (isUpdated) {
      toast.current.show({ severity: 'success', summary: 'Success', detail: 'Password updated successfully', life: 3000 });
      setTimeout(() => {
        navigate("/me");
        dispatch({ type: UPDATE_PASSWORD_RESET });
      }, 3000);
    }

    if (error) {
      toast.current.show({ severity: 'error', summary: 'Error', detail: error, life: 3000 });
      dispatch(clearErrors());
    }
  }, [dispatch, isUpdated, error, navigate]);

  return (
    <div className="flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">Change Password</div>
        </div>
           <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitHandler}>
            <Form>
              <div>
                <label htmlFor="oldPassword" className="block text-900 font-medium mb-2">
                  Old Password
                </label>
                <Field
                  as={InputText}
                  id="oldPassword"
                  name="oldPassword"
                  type="password"
                  placeholder="Old Password"
                  className="w-full mb-3"
                />
                <ErrorMessage name="oldPassword" component="div" className="text-red-600 mb-3" />

                <label htmlFor="password" className="block text-900 font-medium mb-2">
                  New Password
                </label>
                <Field
                  as={InputText}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="New Password"
                  className="w-full mb-3"
                />
                <ErrorMessage name="password" component="div" className="text-red-600 mb-3" />

                <div className="text-center">
                  <Button
                    type="submit"
                    label="Change Password"
                    icon="pi pi-refresh"
                    className="pl-8 pr-8"
                    loading={loading}
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

export default ChangePassword;
