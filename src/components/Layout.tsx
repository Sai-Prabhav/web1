import React from 'react';
import { Navbar } from './Navbar';
export const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return <div className="min-h-screen bg-[#f5f0ff]">
      <Navbar />
      <main className="w-full pt-20">{children}</main>
    </div>;
};