import React from 'react';
import SideBar from './SideBar';
import TopBar from './TopBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='rounded-xl h-screen'>
      {/* min-w-full min-h-screen */}
      <TopBar />
      
      <main className='flex flex-row'>
      <SideBar />
        {children}</main>
    </div>
  );
};

export default Layout;
