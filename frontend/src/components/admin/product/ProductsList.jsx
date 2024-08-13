// import React, { useEffect, useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {
//   getAdminProducts,
//   clearErrors,
//   deactivatedProduct,
//   activatedProduct,
// } from "../../../actions/productActions";
// import {
//   SOFTDELETE_PRODUCT_RESET,
//   RESTORE_PRODUCT_RESET,
// } from "../../../constants/productConstants";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { InputText } from "primereact/inputtext";
// import { IconField } from "primereact/iconfield";
// import { InputIcon } from "primereact/inputicon";
// import { Carousel } from "primereact/carousel";
// import { Button } from "primereact/button";
// import { Toast } from "primereact/toast";
// import Swal from "sweetalert2";
// import Sidebar from "../Sidebar";
// import { Badge } from "primereact/badge";
// import { Tag } from "primereact/tag";
// const ProductsList = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { error, loading, products } = useSelector(
//     (state) => state.allProducts
//   );
//   const { isSoftDelete, isRestored } = useSelector(
//     (state) => state.adminProduct
//   );
//   const [globalFilterValue, setGlobalFilterValue] = useState("");
//   const [isSidebarVisible, setIsSidebarVisible] = useState(false);
//   const toast = useRef(null);

//   useEffect(() => {
//     dispatch(getAdminProducts());

//     if (isSoftDelete) {
//       toast.current.show({
//         severity: "success",
//         summary: "Product Deactivated Successfully",
//         detail: "Product has been deactivated",
//         life: 3000,
//       });
//       dispatch({ type: SOFTDELETE_PRODUCT_RESET });
//     }

//     if (isRestored) {
//       toast.current.show({
//         severity: "success",
//         summary: "Product Restored Successfully",
//         detail: "Product has been restored",
//         life: 3000,
//       });
//       dispatch({ type: RESTORE_PRODUCT_RESET });
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
//   }, [dispatch, error, navigate, isSoftDelete, isRestored]);

//   const handleActivationToggle = (id, currentActivationStatus) => {
//     Swal.fire({
//       title: `Are you sure you want to ${
//         currentActivationStatus ? "deactivate" : "activate"
//       } this product?`,
//       text: "You can revert this action later!",
//       icon: "info",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: `Yes, ${
//         currentActivationStatus ? "deactivate" : "activate"
//       } it!`,
//     }).then((result) => {
//       if (result.isConfirmed) {
//         dispatch(
//           currentActivationStatus
//             ? deactivatedProduct(id)
//             : activatedProduct(id)
//         )
//           .then(() => {
//             // Additional checks or logic if needed
//           })
//           .catch((err) => {
//             console.error("Failed to update product:", err);
//             toast.current.show({
//               severity: "error",
//               summary: "Error",
//               detail: "Failed to update product. Please try again.",
//               life: 3000,
//             });
//           });
//       }
//     });
//   };

//   const onGlobalFilterChange = (e) => {
//     const value = e.target.value;
//     setGlobalFilterValue(value);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarVisible((prevState) => !prevState);
//   };

//   const renderHeader = () => (
//     <div className="flex flex-wrap gap-2 justify-content-between align-items-center">
//       <h4 className="m-0">List of products</h4>
//       <IconField iconPosition="left">
//         <InputIcon className="pi pi-search" />
//         <InputText
//           value={globalFilterValue}
//           onChange={onGlobalFilterChange}
//           placeholder="Keyword Search"
//         />
//       </IconField>
//     </div>
//   );

//   const imageBodyTemplate = (rowData) => {
//     if (!Array.isArray(rowData.images) || rowData.images.length === 0) {
//       return null;
//     }
//     return (
//       <Carousel
//         value={rowData.images}
//         numVisible={1}
//         numScroll={1}
//         autoplayInterval={3000}
//         itemTemplate={(image) => (
//           <div className="flex justify-content-center">
//             <img
//               src={image.url}
//               alt={rowData.name}
//               className="shadow-2 border-round"
//               style={{ width: "50px" }}
//             />
//           </div>
//         )}
//         style={{ width: "200px", height: "130px" }}
//       />
//     );
//   };

//   // const activationBodyTemplate = (rowData) => {
//   //   return (
//   //     // <Badge
//   //     //   value={rowData.activation ? "Enabled" : "Disabled"}
//   //     //   severity={rowData.activation ? "success" : "danger"}
//   //     //   className="p-mr-2"
//   //     // />
//   //     <Tag className="p-mr-2" icon="pi pi-info-circle" severity={rowData.activation ? "info"}  value={rowData.activation ? "Enabled" : "Disabled"}"></Tag>
//   //   );
//   // };
//   const activationBodyTemplate = (rowData) => {
//     return (
//       <Tag
//         className="p-mr-2"
//         icon="pi pi-info-circle"
//         severity={rowData.activation ? "success" : "danger"}
//         value={rowData.activation ? "Enabled" : "Disabled"}
//         style={{ borderRadius: "8%" }}
//       />
//     );
//   };

//   const activationButtonTemplate = (rowData) => {
//     const isActivated = rowData.activation;

//     return (
//       <Button
//         label={isActivated ? "Disabled" : "Enabled"}
//         icon={isActivated ? "pi pi-ban" : "pi pi-lock-open"}
//         className={`p-button-${isActivated ? "danger" : "success"}`}
//         onClick={() => handleActivationToggle(rowData._id, isActivated)}
//       />
//     );
//   };
//   // const editTemplate = (rowData) => {
//   //   return (
//   //     <div className="flex justify-center">
//   //       <Button
//   //         icon="pi pi-pencil"
//   //         className="p-button-rounded p-button-info mr-2"
//   //         onClick={() => navigate(`/product/${rowData._id}`)}
//   //       />
//   //     </div>
//   //   );
//   // };

//   const editTemplate = (rowData) => {
//     return (
//       <div className="flex justify-center">
//         <Button
//           icon="pi pi-pencil"
//           className="p-button-rounded p-button-info mr-2"
//           onClick={() => navigate(`/product/${rowData._id}`)}
//           disabled={!rowData.activation} // Disable button if activation is false
//         />
//       </div>
//     );
//   };

//   const header = renderHeader();

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
//           className="sidebar-toggle-btn absolute top-4 left-4 z-20  primary-200 rounded "
//         />
//         <div className="mt-6">
//           <div className="card">
//             <DataTable
//               value={products}
//               paginator
//               rows={10}
//               header={header}
//               globalFilter={globalFilterValue}
//               emptyMessage="No products found."
//               loading={loading}
//               responsiveLayout="scroll"
//             >
//               <Column field="projectTitle" header="Name" sortable />
//               <Column field="description" header="Description" sortable />
//               <Column field="type" header="Type" sortable />
//               <Column field="price" header="Price" sortable />
//               <Column
//                 field="images"
//                 header="Images"
//                 body={imageBodyTemplate}
//                 className="product-image block m-auto pb-3"
//               />
//               <Column
//                 field="activation"
//                 header="Status"
//                 body={activationBodyTemplate}
//               />
//               <Column
//                 body={activationButtonTemplate}
//                 style={{ width: "10%" }}
//                 header="Activation"
//               />
//               <Column
//                 body={editTemplate}
//                 header="Edit"
//                 style={{ minWidth: "10rem" }}
//               />
//             </DataTable>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsList;

import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAdminProducts,
  clearErrors,
  deactivatedProduct,
  activatedProduct,
} from "../../../actions/productActions";
import {
  SOFTDELETE_PRODUCT_RESET,
  RESTORE_PRODUCT_RESET,
} from "../../../constants/productConstants";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Swal from "sweetalert2";
import Sidebar from "../Sidebar";
import { Tag } from "primereact/tag";
import { Badge } from "primereact/badge";
const ProductsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading, products } = useSelector(
    (state) => state.allProducts
  );
  const { isSoftDelete, isRestored } = useSelector(
    (state) => state.adminProduct
  );
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toast = useRef(null);

  useEffect(() => {
    dispatch(getAdminProducts());

    if (isSoftDelete) {
      toast.current.show({
        severity: "success",
        summary: "Product Deactivated Successfully",
        detail: "Product has been deactivated",
        life: 3000,
      });
      dispatch({ type: SOFTDELETE_PRODUCT_RESET });
    }

    if (isRestored) {
      toast.current.show({
        severity: "success",
        summary: "Product Restored Successfully",
        detail: "Product has been restored",
        life: 3000,
      });
      dispatch({ type: RESTORE_PRODUCT_RESET });
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
  }, [dispatch, error, navigate, isSoftDelete, isRestored]);

  const handleActivationToggle = (id, currentActivationStatus) => {
    Swal.fire({
      title: `Are you sure you want to ${
        currentActivationStatus ? "deactivate" : "activate"
      } this product?`,
      text: "You can revert this action later!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, ${
        currentActivationStatus ? "deactivate" : "activate"
      } it!`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          currentActivationStatus
            ? deactivatedProduct(id)
            : activatedProduct(id)
        )
          .then(() => {
            // Additional checks or logic if needed
          })
          .catch((err) => {
            console.error("Failed to update product:", err);
            toast.current.show({
              severity: "error",
              summary: "Error",
              detail: "Failed to update product. Please try again.",
              life: 3000,
            });
          });
      }
    });
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    setGlobalFilterValue(value);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  const renderHeader = () => (
    <div className="flex flex-wrap gap-2 justify-content-between align-items-center">
      <h4 className="m-0">List of products</h4>
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
          placeholder="Keyword Search"
        />
      </IconField>
    </div>
  );

  const imageBodyTemplate = (rowData) => {
    if (!Array.isArray(rowData.images) || rowData.images.length === 0) {
      return null;
    }
    return (
      <Carousel
        value={rowData.images}
        numVisible={1}
        numScroll={1}
        autoplayInterval={3000}
        itemTemplate={(image) => (
          <div className="flex justify-content-center">
            <img
              src={image.url}
              alt={rowData.name}
              className="shadow-2 border-round"
              style={{ width: "50px" }}
            />
          </div>
        )}
        style={{ width: "200px", height: "130px" }}
      />
    );
  };

  const activationBodyTemplate = (rowData) => {
    return (
      <Tag
        className="p-mr-2"
        icon="pi pi-info-circle"
        severity={rowData.activation ? "success" : "danger"}
        value={rowData.activation ? "Enabled" : "Disabled"}
        // style={{ borderRadius: "8%" }}
      />
    );
  };

  const activationButtonTemplate = (rowData) => {
    const isActivated = rowData.activation;

    return (
      <Button
        label={isActivated ? "Disabled" : "Enabled"}
        icon={isActivated ? "pi pi-ban" : "pi pi-lock-open"}
        className={`p-button-${isActivated ? "danger" : "success"}`}
        onClick={() => handleActivationToggle(rowData._id, isActivated)}
      />
    );
  };

  const editTemplate = (rowData) => {
    return (
      <div className="flex justify-center">
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-info mr-2"
          onClick={() => navigate(`/product/${rowData._id}`)}
          disabled={!rowData.activation} // Disable button if activation is false
        />
      </div>
    );
  };

  const header = renderHeader();

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
          className="sidebar-toggle-btn absolute top-4 left-4 z-20  primary-200 rounded "
        />
        <div className="mt-6">
          <div className="card">
            <DataTable
              value={products}
              paginator
              rows={10}
              header={header}
              globalFilter={globalFilterValue}
              emptyMessage="No products found."
              loading={loading}
              responsiveLayout="scroll"
            >
              <Column field="projectTitle" header="Name" sortable />
              {/* <Column field="description" header="Description" sortable /> */}
              <Column
                field="description"
                header="Description"
                sortable
                bodyStyle={{
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                  maxWidth: "600px",
                }}
              />
              <Column field="type" header="Type" sortable />
              <Column field="price" header="Price" sortable />
              <Column
                field="images"
                header="Images"
                body={imageBodyTemplate}
                // className="product-image block m-auto pb-3"
              />
              <Column
                field="activation"
                header="Status"
                body={activationBodyTemplate}
              />
              <Column
                body={activationButtonTemplate}
                style={{ width: "10%" }}
                header="Activation"
              />
              <Column
                body={editTemplate}
                header="Edit"
                style={{ minWidth: "10rem" }}
              />
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
