// import React, { useRef, useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   updateProduct,
//   getProductDetails,
//   clearErrors,
// } from "../../../actions/productActions";
// import { UPDATE_PRODUCT_RESET } from "../../../constants/productConstants";
// import { Toast } from "primereact/toast";
// import { InputText } from "primereact/inputtext";
// import { Button } from "primereact/button";
// import { Panel } from "primereact/panel";
// import Sidebar from "../Sidebar";
// import { InputTextarea } from "primereact/inputtextarea";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const UpdateProduct = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const toast = useRef(null);
//   let { id } = useParams();
//   const { error, isUpdated, loading } = useSelector((state) => state.adminProduct);
//   const { product } = useSelector((state) => state.productDetails);
//   const [oldImages, setOldImages] = useState([]);
//   const [imagesPreview, setImagesPreview] = useState([]);
//   const [images, setImages] = useState([]);
//   const [isSidebarVisible, setSidebarVisible] = useState(true);
//   const [initialValues, setInitialValues] = useState({
//     projectTitle: "",
//     type: "",
//     description: "",
//     price: 0,
//   });

//   const validationSchema = Yup.object({
//     projectTitle: Yup.string().required("Name is required"),
//     description: Yup.string().required("Description is required"),
//     price: Yup.number()
//       .required("Price is required")
//       .positive("Price must be positive"),
//     type: Yup.string().required("Type is required"),
//   });

//   useEffect(() => {
//     if (product && product._id !== id) {
//       dispatch(getProductDetails(id));
//     } else {
//       setOldImages(product.images);
//       setImagesPreview(product.images.map((image) => image.url));

//       setInitialValues({
//         projectTitle: product.projectTitle,
//         description: product.description,
//         price: product.price,
//         type: product.type,
//       });
//     }

//     if (isUpdated) {
//       toast.current.show({
//         severity: "success",
//         summary: "Success",
//         detail: "Product updated successfully",
//         life: 3000,
//       });
//       dispatch({ type: UPDATE_PRODUCT_RESET });
//       setTimeout(() => {
//         navigate("/admin/listProducts");
//       }, 3000);
//     }

//     if (error) {
//       toast.current.show({
//         severity: "error",
//         summary: "Error",
//         detail: error,
//         life: 3000,
//       });
//       dispatch(clearErrors());
//     }
//   }, [dispatch, error, isUpdated, navigate, product, id]);

//   const submitHandler = (values) => {
//     const formData = new FormData();
//     formData.set("projectTitle", values.projectTitle);
//     formData.set("description", values.description);
//     formData.set("price", values.price);
//     formData.set("type", values.type);
//     images.forEach((image) => {
//       formData.append("images", image);
//     });

//     dispatch(updateProduct(product._id, formData));
//   };

//   const onChange = (e) => {
//     const files = Array.from(e.target.files);
//     setImagesPreview([]);
//     setImages([]);
//     // setOldImages([]);
//     files.forEach((file) => {
//       const reader = new FileReader();
//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setImagesPreview((oldArray) => [...oldArray, reader.result]);
//           setImages((oldArray) => [...oldArray,  reader.result]);
//         }
//       };
//       reader.readAsDataURL(file);
//     });
//   };


//   const toggleSidebar = () => {
//     setSidebarVisible((prevState) => !prevState);
//   };

//   return (
//     <div className="layout-wrapper">
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
//         <br />
//         <Panel header="Update Product">
//           <Formik
//             enableReinitialize
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={submitHandler}
//           >
//             {({ isSubmitting }) => (
//               <Form className="p-fluid">
//                 <div className="p-field">
//                   <label htmlFor="projectTitle">Project Title</label>
//                   <Field
//                     name="projectTitle"
//                     as={InputText}
//                     className="p-inputtext-sm block"
//                   />
//                   <ErrorMessage
//                     name="projectTitle"
//                     component="small"
//                     className="p-error"
//                   />
//                 </div>
//                 <div className="p-field">
//                   <label htmlFor="description">Description</label>
//                   <Field
//                     name="description"
//                     as={InputTextarea}
//                     rows={5}
//                     className="p-inputtext-sm block"
//                   />
//                   <ErrorMessage
//                     name="description"
//                     component="small"
//                     className="p-error"
//                   />
//                 </div>
//                 <div className="p-field">
//                   <label htmlFor="price">Price</label>
//                   <Field
//                     name="price"
//                     type="number"
//                     as={InputText}
//                     className="p-inputtext-sm block"
//                   />
//                   <ErrorMessage
//                     name="price"
//                     component="small"
//                     className="p-error"
//                   />
//                 </div>
//                 <div className="p-field">
//                   <label htmlFor="type">Type</label>
//                   <Field
//                     name="type"
//                     as={InputText}
//                     className="p-inputtext-sm block"
//                   />
//                   <ErrorMessage
//                     name="type"
//                     component="small"
//                     className="p-error"
//                   />
//                 </div>
//                 <div className="p-field">
//                   <label htmlFor="images">Images</label>
//                   <input
//                     type="file"
//                     name="images"
//                     accept="image/*"
//                     multiple
//                     onChange={onChange}
//                     className="p-inputtext-sm block"
//                   />
//                   <br />
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "row",
//                       alignItems: "center",
//                       gap: "10px",
//                     }}
//                   >
//                     {imagesPreview.map((image, index) => (
//                       <img
//                         key={index}
//                         src={image}
//                         alt="Preview"
//                         style={{
//                           width: "30px", // Small size
//                           height: "30px", // Small size
//                           objectFit: "cover",
//                           borderRadius: "50%", // Circular shape
//                         }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 <br />

//                 <Button
//                   type="submit"
//                   label="Update"
//                   icon="pi pi-check"
//                   disabled={loading || isSubmitting}
//                   className="p-button-sm"
//                 />
//               </Form>
//             )}
//           </Formik>
//         </Panel>
//       </div>
//     </div>
//   );
// };

// export default UpdateProduct;



import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  updateProduct,
  getProductDetails,
  clearErrors,
} from "../../../actions/productActions";
import { UPDATE_PRODUCT_RESET } from "../../../constants/productConstants";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";
import Sidebar from "../Sidebar";
import { InputTextarea } from "primereact/inputtextarea";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useRef(null);
  let { id } = useParams();
  const { error, isUpdated, loading } = useSelector((state) => state.adminProduct);
  const { product } = useSelector((state) => state.productDetails);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [images, setImages] = useState([]);
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [initialValues, setInitialValues] = useState({
    projectTitle: "",
    type: "",
    description: "",
    price: 0,
  });

  const validationSchema = Yup.object({
    projectTitle: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be positive"),
    type: Yup.string().required("Type is required"),
  });

  useEffect(() => {
    if (product && product._id !== id) {
      dispatch(getProductDetails(id));
    } else {
      setOldImages(product.images);
      setImagesPreview(product.images.map((image) => image.url));

      setInitialValues({
        projectTitle: product.projectTitle,
        description: product.description,
        price: product.price,
        type: product.type,
      });
    }

    if (isUpdated) {
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Product updated successfully",
        life: 3000,
      });
      dispatch({ type: UPDATE_PRODUCT_RESET });
      setTimeout(() => {
        navigate("/admin/listProducts");
      }, 3000);
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
  }, [dispatch, error, isUpdated, navigate, product, id]);

  const submitHandler = (values) => {
    const formData = new FormData();
    formData.set("projectTitle", values.projectTitle);
    formData.set("description", values.description);
    formData.set("price", values.price);
    formData.set("type", values.type);
    images.forEach((image) => {
      formData.append("images", image);
    });

    dispatch(updateProduct(product._id, formData));
  };

  const onChange = (e) => {
    const files = Array.from(e.target.files);
    setImagesPreview([]);
    setImages([]);
    // setOldImages([]);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((oldArray) => [...oldArray, reader.result]);
          setImages((oldArray) => [...oldArray,  reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };


  const toggleSidebar = () => {
    setSidebarVisible((prevState) => !prevState);
  };

  return (
    <div className="layout-wrapper">
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
        <br />
        <Panel header="Update Product">
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitHandler}
          >
            {({ isSubmitting }) => (
              <Form className="p-fluid">
                <div className="field">
                  <label htmlFor="projectTitle">Project Title</label>
                  <Field
                    name="projectTitle"
                    as={InputText}
                    className="p-inputtext-sm block"
                  />
                  <ErrorMessage
                    name="projectTitle"
                    component="small"
                    className="p-error"
                  />
                </div>
                <div className="field">
                  <label htmlFor="description">Description</label>
                  <Field
                    name="description"
                    as={InputTextarea}
                    rows={5}
                    className="p-inputtext-sm block"
                  />
                  <ErrorMessage
                    name="description"
                    component="small"
                    className="p-error"
                  />
                </div>
                <div className="field">
                  <label htmlFor="price">Price</label>
                  <Field
                    name="price"
                    type="number"
                    as={InputText}
                    className="p-inputtext-sm block"
                  />
                  <ErrorMessage
                    name="price"
                    component="small"
                    className="p-error"
                  />
                </div>
                <div className="field">
                  <label htmlFor="type">Type</label>
                  <Field
                    name="type"
                    as={InputText}
                    className="p-inputtext-sm block"
                  />
                  <ErrorMessage
                    name="type"
                    component="small"
                    className="p-error"
                  />
                </div>
                <div className="field">
                  <label htmlFor="images">Images</label>
                  <input
                    type="file"
                    name="images"
                    accept="image/*"
                    multiple
                    onChange={onChange}
                    className="p-inputtext-sm block"
                  />
                  <br />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    {imagesPreview.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt="Preview"
                        style={{
                          width: "30px", // Small size
                          height: "30px", // Small size
                          objectFit: "cover",
                          borderRadius: "50%", // Circular shape
                        }}
                      />
                    ))}
                  </div>
                </div>
                {/* <br /> */}

                <div className="flex gap-4 mt-4">
                <Button
                  type="submit"
                  label="Update"
                  icon="pi pi-check"
                  disabled={loading || isSubmitting}
                  className="p-button-sm"
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
        </Panel>
      </div>
    </div>
  );
};

export default UpdateProduct;



