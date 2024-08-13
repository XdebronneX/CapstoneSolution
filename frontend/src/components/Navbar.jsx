// import React, { useState, useRef } from 'react';
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { Logout } from '../actions/userActions';
// import { Avatar } from "primereact/avatar";
// import { Menubar } from "primereact/menubar";
// import { Menu } from "primereact/menu";
// import { Button } from "primereact/button";
// import imgLogo from '../assets/images/logo.png';

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user } = useSelector((state) => state.authUser);
//   const menuLeft = useRef(null);
//   const [menuVisible, setMenuVisible] = useState(false);

//   const handleLogout = () => {
//     dispatch(Logout());
//     navigate("/");
//   };

//   const items = [
//     {
//       label: 'Home',
//       icon: 'pi pi-home',
//       command: () => {
//         navigate('/');
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       }
//     },
//     {
//       label: 'Technologies',
//       icon: 'pi pi-star',
//       command: () => {
//         navigate('/');
//         setTimeout(() => {
//           document.getElementById('technologies').scrollIntoView({ behavior: 'smooth' });
//         }, 0);
//       }
//     },
//     {
//       label: 'Services',
//       icon: 'pi pi-star',
//       command: () => {
//         navigate('/');
//         setTimeout(() => {
//           document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
//         }, 0);
//       }
//     },
//     {
//       label: 'Contact Us',
//       icon: 'pi pi-envelope',
//       command: () => {
//         navigate('/');
//         setTimeout(() => {
//           document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
//         }, 0);
//       }
//     }
//   ];

//   const itemProfile = [
//     {
//       label: "Settings",
//       icon: "pi pi-cog",
//       command: () => {
//         navigate('/me', {replace: true});
//       }
//     },
//     {
//       label: "Logout",
//       icon: "pi pi-sign-out",
//       command: handleLogout,
//     },
//   ];

//   const start = <img alt="logo" src={imgLogo} height="40" width="40" className="mr-2 rounded-full" />;
//   const end = (
//     <div className="flex align-items-center gap-2">
//       {user ? (
//         <>
//           <Menu model={itemProfile} popup ref={menuLeft} id="popup_menu_left" aria-label="User menu" />
//           <Avatar
//             image={user.avatar && user.avatar.url || "/images/default-avatar.png" }
//             shape="circle"
//             onClick={(event) => {
//               menuLeft.current.toggle(event);
//               setMenuVisible(!menuVisible);
//             }}
//             aria-controls="popup_menu_left"
//             aria-haspopup="true"
//             aria-expanded={menuVisible}
//           />
//         </>
//       ) : (
//         <Button
//           label="Login"
//           className="p-button-link"
//           icon="pi pi-sign-in"
//           onClick={() => navigate("/login")}
//         />
//       )}
//     </div>
//   );

//   return (
//     <div className="card">
//       <Menubar model={items} start={start} end={end} />
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { Logout } from "../actions/userActions";
// import { Avatar } from "primereact/avatar";
// import { Menubar } from "primereact/menubar";
// import { Menu } from "primereact/menu";
// import { Button } from "primereact/button";
// import imgLogo from "../assets/images/logo.png";

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user } = useSelector((state) => state.authUser);
//   const menuLeft = useRef(null);
//   const [menuVisible, setMenuVisible] = useState(false);

//   const handleLogout = () => {
//     dispatch(Logout());
//     navigate("/");
//   };

//   const items = [
//     {
//       label: "Home",
//       icon: "pi pi-home",
//       command: () => {
//         navigate("/");
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       },
//     },
//     {
//       label: "Technologies",
//       icon: "pi pi-star",
//       command: () => {
//         navigate("/");
//         setTimeout(() => {
//           document
//             .getElementById("technologies")
//             .scrollIntoView({ behavior: "smooth" });
//         }, 0);
//       },
//     },
//     {
//       label: "Services",
//       icon: "pi pi-star",
//       command: () => {
//         navigate("/");
//         setTimeout(() => {
//           document
//             .getElementById("services")
//             .scrollIntoView({ behavior: "smooth" });
//         }, 0);
//       },
//     },
//     {
//       label: "Products",
//       icon: "pi pi-star",
//       command: () => {
//         navigate("/products");
//         // setTimeout(() => {
//         //   document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
//         // }, 0);
//       },
//     },
//     {
//       label: "Contact Us",
//       icon: "pi pi-envelope",
//       command: () => {
//         navigate("/");
//         setTimeout(() => {
//           document
//             .getElementById("contact")
//             .scrollIntoView({ behavior: "smooth" });
//         }, 0);
//       },
//     },
//   ];

// const itemProfile = [
//   {
//     label: "Settings",
//     icon: "pi pi-cog",
//     command: () => {
//       navigate("/me", { replace: true });
//     },
//   },
//   {
//     label: "Dashboard",
//     icon: "pi pi-list",
//     // url: "/dashboard",
//     command: () => navigate("/dashboard"),
//   },
//   {
//     label: "Logout",
//     icon: "pi pi-sign-out",
//     command: handleLogout,
//   },
// ];

//   const start = (
//     <img
//       alt="logo"
//       src={imgLogo}
//       height="40"
//       width="40"
//       className="mr-2 rounded-full"
//     />
//   );
//   const end = (
//     <div className="flex align-items-center gap-2">
//       {user ? (
//         <>
//           <Menu
//             model={itemProfile}
//             popup
//             ref={menuLeft}
//             id="popup_menu_left"
//             aria-label="User menu"
//           />
//           <Avatar
//             image={
//               (user.avatar && user.avatar.url) || "/images/default-avatar.png"
//             }
//             shape="circle"
//             onClick={(event) => {
//               menuLeft.current.toggle(event);
//               setMenuVisible(!menuVisible);
//             }}
//             aria-controls="popup_menu_left"
//             aria-haspopup="true"
//             aria-expanded={menuVisible}
//             className="border-2 border-green-500" // Example border color using Tailwind CSS
//           />
//         </>
//       ) : (
//         <Button
//           label="Login"
//           className="p-button-link"
//           icon="pi pi-sign-in"
//           onClick={() => navigate("/login")}
//         />
//       )}
//     </div>
//   );

//   return (
//     <div className="card">
//       <Menubar model={items} start={start} end={end} />
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { Logout } from "../actions/userActions";
// import { Avatar } from "primereact/avatar";
// import { Menubar } from "primereact/menubar";
// import { Menu } from "primereact/menu";
// import { Button } from "primereact/button";
// import { Badge } from 'primereact/badge';
// import imgLogo from "../assets/images/logo.png";

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user } = useSelector((state) => state.authUser);
//   const { cartItems } = useSelector((state) => state.cart);
//   const menuLeft = useRef(null);
//   const [menuVisible, setMenuVisible] = useState(false);

//   const handleLogout = () => {
//     dispatch(Logout());
//     navigate("/");
//   };

//   const items = [
//     { label: "Home", icon: "pi pi-home", command: () => navigate("/") },
//     { label: "Technologies", icon: "pi pi-star", command: () => navigate("/#technologies") },
//     { label: "Services", icon: "pi pi-star", command: () => navigate("/#services") },
//     { label: "Products", icon: "pi pi-star", command: () => navigate("/products") },
//     { label: "Contact Us", icon: "pi pi-envelope", command: () => navigate("/#contact") },
//   ];

//   const itemProfile = [
//     { label: "Settings", icon: "pi pi-cog", command: () => navigate("/me") },
//     { label: "Dashboard", icon: "pi pi-list", command: () => navigate("/dashboard") },
//     { label: "Logout", icon: "pi pi-sign-out", command: handleLogout },
//   ];

//   const start = (
//     <img
//       alt="logo"
//       src={imgLogo}
//       height="40"
//       width="40"
//       className="mr-2 rounded-full"
//     />
//   );

//   const end = (
//     <div className="flex align-items-center gap-2 relative">
//       <div className="relative">
//         <Button
//           icon="pi pi-folder-open"
//           className="p-button-rounded p-button-secondary"
//           onClick={() => navigate("/cart")}
//         />
//         {cartItems.length > 0 && (
//           <Badge
//             value={cartItems.length}
//             severity="danger"
//             className="absolute top-0 right-0"
//           />
//         )}
//       </div>
//       <div className="relative">
//         <Menu
//           model={itemProfile}
//           popup
//           ref={menuLeft}
//           id="popup_menu_left"
//           aria-label="User menu"
//         />
//         <Avatar
//           image={(user && user.avatar && user.avatar.url) || "/images/default-avatar.png"}
//           shape="circle"
//           onClick={(event) => {
//             menuLeft.current.toggle(event);
//             setMenuVisible(!menuVisible);
//           }}
//           aria-controls="popup_menu_left"
//           aria-haspopup="true"
//           aria-expanded={menuVisible}
//           className="border-2 border-green-500"
//         />
//       </div>
//       {/* <div className="relative">
//         <Button
//           icon="pi pi-folder-open"
//           className="p-button-rounded p-button-secondary"
//           onClick={() => navigate("/cart")}
//         />
//         {cartItems.length > 0 && (
//           <Badge
//             value={cartItems.length}
//             severity="danger"
//             className="absolute top-0 right-0"
//           />
//         )}
//       </div> */}
//     </div>
//   );

//   return (
//     <div className="card">
//       <Menubar model={items} start={start} end={end} />
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { Logout } from "../actions/userActions";
// import { Avatar } from "primereact/avatar";
// import { Menubar } from "primereact/menubar";
// import { Menu } from "primereact/menu";
// import { Badge } from "primereact/badge";
// import imgLogo from "../assets/images/logo.png";
// import { Button } from "primereact/button";

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user } = useSelector((state) => state.authUser);
//   const { cartItems } = useSelector((state) => state.cart);
//   const menuLeft = useRef(null);
//   const [menuVisible, setMenuVisible] = useState(false);

//   const handleLogout = () => {
//     dispatch(Logout());
//     navigate("/");
//   };

//   const items = [
//     { label: "Home", icon: "pi pi-home", command: () => navigate("/") },
//     {
//       label: "Technologies",
//       icon: "pi pi-star",
//       command: () => navigate("/#technologies"),
//     },
//     {
//       label: "Services",
//       icon: "pi pi-star",
//       command: () => navigate("/#services"),
//     },
//     {
//       label: "Products",
//       icon: "pi pi-star",
//       command: () => navigate("/products"),
//     },
//     {
//       label: "Contact Us",
//       icon: "pi pi-envelope",
//       command: () => navigate("/#contact"),
//     },
//   ];

//   const itemProfile = user
//     ? [
//         {
//           label: "Settings",
//           icon: "pi pi-cog",
//           command: () => navigate("/me"),
//         },
//         {
//           label: "Dashboard",
//           icon: "pi pi-list",
//           command: () => navigate("/dashboard"),
//         },
//         { label: "Logout", icon: "pi pi-sign-out", command: handleLogout },
//       ]
//     : [];

//   const start = (
//     <img
//       alt="logo"
//       src={imgLogo}
//       height="40"
//       width="40"
//       className="mr-2 rounded-full"
//     />
//   );

//   const end = (
//     <div className="flex items-center gap-4 relative">
//       <div className="relative">
//         <i
//           className="pi pi-calendar p-overlay-badge"
//           style={{ fontSize: "2rem" }}
//         >
//           <Badge value={cartItems.length} severity="danger"></Badge>
//         </i>
//       </div>
//       <div className="relative">
//         <Menu
//           model={itemProfile}
//           popup
//           ref={menuLeft}
//           id="popup_menu_left"
//           aria-label="User menu"
//         />
//         {user ? (
//           <Avatar
//             image={
//               user.avatar && user.avatar.url
//                 ? user.avatar.url
//                 : "/images/default-avatar.png"
//             }
//             shape="circle"
//             onClick={(event) => {
//               menuLeft.current.toggle(event);
//               setMenuVisible(!menuVisible);
//             }}
//             aria-controls="popup_menu_left"
//             aria-haspopup="true"
//             aria-expanded={menuVisible}
//             className="border-2 border-green-500 cursor-pointer"
//           />
//         ) : (
//           <Button
//             label="Login"
//             className="p-button-outlined"
//             icon="pi pi-sign-in"
//             onClick={() => navigate("/login")}
//           />
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="card">
//       <Menubar model={items} start={start} end={end} />
//     </div>
//   );
// };

// export default Navbar;

//** Latest Aug 12 */
// import React, { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { Logout } from "../actions/userActions";
// import { Avatar } from "primereact/avatar";
// import { Menubar } from "primereact/menubar";
// import { Menu } from "primereact/menu";
// import { Badge } from "primereact/badge";
// import imgLogo from "../assets/images/logo.png";
// import { Button } from "primereact/button";

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user } = useSelector((state) => state.authUser);
//   const { cartItems } = useSelector((state) => state.cart);
//   const menuLeft = useRef(null);
//   const [menuVisible, setMenuVisible] = useState(false);

//   const handleLogout = () => {
//     dispatch(Logout());
//     navigate("/");
//   };

// const items = [
//   { label: "Home", icon: "pi pi-home", command: () => navigate("/") },
//   {
//     label: "Technologies",
//     icon: "pi pi-star",
//     command: () => navigate("/#technologies"),
//   },
//   {
//     label: "Services",
//     icon: "pi pi-star",
//     command: () => navigate("/#services"),
//   },
//   {
//     label: "Products",
//     icon: "pi pi-star",
//     command: () => navigate("/products"),
//   },
//   {
//     label: "Contact Us",
//     icon: "pi pi-envelope",
//     command: () => navigate("/#contact"),
//   },
// ];

//   const itemProfile = user
//     ? [
//         {
//           label: "Settings",
//           icon: "pi pi-cog",
//           command: () => navigate("/me"),
//         },
//         {
//           label: "Dashboard",
//           icon: "pi pi-list",
//           command: () => navigate("/dashboard"),
//         },
//         { label: "Logout", icon: "pi pi-sign-out", command: handleLogout },
//       ]
//     : [];

//   const start = (
//     <img
//       alt="logo"
//       src={imgLogo}
//       height="40"
//       width="40"
//       className="mr-2 rounded-full"
//     />
//   );

//   const end = (
//     <div className="flex items-center gap-4 relative">
//       <div className="relative">
//         <i
//           className="pi pi-calendar p-overlay-badge transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-gray-900 cursor-pointer"
//           style={{ fontSize: "2rem" }}
//         >
//           <Badge value={cartItems.length} severity="danger" style={{ fontSize: "0.5rem"}}></Badge>
//         </i>
//       </div>
//       <div className="relative">
//         <Menu
//           model={itemProfile}
//           popup
//           ref={menuLeft}
//           id="popup_menu_left"
//           aria-label="User menu"
//         />
//         {user ? (
//           <Avatar
//             image={
//               user.avatar && user.avatar.url
//                 ? user.avatar.url
//                 : "/images/default-avatar.png"
//             }
//             shape="circle"
//             onClick={(event) => {
//               menuLeft.current.toggle(event);
//               setMenuVisible(!menuVisible);
//             }}
//             aria-controls="popup_menu_left"
//             aria-haspopup="true"
//             aria-expanded={menuVisible}
//             className="border-2 border-green-500 cursor-pointer"
//           />
//         ) : (
//           <Button
//             label="Login"
//             className="p-button-outlined"
//             icon="pi pi-sign-in"
//             onClick={() => navigate("/login")}
//           />
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="card">
//       <Menubar model={items}  start={start} end={end} />
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../actions/userActions";
import { Avatar } from "primereact/avatar";
import { Menubar } from "primereact/menubar";
import { Menu } from "primereact/menu";
import { Badge } from "primereact/badge";
import imgLogo from "../assets/images/logo.png";
import { Button } from "primereact/button";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.authUser);
  const { cartItems } = useSelector((state) => state.cart);
  const menuLeft = useRef(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleLogout = () => {
    dispatch(Logout());
    navigate("/");
  };

  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => {
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    },
    {
      label: "Technologies",
      icon: "pi pi-star",
      command: () => {
        navigate("/");
        setTimeout(() => {
          document
            .getElementById("technologies")
            .scrollIntoView({ behavior: "smooth" });
        }, 0);
      },
    },
    {
      label: "Services",
      icon: "pi pi-star",
      command: () => {
        navigate("/");
        setTimeout(() => {
          document
            .getElementById("services")
            .scrollIntoView({ behavior: "smooth" });
        }, 0);
      },
    },
    {
      label: "Products",
      icon: "pi pi-star",
      command: () => {
        navigate("/products");
      },
    },
    {
      label: "Contact Us",
      icon: "pi pi-envelope",
      command: () => {
        navigate("/");
        setTimeout(() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }, 0);
      },
    },
  ];

  const itemProfile = user
    ? [
        {
          label: "Settings",
          icon: "pi pi-cog",
          command: () => navigate("/me"),
        },
        {
          label: "Dashboard",
          icon: "pi pi-list",
          command: () => navigate("/dashboard"),
        },
        { label: "Logout", icon: "pi pi-sign-out", command: handleLogout },
      ]
    : [];

  const start = (
    <img
      alt="logo"
      src={imgLogo}
      height="40"
      width="40"
      className="mr-2 rounded-full"
    />
  );

  const end = (
    <div className="flex items-center gap-4 relative">
      <div className="relative">
        <i
          className="pi pi-calendar p-overlay-badge transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-gray-900 cursor-pointer"
          style={{ fontSize: "2rem" }}
        >
          <Badge
            value={cartItems.length}
            severity="danger"
            style={{ fontSize: "0.5rem" }}
          ></Badge>
        </i>
      </div>
      <div className="relative">
        <Menu
          model={itemProfile}
          popup
          ref={menuLeft}
          id="popup_menu_left"
          aria-label="User menu"
        />
        {user ? (
          <Avatar
            image={
              user.avatar && user.avatar.url
                ? user.avatar.url
                : "/images/default-avatar.png"
            }
            shape="circle"
            onClick={(event) => {
              menuLeft.current.toggle(event);
              setMenuVisible(!menuVisible);
            }}
            aria-controls="popup_menu_left"
            aria-haspopup="true"
            aria-expanded={menuVisible}
            className="border-2 border-green-500 cursor-pointer"
          />
        ) : (
          <Button
            label="Login"
            className="p-button-outlined"
            icon="pi pi-sign-in"
            onClick={() => navigate("/login")}
          />
        )}
      </div>
    </div>
  );

  // return (
  //   <div className="sticky top-0 z-1 w-full">
  //     <Menubar
  //       model={items}
  //       start={start}
  //       end={end}
  //       style={{
  //         // display: 'flex',
  //         // justifyContent: 'space-between', // Align start and end items to edges
  //         // alignItems: 'center', // Center items vertically
  //         // backgroundColor: "#f4f4f4",
  //         // borderRadius: "8px",
  //         // overflow: "hidden",
  //         // boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
  //         flex: '1 1 auto',
  //         display: 'flex',
  //         justifyContent: 'center'
  //       }}
  //     />
  //   </div>
  // );
  return (
    <div className="sticky top-0 z-1 shadow-md">
    <Menubar
      model={items}
      start={start} // Clear start slot in Menubar
      end={end} // Clear end slot in Menubar
      style={{
        display: "flex",
        alignItems: "center", // Center items vertically
        backgroundColor: "#f4f4f4",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        justifyContent: "center",
        zIndex: 10, // Ensure it stays on top
      }}
    />
  </div>
  );
};

export default Navbar;
