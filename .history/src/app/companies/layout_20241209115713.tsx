import React from 'react';
import Sidebar from '../components/sidebar';

export interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
          <Sidebar />
          <div className='ml-60'></div>
    </>
  );
};

export default Layout;
