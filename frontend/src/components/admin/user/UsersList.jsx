// import React, { useState, useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { viewAllUsers, deactivatedUser, activatedUser, clearErrors } from "../../actions/userActions";
// import { RESTORE_USER_RESET, SOFTDELETE_USER_RESET } from "../../constants/userConstants";
// import { Toast } from "primereact/toast";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { Button } from "primereact/button";
// import Swal from "sweetalert2";
// import Sidebar from "./Sidebar";

// const UsersList = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const toast = useRef(null);
//   const { users, loading, error } = useSelector((state) => state.allUsers);
//   const { isSoftDelete, isRestored } = useSelector((state) => state.userDeprovision);
//   const [isSidebarVisible, setSidebarVisible] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

//   useEffect(() => {
//     dispatch(viewAllUsers());
//   }, [dispatch]);

//   useEffect(() => {
//     if (isSoftDelete || isRestored) {
//       toast.current.show({
//         severity: "success",
//         summary: "Success",
//         detail: "User updated successfully!",
//         life: 3000,
//       });
//       setTimeout(() => {
//         navigate("/me");
//         dispatch({ type: SOFTDELETE_USER_RESET });
//         dispatch({ type: RESTORE_USER_RESET });
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
//   }, [dispatch, isSoftDelete, isRestored, error, navigate]);

//   const handleActivationToggle = (id, currentActivationStatus) => {
//     Swal.fire({
//         title: `Are you sure you want to ${currentActivationStatus ? 'deactivate' : 'activate'} this user?`,
//         text: "You can revert this action later!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: `Yes, ${currentActivationStatus ? 'deactivate' : 'activate'} it!`,
//     }).then((result) => {
//         if (result.isConfirmed) {
//             dispatch(currentActivationStatus ? deactivatedUser(id) : activatedUser(id))
//                 .then(() => {
//                     // Additional checks or logic if needed
//                 })
//                 .catch(err => {
//                     console.error("Failed to update user:", err);
//                     toast.current.show({
//                         severity: "error",
//                         summary: "Error",
//                         detail: "Failed to update user. Please try again.",
//                         life: 3000,
//                     });
//                 });
//         }
//     });
// };

//   const activationBodyTemplate = (rowData) => {
//     return rowData.activation ? "Activated" : "Deactivated";
//   };

//   const actionBodyTemplate = (rowData) => {
//     const isActivated = rowData.activation;

//     return (
//       <Button
//         label={isActivated ? "Deactivate" : "Activate"}
//         icon={isActivated ? "pi pi-lock" : "pi pi-lock-open"}
//         className={`p-button-${isActivated ? "danger" : "success"}`}
//         onClick={() => handleActivationToggle(rowData._id, isActivated)}
//       />
//     );
//   };

//   return (
//     <div className="layout-wrapper">
//       <Toast ref={toast} />
//       <div className={`${isSidebarVisible ? "visible" : "hidden"}`}>
//         <Sidebar />
//       </div>
//       <div
//         className={`layout-main ${isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"}`}
//       >
//         <Button
//           icon={isSidebarVisible ? "pi pi-times" : "pi pi-bars"}
//           onClick={toggleSidebar}
//           className="sidebar-toggle-btn primary-200"
//         />
//         <br />
//         <br />
//         <h1>Users</h1>
//         <div className="grid">
//           <DataTable value={users} loading={loading} responsiveLayout="scroll">
//             <Column field="firstname" header="First Name" />
//             <Column field="lastname" header="Last Name" />
//             <Column field="role" header="Role" />
//             <Column field="activation" header="Status " body={activationBodyTemplate} />
//             <Column body={actionBodyTemplate} header="Actions" />
//           </DataTable>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UsersList;

import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  viewAllUsers,
  deactivatedUser,
  activatedUser,
  clearErrors,
} from "../../../actions/userActions";
import {
  RESTORE_USER_RESET,
  SOFTDELETE_USER_RESET,
} from "../../../constants/userConstants";
import { Toast } from "primereact/toast";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import { InputText } from "primereact/inputtext";
import { InputIcon } from "primereact/inputicon";
import { IconField } from "primereact/iconfield";
import Swal from "sweetalert2";
import Sidebar from "../Sidebar";
import { FilterMatchMode } from "primereact/api";
import Loader from "../../Loader";
import { Tag } from "primereact/tag";

const UsersList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useRef(null);
  const { users, loading, error } = useSelector((state) => state.allUsers);
  const { isSoftDelete, isRestored } = useSelector(
    (state) => state.userDeprovision
  );
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    createdAt: { value: null, matchMode: FilterMatchMode.DATE_IS },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    dispatch(viewAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (isSoftDelete || isRestored) {
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "User updated successfully!",
        life: 3000,
      });
        dispatch(viewAllUsers())
        dispatch({ type: SOFTDELETE_USER_RESET });
        dispatch({ type: RESTORE_USER_RESET });
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
  }, [dispatch, isSoftDelete, isRestored, error, navigate]);

  const handleActivationToggle = (id, currentActivationStatus) => {
    Swal.fire({
      title: `Are you sure you want to ${
        currentActivationStatus ? "deactivate" : "activate"
      } this user?`,
      text: "You can revert this action later!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, ${
        currentActivationStatus ? "deactivate" : "activate"
      } it!`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          currentActivationStatus ? deactivatedUser(id) : activatedUser(id)
        )
          .then(() => {
            // Additional checks or logic if needed
          })
          .catch((err) => {
            console.error("Failed to update user:", err);
            toast.current.show({
              severity: "error",
              summary: "Error",
              detail: "Failed to update user. Please try again.",
              life: 3000,
            });
          });
      }
    });
  };

  const activationBodyTemplate = (rowData) => {
    return (
      <Tag
        className="p-mr-1"
        icon="pi pi-info-circle"
        severity={rowData.activation ? "success" : "danger"}
        value={rowData.activation ? "Activated" : "Deactivated"}
        // style={{ borderRadius: "10%", display: "flex", alignItems: "center" }}
      />
    );
  };

  const roleBadgeTemplate = (rowData) => {
    const role = rowData.role;
    let badgeClass = "";

    if (role === "admin") {
      badgeClass = "bg-green-900 text-white";
    } else if (role === "user") {
      badgeClass = "bg-blue-500 text-white";
    } else {
      badgeClass = "p-badge-secondary";
    }

    return <Badge value={role} className={badgeClass} />;
  };

  const activationButtonTemplate = (rowData) => {
    const isActivated = rowData.activation;

    return (
      <Button
        label={isActivated ? "Deactivate" : "Activate"}
        icon={isActivated ? "pi pi-lock" : "pi pi-lock-open"}
        className={`p-button-${isActivated ? "danger" : "success"}`}
        onClick={() => handleActivationToggle(rowData._id, isActivated)}
      />
    );
  };

  const editTemplate = (rowData) => {
    return (
      <Button
        icon="pi pi-pencil"
        className="p-button-sm p-button-info"
        onClick={() => navigate(`/admin/users/${rowData._id}`)}
      />
    );
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      global: { ...prevFilters.global, value },
    }));
    setGlobalFilterValue(value);
  };

  const renderHeader = () => (
    <div className="flex flex-wrap gap-2 justify-content-between align-items-center">
      <h4 className="m-0">List of users</h4>
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

  const formatDate = (value) => {
    const date = new Date(value);
    if (!isNaN(date.getTime())) {
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      });
    }

    return value;
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
          // className="sidebar-toggle-btn primary-200"
          className="absolute top-4 left-4 z-20  primary-200 rounded"
        />
       <div className="mt-6"> 
        <div className="card">
          <DataTable
            value={users.filter(
              (user) =>
                (user.firstname &&
                  user.firstname
                    .toLowerCase()
                    .includes(globalFilterValue.toLowerCase())) ||
                (user.lastname &&
                  user.lastname
                    .toLowerCase()
                    .includes(globalFilterValue.toLowerCase()))
            )}
            loading={loading}
            header={renderHeader()}
            paginator
            rows={rows}
            first={first}
            onPage={(e) => {
              setFirst(e.first);
              setRows(e.rows);
            }}
            currentPageReportTemplate="{first} to {last} of {totalRecords}"
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            rowsPerPageOptions={[10, 25, 50]}
            scrollable
            scrollHeight="600px"
            className="p-datatable-striped"
            emptyMessage="No users found."
          >
            <Column
              field="createdAt"
              header="Date Registered"
              sortable
              body={(rowData) => formatDate(rowData.createdAt)}
              style={{ width: "20%" }}
            />
            <Column field="firstname" header="First Name" />
            <Column field="lastname" header="Last Name" />
            <Column field="role" header="Role" body={roleBadgeTemplate} />
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
            <Column body={editTemplate} style={{ width: "10%" }} header="Edit" />
          </DataTable>
        </div>
      </div>
    </div>
  </div>
  );
};

export default UsersList;

