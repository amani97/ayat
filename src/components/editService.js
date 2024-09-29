import Chat from "../assets/ic_chat.svg";
import EditServices from "./edit";
import Head from "../assets/head.svg";
import Header from "../assets/header.svg";
import Logo from "../assets/LOGO.webp";
import MyOrder from "../assets/ic_my_order.svg";
import Notification from "../assets/notification.png";
import React from "react";
import Sidebar from "./sidebar";
import User from "../assets/ic_user.svg";

const AddNewServices = () => {

  return (
    <div className="flex flex-col h-screen bg-gray-100 px-6">
      <div className="flex justify-between my-3 ml-6">
        <img src={Logo} alt="log" />
        <div className="flex">
          <img
            className="rounded-full bg-white p-3 w-12 h-12"
            src={Chat}
            alt="log"
          />
          <img
            className="rounded-full bg-white p-3  w-12 h-12 mx-2"
            src={Notification}
            alt="log"
          />
          <img
            className="rounded-full bg-white p-3  w-12 h-12 mx-1"
            src={User}
            alt="log"
          />
        </div>
      </div>
      <div className="flex">
        <Sidebar />

        <main className="flex-1 px-6 flex flex-col space-y-6">
          <div className="flex space-x-12">
            <div className="flex-1">
              <nav className="text-gray-500 mb-4">
                Home &gt; Profile &gt; Services
              </nav>
             
             <EditServices className="w-3/4"/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};



export default AddNewServices;
