import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAdminProducts,
  deleteProduct,
  clearErrors,
} from "../../../actions/productActions";
import { DELETE_PRODUCT_RESET } from "../../../constants/productConstants";
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

const ProductsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading, products } = useSelector((state) => state.allProducts);
  const { isDeleted } = useSelector((state) => state.adminProduct);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toast = useRef(null);

  useEffect(() => {
    dispatch(getAdminProducts());
    if (isDeleted) {
      toast.current.show({
        severity: "success",
        summary: "Product Deleted Successfully",
        detail: "Product has been deleted",
        life: 3000,
      });
      dispatch({ type: DELETE_PRODUCT_RESET });
      navigate("/admin/listProducts");
    }
    if (error) {
        toast.current.show({ severity: 'error', summary: 'Error', detail: error, life: 3000 });
        dispatch(clearErrors());
      }
  }, [dispatch, error, navigate, isDeleted]);

  const deleteProductHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(id));
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
            //   className="w-10 shadow-3"
            //   style={{ width: "20px", height: "100px", objectFit: "cover" }}
            className="shadow-2 border-round" style={{ width: '50px' }}
            />
          </div>
        )}
        style={{ width: "200px", height: "130px" }}
      />
    );
  };

  const deleteTemplate = (rowData) => {
    return (
      <div className="flex justify-center">
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => deleteProductHandler(rowData._id)}
        />
      </div>
    );
  };

  const editTemplate = (rowData) => {
    return (
      <div className="flex justify-center">
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-info mr-2"
          onClick={() => navigate(`/product/${rowData._id}`)}
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
          className="sidebar-toggle-btn primary-200"
        />
        <br />
        <br />
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
            <Column field="description" header="Description" sortable />
            <Column field="type" header="Type" sortable />
            <Column field="price" header="Price" sortable />
            <Column
              field="images"
              header="Images"
              body={imageBodyTemplate}
            //   style={{ minWidth: "12rem" }}
            className="product-image block m-auto pb-3"
            />
            <Column
              body={deleteTemplate}
              header="Delete"
              style={{ minWidth: "10rem" }}
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
  );
};

export default ProductsList;
