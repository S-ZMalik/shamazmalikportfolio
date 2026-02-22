"use client";
import React from "react";
import SmallDevicesSideBar from "@/components/SmallDevicesSideBar";
import WholeContextProvider, { useWholeContext } from "./WholeContext";
import SideBar from "@/components/SideBar";

const ContextWrapper = ({ children }) => {
  return (
    <>
      {/* CONTEXT PROVIDER */}
      <WholeContextProvider>
        <div className="flex  min-h-screen">
          <SideBar />
          {/* SMALL DEVICES SIDE BAR */}
          <SmallDevicesSideBar />

          <div className="flex-1 w-full  overflow-auto">{children}</div>
        </div>
      </WholeContextProvider>
    </>
  );
};

export default ContextWrapper;
