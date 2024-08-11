import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { newProduct, clearErrors } from "../../../actions/productActions";
import { NEW_PRODUCT_RESET } from "../../../constants/productConstants";
import { Toast } from "primereact/toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Panel } from "primereact/panel";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FileUpload } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Tag } from "primereact/tag";
import { Tooltip } from "primereact/tooltip";
import Sidebar from "../Sidebar";
import { InputTextarea } from 'primereact/inputtextarea';

const NewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useRef(null);
  const fileUploadRef = useRef(null);
  const { loading, error, success } = useSelector((state) => state.newProduct);
  const [totalSize, setTotalSize] = useState(0);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [images, setImages] = useState([]);
  const [imagesUploaded, setImagesUploaded] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    if (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: error,
        life: 3000,
      });
      dispatch(clearErrors());
    }

    if (success) {
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Created Successfully!",
        life: 3000,
      });
      setTimeout(() => {
        navigate("/admin/listProducts");
      }, 3000);
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, error, success, navigate]);

  const submitHandler = (values, { setSubmitting }) => {
    const formData = new FormData();
    formData.set("projectTitle", values.projectTitle);
    formData.set("description", values.description);
    formData.set("price", values.price);
    formData.set("type", values.type);
    images.forEach((image) => {
      formData.append("images", image);
    });
    dispatch(newProduct(formData));
    setSubmitting(false);
  };

  const onUpload = (e) => {
    let _totalSize = 0;
    const files = Array.from(e.files);
    setImagesUploaded(true);
    files.forEach((file) => {
      const reader = new FileReader();
      _totalSize += file.size || 0;
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((oldArray) => [...oldArray, reader.result]);
          setImages((oldArray) => [...oldArray, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });

    setTotalSize(_totalSize);
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "Files Uploaded",
    });
  };

  const onRemove = (file, callback) => {
    setTotalSize(totalSize - file.size);
    setImages(images.filter((img) => img.name !== file.name));
    setImagesPreview(imagesPreview.filter((img) => img !== file.objectURL));
    callback();
  };

  const onClear = () => {
    setTotalSize(0);
    setImages([]);
    setImagesPreview([]);
  };

  const headerTemplate = (options) => {
    const { className, chooseButton, uploadButton, cancelButton } = options;
    const value = totalSize / 10000;
    const formatedValue = fileUploadRef.current
      ? fileUploadRef.current.formatSize(totalSize)
      : "0 B";

    return (
      <div
        className={className}
        style={{
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
        }}
      >
        {chooseButton}
        {uploadButton}
        {cancelButton}
        <div className="flex align-items-center gap-3 ml-auto">
          <span>{formatedValue} / 1 MB</span>
          <ProgressBar
            value={value}
            showValue={false}
            style={{ width: "10rem", height: "12px" }}
          />
        </div>
      </div>
    );
  };

  const itemTemplate = (file, props) => {
    return (
      <div className="flex align-items-center flex-wrap">
        <div className="flex align-items-center" style={{ width: "40%" }}>
          <img
            alt={file.name}
            role="presentation"
            src={file.objectURL}
            width={100}
          />
          <span className="flex flex-column text-left ml-3">
            {file.name}
            <small>{new Date().toLocaleDateString()}</small>
          </span>
        </div>
        <Tag
          value={props.formatSize}
          severity="warning"
          className="px-3 py-2"
        />
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-outlined p-button-rounded p-button-danger ml-auto"
          onClick={() => onRemove(file, props.onRemove)}
        />
      </div>
    );
  };

  const emptyTemplate = () => {
    return (
      <div className="flex align-items-center flex-column">
        <i
          className="pi pi-image mt-3 p-5"
          style={{
            fontSize: "5em",
            borderRadius: "50%",
            backgroundColor: "var(--surface-b)",
            color: "var(--surface-d)",
          }}
        ></i>
        <span
          style={{ fontSize: "1.2em", color: "var(--text-color-secondary)" }}
          className="my-5"
        >
          Drag and Drop Image Here
        </span>
      </div>
    );
  };

  const chooseOptions = {
    icon: "pi pi-fw pi-images",
    iconOnly: true,
    className: "custom-choose-btn p-button-rounded p-button-outlined",
  };
  const uploadOptions = {
    icon: "pi pi-fw pi-cloud-upload",
    iconOnly: true,
    className:
      "custom-upload-btn p-button-success p-button-rounded p-button-outlined",
  };
  const cancelOptions = {
    icon: "pi pi-fw pi-times",
    iconOnly: true,
    className:
      "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined",
  };

//   return (
//     <div className="flex">
//       <Toast ref={toast} position="top-center" />
//       <div className={`${isSidebarVisible ? "visible" : "hidden"}`}>
//         <Sidebar />
//       </div>
//       <div
//         className={`layout-main ${
//           isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"
//         }`}
//       >
//         <Button
//           icon={isSidebarVisible ? "pi pi-times" : "pi pi-bars"}
//           onClick={toggleSidebar}
//           className="sidebar-toggle-btn primary-200"
//         />
//         <br />
//         <Tooltip
//           target=".custom-choose-btn"
//           content="Choose"
//           position="bottom"
//         />
//         <Tooltip
//           target=".custom-upload-btn"
//           content="Upload"
//           position="bottom"
//         />
//         <Tooltip
//           target=".custom-cancel-btn"
//           content="Clear"
//           position="bottom"
//         />
  
//         <Panel header="New Product" className="my-4">
//         <div className="card p-fluid">
//             <Formik
//               initialValues={{
//                 projectTitle: "",
//                 description: "",
//                 price: "",
//                 type: "",
//               }}
//               validationSchema={Yup.object({
//                 projectTitle: Yup.string().required("Required"),
//                 description: Yup.string().required("Required"),
//                 price: Yup.number().required("Required"),
//                 type: Yup.string().required("Required"),
//               })}
//               onSubmit={submitHandler}
//             >
//               {({ isSubmitting }) => (
//                 <Form>
//                     <div className="field">
//                       <label htmlFor="projectTitle">Project Title</label>
//                       <Field id="projectTitle" name="projectTitle" as={InputText} />
//                       <ErrorMessage
//                         name="projectTitle"
//                         component="small"
//                         className="p-error"
//                       />
//                     </div>
//                     <div className="field">
//                       <label htmlFor="description">Description</label>
//                       <Field id="description" name="description" as={InputText} />
//                       <ErrorMessage
//                         name="description"
//                         component="small"
//                         className="p-error"
//                       />
//                     </div>
  
//                     <div className="field">
//                       <label htmlFor="price">Price</label>
//                       <Field id="price" name="price" type="number" as={InputText} />
//                       <ErrorMessage
//                         name="price"
//                         component="small"
//                         className="p-error"
//                       />
//                     </div>
//                     <div className="field">
//                       <label htmlFor="type">Type</label>
//                       <Field id="type" name="type" as={InputText} />
//                       <ErrorMessage
//                         name="type"
//                         component="small"
//                         className="p-error"
//                       />
//                     </div>
  
//                   <div className="field">
//                     <label>Images</label>
//                     <FileUpload
//                       name="images"
//                       ref={fileUploadRef}
//                       customUpload
//                       uploadHandler={onUpload}
//                       chooseOptions={chooseOptions}
//                       uploadOptions={uploadOptions}
//                       cancelOptions={cancelOptions}
//                       headerTemplate={headerTemplate}
//                       itemTemplate={itemTemplate}
//                       emptyTemplate={emptyTemplate}
//                       onClear={onClear}
//                       multiple
//                     />
//                   </div>
  
//                   <Button
//                     type="submit"
//                     label="Submit"
//                     icon="pi pi-check"
//                     className="p-button-success p-mr-2"
//                     disabled={isSubmitting || loading}
//                   />
//                   <Button
//                     type="button"
//                     label="Cancel"
//                     icon="pi pi-times"
//                     className="p-button-danger"
//                     onClick={() => navigate("/dashboard")}
//                   />
//                 </Form>
//               )}
//             </Formik>
//           </div>
//         </Panel>
//       </div>
//     </div>
//   );
  
return (
    <div className="flex">
      <Toast ref={toast} position="top-center" />
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
        <Tooltip
          target=".custom-choose-btn"
          content="Choose"
          position="bottom"
        />
        <Tooltip
          target=".custom-upload-btn"
          content="Upload"
          position="bottom"
        />
        <Tooltip
          target=".custom-cancel-btn"
          content="Clear"
          position="bottom"
        />
  
        <Panel header="New Product" className="my-4">
          <div className="card p-fluid">
            <Formik
              initialValues={{
                projectTitle: "",
                description: "",
                price: "",
                type: "",
              }}
              validationSchema={Yup.object({
                projectTitle: Yup.string().required("Required"),
                description: Yup.string().required("Required"),
                price: Yup.number().required("Required"),
                type: Yup.string().required("Required"),
              })}
              onSubmit={submitHandler}
            >
              {({ isSubmitting }) => (
                <Form>
                  {/* Container for horizontal alignment */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex-1">
                      <div className="field">
                        <label htmlFor="projectTitle">Project Title</label>
                        <Field id="projectTitle" name="projectTitle" as={InputText} />
                        <ErrorMessage
                          name="projectTitle"
                          component="small"
                          className="p-error"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="field">
                        <label htmlFor="description">Description</label>
                        <Field id="description" name="description" as={InputTextarea} />
                        <ErrorMessage
                          name="description"
                          component="small"
                          className="p-error"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="field">
                        <label htmlFor="price">Price</label>
                        <Field id="price" name="price" type="number" as={InputText} />
                        <ErrorMessage
                          name="price"
                          component="small"
                          className="p-error"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="field">
                        <label htmlFor="type">Type</label>
                        <Field id="type" name="type" as={InputText} />
                        <ErrorMessage
                          name="type"
                          component="small"
                          className="p-error"
                        />
                      </div>
                    </div>
                  </div>
  
                  <div className="field mt-4">
                    <label>Images</label>
                    <FileUpload
                      name="images"
                      ref={fileUploadRef}
                      customUpload
                      uploadHandler={onUpload}
                      chooseOptions={chooseOptions}
                      uploadOptions={uploadOptions}
                      cancelOptions={cancelOptions}
                      headerTemplate={headerTemplate}
                      itemTemplate={itemTemplate}
                      emptyTemplate={emptyTemplate}
                      onClear={onClear}
                      multiple
                      className="custom-file-upload"
                    />
                  </div>
                  <div className="flex gap-4 mt-4">
                  <Button
                    type="submit"
                    label="Submit"
                    icon="pi pi-check"
                    className="custom-button button-submit"
                    disabled={isSubmitting || loading || !imagesUploaded}
                  />
                  <Button
                    type="button"
                    label="Cancel"
                    icon="pi pi-times"
                    className="custom-button button-cancel"
                    onClick={() => navigate("/admin/listProducts")}
                  />
                </div>
                </Form>
              )}
            </Formik>
          </div>
        </Panel>
      </div>
    </div>
  );
  
  
  
};

export default NewProduct;
