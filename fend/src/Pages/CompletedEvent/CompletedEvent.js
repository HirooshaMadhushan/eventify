import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

export default function CompletedEvent() {
    const [exampleEventGalleries, setExampleEventGalleries] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/completedGallery');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(response);
            setExampleEventGalleries(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleViewMore = () => {
        setShowAll(true);
    };

    const handleShowLess = () => {
        setShowAll(false);
    };

    return (
        <div className='main' style={{margin:'30px'}}>
            <div className="gallery-container" style={{ paddingBottom: '100px' }}>
                <Row gutter={[16, 16]}>
                    {exampleEventGalleries.slice(0, showAll ? exampleEventGalleries.length : 3).map((gallery, index) => (
                        <Col key={index} xs={24} sm={12} md={8}>
                            <Card
                                hoverable
                                style={{ width: '85%' }}
                                cover={<img alt="example" src="https://glenreceptions.com/wp-content/uploads/2020/10/corporate-events-1200x801.jpg" />}
                                actions={[
                                    <Link to={`/EventDetails/${gallery.event_id}`}>Details</Link> 
                                ]}
                            >
                                <Meta
                                    title={gallery.event_name}
                                    description={gallery.venue}
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>
                {exampleEventGalleries.length > 3 && (
                    <div className="view-button" style={{ paddingTop: '10px', alignItems: 'right' }}>
                        {showAll ? (
                            <Button onClick={handleShowLess}>Show Less</Button>
                        ) : (
                            <Button onClick={handleViewMore}>View More</Button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
