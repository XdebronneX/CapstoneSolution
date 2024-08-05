import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import Loader from "../Loader";

const Settings = () => {
  const { user, loading } = useSelector((state) => state.authUser);

  return (
    <div className="flex align-items-center justify-content-center">
      {loading ? (
        <Loader />
      ) : (
        <Card className="w-full lg:w-6 p-4 shadow-2 border-round bg-white">
          <div className="flex flex-column align-items-center">
            <Avatar 
              image={user.avatar ? user.avatar.url : "/images/default-avatar.png"} 
              shape="circle" 
              className="mb-4" 
              size="xlarge"
            />
            <h2 className="text-3xl font-semibold mb-2">Account</h2>
            <p className="text-lg text-gray-500 mb-6">Manage your profile information and account settings</p>
            
            <div className="w-full">
              <div className="flex flex-column lg:flex-row lg:justify-between mb-4">
                <span className="font-bold text-lg">Firstname:</span>
                <span className="text-lg">{user.firstname}</span>
              </div>
              <div className="flex flex-column lg:flex-row lg:justify-between mb-4">
                <span className="font-bold text-lg">Lastname:</span>
                <span className="text-lg">{user.lastname}</span>
              </div>
              <div className="flex flex-column lg:flex-row lg:justify-between mb-4">
                <span className="font-bold text-lg">Email:</span>
                <span className="text-lg">{user.email}</span>
              </div>
            </div>
            
            <div className="flex flex-column lg:flex-row gap-4 mt-6 w-full">
              <Link to="/me/update" className="w-full no-underline">
                <Button
                  label="Edit Profile"
                  icon="pi pi-user-edit"
                  className="w-full p-button-secondary p-mr-2"
                />
              </Link>
              <Link to="/me/changePassword" className="w-full no-underline">
                <Button
                  label="Change Password"
                  icon="pi pi-key"
                  className="w-full p-button-secondary p-mr-2"
                />
              </Link>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Settings;
