import { useState } from 'react';
import React from 'react';
import './LayoutPage.css';
import AppHeader from '../../components/Header/AppHeader';
import AppSlidemenu from '../../components/Slidemenu/AppSlidemenu';
import { Outlet } from 'react-router-dom';
import AppFooter from '../../components/Footer/AppFooter';

const LayoutPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className='layout-body'>
      <div className='header-layoutpage'>
        <AppHeader />
      </div>
      <div className='content-layoutpage'>
        <div
          className={`content-layoutpage__left ${
            collapsed ? 'collapsed' : ''
          }`}
        >
          <AppSlidemenu collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        </div>
        <div className='content-layoutpage__right'>
          <Outlet />
        </div>
      </div>
      {/* <div className='footer-layoutpage'>
        <AppFooter />
      </div> */}
    </div>
  );
};

export default LayoutPage;
