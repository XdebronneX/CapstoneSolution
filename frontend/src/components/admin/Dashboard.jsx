// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { viewAllUsers } from "../../actions/userActions";
// import { PanelMenu } from "primereact/panelmenu";
// import { Button } from "primereact/button";
// import "../../assets/css/dashboard.css";

// const Dashboard = () => {
//   const [isSidebarVisible, setSidebarVisible] = useState(true);
//   const dispatch = useDispatch();
//   const { users, loading: loadingUsers } = useSelector(
//     (state) => state.allUsers
//   );

//   useEffect(() => {
//     dispatch(viewAllUsers());
//   }, [dispatch]);

//   const now = new Date();
//   const newlyRegisteredUsers = users.filter((user) => {
//     const registrationDate = new Date(user.createdAt);
//     const diffInDays = (now - registrationDate) / (1000 * 60 * 60 * 24);
//     return diffInDays <= 7;
//   }).length;

//   const items = [
//     {
//       label: "Dashboard",
//       icon: "pi pi-fw pi-home",
//       command: () => {
//         window.location.hash = "/dashboard";
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       },
//     },
//     {
//       label: "Users",
//       icon: "pi pi-fw pi-briefcase",
//       command: () => {
//         window.location.hash = "/users";
//       },
//     },
//     {
//       label: "Products",
//       icon: "pi pi-fw pi-tags",
//       command: () => {
//         window.location.hash = "/products";
//       },
//     },
//     {
//       label: "Orders",
//       icon: "pi pi-fw pi-globe",
//       command: () => {
//         window.location.hash = "/orders";
//       },
//     },
//     {
//       label: "Users",
//       icon: "pi pi-fw pi-briefcase",
//       command: () => {
//         window.location.hash = "/users";
//       },
//     },
//     {
//       label: "Products",
//       icon: "pi pi-fw pi-tags",
//       command: () => {
//         window.location.hash = "/products";
//       },
//     },
//     {
//       label: "Orders",
//       icon: "pi pi-fw pi-globe",
//       command: () => {
//         window.location.hash = "/orders";
//       },
//     },
//     {
//       label: "Users",
//       icon: "pi pi-fw pi-briefcase",
//       command: () => {
//         window.location.hash = "/users";
//       },
//     },
//     {
//       label: "Products",
//       icon: "pi pi-fw pi-tags",
//       command: () => {
//         window.location.hash = "/products";
//       },
//     },
//     {
//       label: "Orders",
//       icon: "pi pi-fw pi-globe",
//       command: () => {
//         window.location.hash = "/orders";
//       },
//     },
//     {
//       label: "Users",
//       icon: "pi pi-fw pi-briefcase",
//       command: () => {
//         window.location.hash = "/users";
//       },
//     },
//     {
//       label: "Products",
//       icon: "pi pi-fw pi-tags",
//       command: () => {
//         window.location.hash = "/products";
//       },
//     },
//     {
//       label: "Orders",
//       icon: "pi pi-fw pi-globe",
//       command: () => {
//         window.location.hash = "/orders";
//       },
//     },
//   ];

//   const toggleSidebar = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

//   return (
    // <div className="layout-wrapper">
    //   <div
    //     className={`layout-sidebar ${isSidebarVisible ? "visible" : "hidden"}`}
    //   >
    //     <PanelMenu className="sidebar-panel" model={items} />
    //   </div>
    //   <div
    //     className={`layout-main ${
    //       isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"
    //     }`}
    //   >
    //     <Button
    //       icon={isSidebarVisible ? "pi pi-times" : "pi pi-bars"}
    //       onClick={toggleSidebar}
    //       className="sidebar-toggle-btn primary-200"
    //     />
    //     <br />
    //     <br />
    //     {/* <h1>Dashboard</h1> */}
    //     <div className="grid">
    //       <div className="col-12 md:col-6 lg:col-3">
    //         <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
    //           <div className="flex justify-content-between mb-3">
    //             <div>
    //               <span className="block text-500 font-medium mb-3">
    //                 Orders
    //               </span>
    //               <div className="text-900 font-medium text-xl">152</div>
    //             </div>
    //             <div
    //               className="flex align-items-center justify-content-center bg-blue-100 border-round"
    //               style={{ width: "2.5rem", height: "2.5rem" }}
    //             >
    //               <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
    //             </div>
    //           </div>
    //           <span className="text-green-500 font-medium">24 new </span>
    //           <span className="text-500">since last visit</span>
    //         </div>
    //       </div>
    //       <div className="col-12 md:col-6 lg:col-3">
    //         <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
    //           <div className="flex justify-content-between mb-3">
    //             <div>
    //               <span className="block text-500 font-medium mb-3">
    //                 Revenue
    //               </span>
    //               <div className="text-900 font-medium text-xl">$2.100</div>
    //             </div>
    //             <div
    //               className="flex align-items-center justify-content-center bg-orange-100 border-round"
    //               style={{ width: "2.5rem", height: "2.5rem" }}
    //             >
    //               <i className="pi pi-map-marker text-orange-500 text-xl"></i>
    //             </div>
    //           </div>
    //           <span className="text-green-500 font-medium">%52+ </span>
    //           <span className="text-500">since last week</span>
    //         </div>
    //       </div>
    //       <div className="col-12 md:col-6 lg:col-3">
    //         <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
    //           <div className="flex justify-content-between mb-3">
    //             <div>
    //               <span className="block text-500 font-medium mb-3">
    //                 Customers
    //               </span>
    //               <div className="text-900 font-medium text-xl">
    //                 {users.length}
    //               </div>
    //             </div>
    //             <div
    //               className="flex align-items-center justify-content-center bg-cyan-100 border-round"
    //               style={{ width: "2.5rem", height: "2.5rem" }}
    //             >
    //               <i className="pi pi-users text-cyan-500 text-xl"></i>
    //             </div>
    //           </div>
    //           <span className="text-green-500 font-medium">
    //             {newlyRegisteredUsers}{" "}
    //           </span>
    //           <span className="text-500">newly registered</span>
    //         </div>
    //       </div>
    //       <div className="col-12 md:col-6 lg:col-3">
    //         <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
    //           <div className="flex justify-content-between mb-3">
    //             <div>
    //               <span className="block text-500 font-medium mb-3">
    //                 Comments
    //               </span>
    //               <div className="text-900 font-medium text-xl">152 Unread</div>
    //             </div>
    //             <div
    //               className="flex align-items-center justify-content-center bg-purple-100 border-round"
    //               style={{ width: "2.5rem", height: "2.5rem" }}
    //             >
    //               <i className="pi pi-comment text-purple-500 text-xl"></i>
    //             </div>
    //           </div>
    //           <span className="text-green-500 font-medium">85 </span>
    //           <span className="text-500">responded</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewAllUsers } from "../../actions/userActions";
import Sidebar from "./Sidebar";
import { Button } from "primereact/button";
import "../../assets/css/dashboard.css";

const Dashboard = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const dispatch = useDispatch();
  const { users, loading: loadingUsers } = useSelector(
    (state) => state.allUsers
  );

  useEffect(() => {
    dispatch(viewAllUsers());
  }, [dispatch]);

  const now = new Date();
  const newlyRegisteredUsers = users.filter((user) => {
    const registrationDate = new Date(user.createdAt);
    const diffInDays = (now - registrationDate) / (1000 * 60 * 60 * 24);
    return diffInDays <= 7;
  }).length;

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="layout-wrapper">
      <div
        className={`${isSidebarVisible ? "visible" : "hidden"}`}
      >
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
          className="absolute top-4 left-4 z-20  primary-200 rounded"
        />
        <br />
        <br />
        <br />
        {/* <h1>Dashboard</h1> */}
        <div className="grid">
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Orders
                  </span>
                  <div className="text-900 font-medium text-xl">152</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-blue-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">24 new </span>
              <span className="text-500">since last visit</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Revenue
                  </span>
                  <div className="text-900 font-medium text-xl">$2.100</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-orange-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">%52+ </span>
              <span className="text-500">since last week</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Customers
                  </span>
                  <div className="text-900 font-medium text-xl">
                    {users.length}
                  </div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-users text-cyan-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">
                {newlyRegisteredUsers}{" "}
              </span>
              <span className="text-500">newly registered</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Comments
                  </span>
                  <div className="text-900 font-medium text-xl">152 Unread</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-purple-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-comment text-purple-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">85 </span>
              <span className="text-500">responded</span>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Orders
                  </span>
                  <div className="text-900 font-medium text-xl">152</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-blue-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">24 new </span>
              <span className="text-500">since last visit</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Revenue
                  </span>
                  <div className="text-900 font-medium text-xl">$2.100</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-orange-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">%52+ </span>
              <span className="text-500">since last week</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Customers
                  </span>
                  <div className="text-900 font-medium text-xl">
                    {users.length}
                  </div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-users text-cyan-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">
                {newlyRegisteredUsers}{" "}
              </span>
              <span className="text-500">newly registered</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Comments
                  </span>
                  <div className="text-900 font-medium text-xl">152 Unread</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-purple-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-comment text-purple-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">85 </span>
              <span className="text-500">responded</span>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Orders
                  </span>
                  <div className="text-900 font-medium text-xl">152</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-blue-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">24 new </span>
              <span className="text-500">since last visit</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Revenue
                  </span>
                  <div className="text-900 font-medium text-xl">$2.100</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-orange-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">%52+ </span>
              <span className="text-500">since last week</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Customers
                  </span>
                  <div className="text-900 font-medium text-xl">
                    {users.length}
                  </div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-users text-cyan-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">
                {newlyRegisteredUsers}{" "}
              </span>
              <span className="text-500">newly registered</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Comments
                  </span>
                  <div className="text-900 font-medium text-xl">152 Unread</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-purple-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-comment text-purple-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">85 </span>
              <span className="text-500">responded</span>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Orders
                  </span>
                  <div className="text-900 font-medium text-xl">152</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-blue-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">24 new </span>
              <span className="text-500">since last visit</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Revenue
                  </span>
                  <div className="text-900 font-medium text-xl">$2.100</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-orange-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">%52+ </span>
              <span className="text-500">since last week</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Customers
                  </span>
                  <div className="text-900 font-medium text-xl">
                    {users.length}
                  </div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-users text-cyan-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">
                {newlyRegisteredUsers}{" "}
              </span>
              <span className="text-500">newly registered</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Comments
                  </span>
                  <div className="text-900 font-medium text-xl">152 Unread</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-purple-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-comment text-purple-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">85 </span>
              <span className="text-500">responded</span>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Orders
                  </span>
                  <div className="text-900 font-medium text-xl">152</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-blue-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">24 new </span>
              <span className="text-500">since last visit</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Revenue
                  </span>
                  <div className="text-900 font-medium text-xl">$2.100</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-orange-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">%52+ </span>
              <span className="text-500">since last week</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Customers
                  </span>
                  <div className="text-900 font-medium text-xl">
                    {users.length}
                  </div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-users text-cyan-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">
                {newlyRegisteredUsers}{" "}
              </span>
              <span className="text-500">newly registered</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Comments
                  </span>
                  <div className="text-900 font-medium text-xl">152 Unread</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-purple-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-comment text-purple-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">85 </span>
              <span className="text-500">responded</span>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Orders
                  </span>
                  <div className="text-900 font-medium text-xl">152</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-blue-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">24 new </span>
              <span className="text-500">since last visit</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Revenue
                  </span>
                  <div className="text-900 font-medium text-xl">$2.100</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-orange-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">%52+ </span>
              <span className="text-500">since last week</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Customers
                  </span>
                  <div className="text-900 font-medium text-xl">
                    {users.length}
                  </div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-users text-cyan-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">
                {newlyRegisteredUsers}{" "}
              </span>
              <span className="text-500">newly registered</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Comments
                  </span>
                  <div className="text-900 font-medium text-xl">152 Unread</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-purple-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-comment text-purple-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">85 </span>
              <span className="text-500">responded</span>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Orders
                  </span>
                  <div className="text-900 font-medium text-xl">152</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-blue-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">24 new </span>
              <span className="text-500">since last visit</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Revenue
                  </span>
                  <div className="text-900 font-medium text-xl">$2.100</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-orange-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">%52+ </span>
              <span className="text-500">since last week</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Customers
                  </span>
                  <div className="text-900 font-medium text-xl">
                    {users.length}
                  </div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-users text-cyan-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">
                {newlyRegisteredUsers}{" "}
              </span>
              <span className="text-500">newly registered</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Comments
                  </span>
                  <div className="text-900 font-medium text-xl">152 Unread</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-purple-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-comment text-purple-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">85 </span>
              <span className="text-500">responded</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
