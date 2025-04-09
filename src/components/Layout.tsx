import React from "react";
import { Navbar } from "./Navbar";
export const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="w-full">{children}</main>
    </div>;
};