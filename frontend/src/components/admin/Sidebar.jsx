import React from "react";
import { PanelMenu } from "primereact/panelmenu";
import { useNavigate } from "react-router-dom";
import "../../assets/css/sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: "Dashboard",
      icon: "pi pi-fw pi-home",
      command: () => {
        navigate("/dashboard");
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    },
    {
      label: "Products",
      icon: "pi pi-fw pi-box",
      items: [
        {
          label: "Create Product",
          icon: "pi pi-fw pi-plus",
          command: () => {
            navigate("/admin/addProduct");
            window.scrollTo({ top: 0, behavior: "smooth" });
          },
        },
        {
          label: "All Products",
          icon: "pi pi-fw pi-list",
          command: () => {
            navigate("/admin/listProducts");
            window.scrollTo({ top: 0, behavior: "smooth" });
          },
        },
      ],
    },
    {
      label: "Users",
      icon: "pi pi-users",
      command: () => {
        navigate("/admin/all/users");
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    },
  ];

  return (
    <div className="layout-sidebar">
      <PanelMenu className="sidebar-panel" model={items} />
    </div>
  );
};

export default Sidebar;
