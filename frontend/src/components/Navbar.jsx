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



import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from '../actions/userActions';
import { Avatar } from "primereact/avatar";
import { Menubar } from "primereact/menubar";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import imgLogo from '../assets/images/logo.png';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.authUser);
  const menuLeft = useRef(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleLogout = () => {
    dispatch(Logout());
    navigate("/");
  };

  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    {
      label: 'Technologies',
      icon: 'pi pi-star',
      command: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('technologies').scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    },
    {
      label: 'Services',
      icon: 'pi pi-star',
      command: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    },
    {
      label: 'Contact Us',
      icon: 'pi pi-envelope',
      command: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  ];

  const itemProfile = [
    {
      label: "Settings",
      icon: "pi pi-cog",
      command: () => {
        navigate('/me', { replace: true });
      }
    },
    {
      label: "Dashboard",
      icon: "pi pi-list",
      // url: "/dashboard",
      command: () => navigate("/dashboard"),
    },
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      command: handleLogout,
    },
  ];

  const start = <img alt="logo" src={imgLogo} height="40" width="40" className="mr-2 rounded-full" />;
  const end = (
    <div className="flex align-items-center gap-2">
      {user ? (
        <>
          <Menu model={itemProfile} popup ref={menuLeft} id="popup_menu_left" aria-label="User menu" />
          <Avatar
            image={user.avatar && user.avatar.url || "/images/default-avatar.png"}
            shape="circle"
            onClick={(event) => {
              menuLeft.current.toggle(event);
              setMenuVisible(!menuVisible);
            }}
            aria-controls="popup_menu_left"
            aria-haspopup="true"
            aria-expanded={menuVisible}
          />
        </>
      ) : (
        <Button
          label="Login"
          className="p-button-link"
          icon="pi pi-sign-in"
          onClick={() => navigate("/login")}
        />
      )}
    </div>
  );

  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
};

export default Navbar;

