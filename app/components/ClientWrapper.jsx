// components/ClientWrapper.js
"use client";
import { ToastContainer } from "react-toastify";

export default function ClientWrapper({ children }) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}
