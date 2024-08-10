import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getUserDetails,
  updateUsers,
  clearErrors,
} from "../../../actions/userActions";
import { UPDATE_USER_RESET } from "../../../constants/userConstants";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import Sidebar from "../Sidebar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Panel } from "primereact/panel";

const UpdateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useRef(null);
  let { id } = useParams();
  const { error, isUpdated, loading } = useSelector(
    (state) => state.userDeprovision
  );
  const { user } = useSelector((state) => state.userDetails);

  const [initialValues, setInitialValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    role: "",
  });

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const validationSchema = Yup.object({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    role: Yup.string().required("Role is required"),
  });

  useEffect(() => {
    if (!user || user._id !== id) {
      dispatch(getUserDetails(id));
    } else {
      setInitialValues({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
      });
    }
    if (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: error,
        life: 3000,
      });
      dispatch(clearErrors());
    }
    if (isUpdated) {
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Update Successfully!",
        life: 3000,
      });
      setTimeout(() => {
        navigate("/admin/all/users");
      }, 3000);
      dispatch({
        type: UPDATE_USER_RESET,
      });
    }
  }, [dispatch, error, navigate, isUpdated, id, user]);

  const onSubmit = (values) => {
    const formData = new FormData();
    formData.set("firstname", values.firstname);
    formData.set("lastname", values.lastname);
    formData.set("email", values.email);
    formData.set("role", values.role);
    dispatch(updateUsers(user._id, formData));
  };

  const roleOptions = [
    { label: "User", value: "user" },
    { label: "Admin", value: "admin" },
  ];

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex">
      <div className={`${isSidebarVisible ? "visible" : "hidden"}`}>
        <Sidebar />
      </div>
      <div
        className={`layout-main ${
          isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"
        }`}
      >
        <Button
          icon={isSidebarVisible ? "pi pi-times" : "pi pi-bars"}
          onClick={toggleSidebar}
          className="sidebar-toggle-btn primary-200"
        />
        <br />
        <Toast ref={toast} position="top-center" />
        <Panel header="Edit user informations" className="my-4">
          <div className="card p-fluid">
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ values, handleChange, setFieldValue }) => (
                <Form>
                  <div className="field">
                    <label htmlFor="firstname">First Name</label>
                    <Field
                      as={InputText}
                      id="firstname"
                      name="firstname"
                      value={values.firstname}
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="firstname"
                      component="div"
                      className="p-error"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="lastname">Last Name</label>
                    <Field
                      as={InputText}
                      id="lastname"
                      name="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="lastname"
                      component="div"
                      className="p-error"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <Field
                      as={InputText}
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="p-error"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="role">Role</label>
                    <Dropdown
                      id="role"
                      name="role"
                      value={values.role}
                      options={roleOptions}
                      onChange={(e) => setFieldValue("role", e.value)}
                      placeholder="Select a Role"
                    />
                    <ErrorMessage
                      name="role"
                      component="div"
                      className="p-error"
                    />
                  </div>
                  <Button
                    type="submit"
                    label="Update"
                    className="mt-2"
                    loading={loading}
                  />
                  <br />
                  <br />
                  <Button
                    label="Cancel"
                    className="p-button-secondary p-mr-2"
                    onClick={() =>
                      navigate("/admin/all/users", { replace: true })
                    }
                  />
                </Form>
              )}
            </Formik>
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default UpdateUser;
