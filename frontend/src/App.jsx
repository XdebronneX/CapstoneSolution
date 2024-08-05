import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import NavBar from "./components/Navbar";
import Login from "./components/users/Login";
import ForgotPassword from "./components/users/ForgotPassword";
import Register from "./components/users/Register";
import NewPassword from "./components/users/NewPassword";
import store from "./store"
import { LoadUser } from './actions/userActions';
import ChangePassword from "./components/users/ChangePassword";
import ProtectedRoute from "./components/route/ProtectedRoute";
import Settings from "./components/users/Settings";
import UpdateProfile from "./components/users/UpdateProfile";

function App() {
  useEffect(() => {
    store.dispatch(LoadUser())
  }, [])
  return (
    <div className="App">
      <NavBar />
      <br />
      <Routes>
        <Route path="/" element={<Homepage />} exact={true} />
        <Route path="/register" element={<Register />} exact={true} />
        <Route path="/login" element={<Login />} exact={true} />
        <Route
          path="/me"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
          exact={true}
        />
        <Route
          path="/me/update"
          element={
            <ProtectedRoute>
              <UpdateProfile />
            </ProtectedRoute>
          }
          exact={true}
        />
        <Route
          path="/me/changePassword"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
          // exact={true}
        />
        <Route
          path="/forgotPassword"
          element={<ForgotPassword />}
          // exact={true}
        />
        <Route
          path="/password/reset/:token"
          element={<NewPassword />}
          // exact={true}
        />
      </Routes>
    </div>
  );
}

export default App;
