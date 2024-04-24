import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'antd';
import { HomeOutlined, AppstoreOutlined } from '@ant-design/icons';
import axios from 'axios';
import './AppContent.css';
import Eventchart from '../graphs/Eventchart';

const { Meta } = Card;

export default function AppContent() {
    const [totalEvents, setTotalEvents] = useState(0);
    const [inprogress, setInprogress] = useState(0);
    const [completedEvent, setCompletedEvent] = useState(0);
    const [weekEvent, setWeekEvent] = useState(0);

    useEffect(() => {
        fetchTotalEvents();
        fetchInprogress();
        fetchCompletedEvent();
        fetchWeekEvent();
    }, []);

    const fetchData = async (url, setter) => {
        try {
            const response = await axios.get(url);
            setter(response.data[0]);
        } catch (error) {
            console.error(`Error fetching data from ${url}:`, error);
        }
    };

    const fetchTotalEvents = () => fetchData('http://localhost:8000/data', setTotalEvents);
    const fetchInprogress = () => fetchData('http://localhost:8000/inprogressEvent', setInprogress);
    const fetchCompletedEvent = () => fetchData('http://localhost:8000/completedEvent', setCompletedEvent);
    const fetchWeekEvent = () => fetchData('http://localhost:8000/weekEvent', setWeekEvent);

    const cards = [
        { title: 'Total Event Listed', text: totalEvents.totalevent, color: 'linear-gradient(135deg, #8A2BE2, #BA55D3)', icon: <AppstoreOutlined style={{ color: '#fff', fontSize: '50px' }} /> },
        { title: 'Events in Queue', text: inprogress.inprogressEvent, color: 'linear-gradient(135deg, #8A2BE2, #BA55D3)', icon: <HomeOutlined style={{ color: '#fff', fontSize: '50px' }} /> },
        { title: 'Events Completed', text: completedEvent.completedEvent, color: 'linear-gradient(135deg, #8A2BE2, #BA55D3)', icon: <AppstoreOutlined style={{ color: '#fff', fontSize: '50px' }} /> },
        { title: 'New Events....', text: weekEvent.weekEvent, color: 'linear-gradient(135deg, #8A2BE2, #BA55D3)',icon: <HomeOutlined style={{ color: '#fff', fontSize: '50px' }} /> }
    ];

    return (
        
        <div className='main' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '10px',color:'ActiveCaption' }}>
            <div className="container" style={{ marginBottom: '0px' }}>
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <Card className="outer-card" bordered={false} style={{ background: '	#F0F0F0', padding: '5px' }}>
                            <Row gutter={[16, 16]}>
                                {cards.map((card, index) => (
                                    <Col key={index} span={6}>
                                        <Card
                                            bordered={false}
                                            className="custom-card"
                                            style={{ background: card.color }}
                                        >
                                            <Row>
                                                <Col span={8} style={{ textAlign: 'center' }}>
                                                    <h1>{card.icon}</h1>
                                                </Col>
                                                <Col span={16}>
                                                    <div style={{ textAlign: 'center' }}>
                                                        <h7 style={{ marginBottom: '0', color: '#fff', padding: '3px' }}>{card.title}</h7>
                                                        <h2 style={{ marginTop: '4px', color: '#fff' }}>{card.text}</h2>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div style={{ width: '100%' }}>
                <Eventchart />
            </div>
        </div>
        
    );
}

// import React, { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// import './gallery.css';
// import Admingallery from './admingallery';
// import CompletedGallery from './completedGallery';

// export default function Gallery() {
//     const [totalEvents, setTotalEvents] = useState(0);

//     useEffect(() => {
//         fetchTotalEvents();
//     }, []);

//     const fetchTotalEvents = async () => {
//         try {
//             const response = await axios.get('http://localhost:8000/data');
//             setTotalEvents(response.data[0].totalevent );
//         } catch (error) {
//             console.error('Error fetching total events:', error);
//         }
//     };

//     const [inprogress, setInprogress] = useState(0);

//     useEffect(() => {
//         fetchInprogress();
//     }, []);

//     const fetchInprogress = async () => {
//         try {
//             const response = await axios.get('http://localhost:8000/inprogressEvent');
//             setInprogress(response.data[0].inprogressEvent );
//         } catch (error) {
//             console.error('Error fetching total events:', error);
//         }
//     };

//     const [completedEvent, setcompletedEvent] = useState(0);

//     useEffect(() => {
//         fetchcompletedEvent();
//     }, []);

//     const fetchcompletedEvent = async () => {
//         try {
//             const response = await axios.get('http://localhost:8000/completedEvent');
//             setcompletedEvent(response.data[0].completedEvent );
//         } catch (error) {
//             console.error('Error fetching completedEvent events:', error);
//         }
//     };

//     const [weekEvent, setweekEvent] = useState(0);

//     useEffect(() => {
//         fetchweekEvent();
//     }, []);

//     const fetchweekEvent = async () => {
//         try {
//             const response = await axios.get('http://localhost:8000/weekEvent');
//             setweekEvent(response.data[0].weekEvent);

//         } catch (error) {
//             console.error('Error fetching weekEvent:', error);
//         }
//     };

//     const cards = [
//         { title: 'Total Event Listed', text: `${totalEvents}` },
//         { title: 'Events in Queue', text:  `${inprogress}` },
//         { title: 'Events Completed', text:  `${completedEvent} ` },
//         { title: 'Event added in this week', text: `${weekEvent}`}
//     ];

//     return (
//         <div className='main'>
//             <div className="container">
//                 <Row>
//                     {cards.map((card, index) => (
//                         <Col key={index} md={3}>
//                             <Card bg="primary" text="white" className="mb-4">
//                                 <Card.Body className="text-center">
//                                     <Card.Title>{card.title}</Card.Title>
//                                     <Card.Text>{card.text}</Card.Text>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//             </div>
//             <div className="button">
//                 <Link to="/completed" className='btn btn-success'>Completed</Link>
//                 <Link to="/pending" className='btn btn-success'>Pending</Link>
//             </div>
//             <CompletedGallery />
//         </div>
//     );
// }




// // import React from 'react'
// // import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
// // import { Avatar, Card } from 'antd';

// // const { Meta } = Card;

// // export default function Content() {
// //   return (
// //     <Card
// //     style={{ width: 300 }}
// //     cover={
// //       <img
// //         alt="example"
// //         src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
// //       />
// //     }
// //     actions={[
// //       <SettingOutlined key="setting" />,
// //       <EditOutlined key="edit" />,
// //       <EllipsisOutlined key="ellipsis" />,
// //     ]}
// //   >
// //     <Meta
// //       avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
// //       title="Card title"
// //       description="This is the description"
// //     />
// //   </Card>
// //   )
// // }
