import React, { useState, useEffect } from 'react';
import { Table, Card } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from "antd";

export default function Organizer() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/organizerDetails');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate pagination
  const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  // Columns configuration for the table
  const columns = [
    {
      title: 'Organizer Name',
      dataIndex: 'fullname',
      key: 'organizerName',
    },
    {
      title: 'Contact Number',
      dataIndex: 'contact_no',
      key: 'contactNumber',
    },
    {
      title: 'Organizer ID',
      dataIndex: 'organizer_id',
      key: 'organizerId',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'More Details',
      key: 'moreDetails',
      render: (text, record) => (
        <Link to={`/OrganizerMoreDetails/${record.organizer_id}`}>  
        
        <Button type="primary">More Details</Button>
       
      
      </Link>
      ),
    },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', width: '80vw',  paddingTop: '25px',margin:'30px' }}>
      <Card style={{ width: '95vw', height: '950vh' }}>
        <h2>Organizer Table</h2>
        <Table dataSource={paginatedData} columns={columns} pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: data.length,
          onChange: handlePageChange,
        }} />
      </Card>
    </div>
  );
}
