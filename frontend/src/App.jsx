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
import Dashboard from "./components/admin/Dashboard";
import UsersList from "./components/admin/user/UsersList";
import UpdateUser from "./components/admin/user/UpdateUser";
import NewProduct from "./components/admin/product/NewProduct";
import ProductsList from "./components/admin/product/ProductsList";
import UpdateProduct from "./components/admin/product/UpdateProduct";
import Products from "./components/products/Products";
import ProductDetails from "./components/products/ProductDetails";
import NotFound from "./components/NotFound";

function App() {
  useEffect(() => {
    store.dispatch(LoadUser())
  }, [])
  return (
    <div className="App">
      <NavBar />
      <br />
      <Routes>
      <Route path="*" element={<NotFound />} exact={true} />
        <Route path="/" element={<Homepage />} exact={true} />
        <Route path='/products' element={<Products />} exact='true' />
        <Route path="/singleProduct/:id" element={<ProductDetails />} exact="true" />
        <Route path="/register" element={<Register />} exact={true} />
        <Route path="/login" element={<Login />} exact={true} />
        <Route path="/dashboard" element={<ProtectedRoute isAdmin={true}><Dashboard /></ProtectedRoute>} />
        <Route
          path="/admin/all/users"
          element={
            <ProtectedRoute isAdmin={true}>
              <UsersList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users/:id"
          element={
            <ProtectedRoute isAdmin={true}>
              <UpdateUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/addProduct"
          element={
            <ProtectedRoute isAdmin={true}>
              <NewProduct />
            </ProtectedRoute>
          }
        />
        <Route path="/admin/listProducts" element={<ProtectedRoute isAdmin={true} > <ProductsList /> </ProtectedRoute>} />
        <Route path="/product/:id" element={<ProtectedRoute isAdmin={true} > <UpdateProduct /> </ProtectedRoute>} />
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
