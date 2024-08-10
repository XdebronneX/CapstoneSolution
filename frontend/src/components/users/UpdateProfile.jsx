import React, { useEffect, useRef, useState } from 'react';
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Image } from "primereact/image";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfile, LoadUser, clearErrors } from '../../actions/userActions';
import { UPDATE_PROFILE_RESET } from '../../constants/userConstants';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Toast } from "primereact/toast";

const UpdateProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useRef(null);

    const { user } = useSelector((state) => state.authUser);
    const { isUpdated, error, loading } = useSelector((state) => state.updateUser);

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(user && user.avatar ? user.avatar.url : "/images/default-avatar.png");

    const initialValues = {
        firstname: user ? user.firstname : "",
        lastname: user ? user.lastname : "",
        avatar: null,
    };

    const validationSchema = Yup.object({
        firstname: Yup.string().required("First name is required"),
        lastname: Yup.string().required("Last name is required"),
    });

    const submitHandler = (e) => {
        const formData = new FormData();
        formData.append("firstname", firstname);
        formData.append("lastname", lastname);
        formData.append("avatar", avatar);
        dispatch(updateProfile(formData));
    };

    const onChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatar(reader.result);
                setAvatarPreview(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    useEffect(() => {
        if (user) {
            setFirstname(user.firstname || "");
            setLastname(user.lastname || "");

            if (user.avatar && user.avatar.url) {
                setAvatarPreview(user.avatar.url);
            } else {
                setAvatarPreview("/images/default-avatar.png");
            }
        }
        if (isUpdated) {
            dispatch(LoadUser());
            toast.current.show({ severity: 'success', summary: 'Success', detail: "Successfully Updated!", life: 3000 });
            dispatch({ type: UPDATE_PROFILE_RESET });
            navigate("/me");
        }
        if (error) {
            toast.current.show({ severity: 'error', summary: 'Error', detail: error, life: 3000 });
            dispatch(clearErrors());
        }
    }, [dispatch, error, isUpdated, navigate, user]);

    return (
        <div className="p-fluid">
            <Toast ref={toast} position='top-center' />
            <h2>Edit Profile</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={submitHandler}
                enableReinitialize
            >
                {({ setFieldValue }) => (
                    <Form className="p-form">
                        <div className="p-field">
                            <label htmlFor="firstname">First Name</label>
                            <Field
                                id="firstname"
                                name="firstname"
                                as={InputText}
                                className="p-inputtext p-component"
                            />
                            <ErrorMessage name="firstname" component="small" className="p-error" />
                        </div>
                        <div className="p-field">
                            <label htmlFor="lastname">Last Name</label>
                            <Field
                                id="lastname"
                                name="lastname"
                                as={InputText}
                                className="p-inputtext p-component"
                            />
                            <ErrorMessage name="lastname" component="small" className="p-error" />
                        </div>
                        <div className="p-field">
                            <label htmlFor="avatar">Avatar</label>
                            <InputText
                                type="file"
                                id="avatar"
                                name="avatar"
                                accept="image/*"
                                onChange={onChange}
                                className="p-inputtext p-component"
                            />
                        </div>
                        <div className="p-field">
                            <Image
                                src={avatarPreview}
                                alt="Avatar Preview"
                                width="150"
                                height="150"
                                className="p-mt-2"
                            />
                        </div>
                        <div className="p-mt-4">
                            <Button
                                label="Cancel"
                                className="p-button-secondary p-mr-2"
                                onClick={() => navigate("/me", { replace: true })}
                            />
                            <Button
                                label="Update"
                                type="submit"
                                loading={loading}
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UpdateProfile;



