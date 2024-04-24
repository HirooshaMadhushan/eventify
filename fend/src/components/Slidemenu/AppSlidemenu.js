import React, { useState } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function AppSlidemenu() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className='AppSlidemenu' style={{ position: 'fixed', top: 70, bottom: 0, left: 0, width: collapsed ? '80px' : '220px', backgroundColor: '#4b0082', overflowY: 'auto' }}>
      <div style={{ color: '#f7eeff', padding: '10px', textAlign: 'center', borderTop: '1px solid #f7eeff' }}>
        {collapsed ? <MenuUnfoldOutlined onClick={toggleCollapsed} /> : <MenuFoldOutlined onClick={toggleCollapsed} />}
        <hr />
      </div>
      <Menu mode="inline" style={{ flex: 1, fontSize: 'large', backgroundColor: '#4b0082', paddingLeft: '24px' }}>
        <Link to="/appstart" style={{ textDecoration: 'none' }}>
          <Menu.Item className="menuItem" style={{ color: '#f7eeff', backgroundColor: 'transparent', marginBottom: '10px' }} key="home" icon={<HomeOutlined />} activeStyle={{ backgroundColor: '#33004d' }}>
            {!collapsed && 'Dashboard'}
          </Menu.Item>
        </Link>
        <Link to="/Organizer" style={{ textDecoration: 'none' }}>
          <Menu.Item className="menuItem" style={{ color: '#f7eeff', backgroundColor: 'transparent', marginBottom: '10px' }} key="organizer" icon={<AppstoreOutlined />} activeStyle={{ backgroundColor: '#33004d' }}>
            {!collapsed && 'Organizer Details'}
          </Menu.Item>
        </Link>
        <Link to="/ticket" style={{ textDecoration: 'none' }}>
          <Menu.Item className="menuItem" style={{ color: '#f7eeff', backgroundColor: 'transparent', marginBottom: '10px' }} key="ticket" icon={<HomeOutlined />} activeStyle={{ backgroundColor: '#33004d' }}>
            {!collapsed && 'Completed Event'}
          </Menu.Item>
        </Link>
        <Link to="/PendingEvent" style={{ textDecoration: 'none' }}>
          <Menu.Item className="menuItem" style={{ color: '#f7eeff', backgroundColor: 'transparent', marginBottom: '10px' }} key="pendingEvent" icon={<AppstoreOutlined />} activeStyle={{ backgroundColor: '#33004d' }}>
            {!collapsed && 'Pending Event'}
          </Menu.Item>
        </Link>
        <Link to="/Home" style={{ textDecoration: 'none' }}>
          <Menu.Item className="menuItem" style={{ color: '#f7eeff', backgroundColor: 'transparent', marginBottom: '10px' }} key="home" icon={<AppstoreOutlined />} activeStyle={{ backgroundColor: '#33004d' }}>
            {!collapsed && 'Home'}
          </Menu.Item>
        </Link>
      </Menu>
    </div>
  );
}
