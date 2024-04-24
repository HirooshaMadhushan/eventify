import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function EventDetail() {
    const [eventDetails, setEventDetails] = useState({});

    const params = useParams();

    useEffect(() => {
        fetchData();
    }, [params.event_id]); // Refetch data when params.event_id changes

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/CompletedEventDetails/${params.event_id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch event details');
            }
            const data = await response.json();
            console.log(data);
            // Set the first element of the response array as eventDetails
            setEventDetails(data[0]);
        } catch (error) {
            console.error('Error fetching event details:', error);
        }
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '70% 30%',margin:'70px' }}>
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'lightgrey', borderRadius: '20px' }}>
               
                {Object.keys(eventDetails).length > 0 && (
                    <>
                        <img src={`https://glenreceptions.com/wp-content/uploads/2020/10/corporate-events-1200x801.jpg`} alt="Event" style={{ maxWidth: '300px', borderRadius: '10px', marginBottom: '10px' }} />
                        <h2>{eventDetails.event_name}</h2>
                        <p>{eventDetails.description}</p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: '20px', gap: '10px' }}>
                            <div>
                                <h3>Location:</h3>
                                <p>{eventDetails.venue}</p>
                            </div>
                            <div>
                                <h3>Date:</h3>
                                <p>{new Date(eventDetails.date).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div style={{ padding: '20px', alignContent: 'center', paddingLeft: '20px' }}>
                {/* Right side content */}
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '40px' }}>
                    {/* Buttons */}
                    <Link to="/button1">
                        <Button style={{ marginBottom: '10px', width: '250px' }}>Organizer Details</Button>
                    </Link>
                    <Link to="/button2">
                        <Button style={{ marginBottom: '10px', width: '250px' }}>Ticket Details</Button>
                    </Link>
                    <Link to="/button3">
                        <Button style={{ marginBottom: '10px', width: '250px' }}>Inactive Event</Button>
                    </Link>
                    <Link to="/EventDetailsDownload">
                        <Button style={{ marginBottom: '10px', width: '250px' }}>Download Details</Button>
                    </Link>
                    <Link to="/Ticket">
                        <Button style={{ marginBottom: '10px', width: '250px' }}>Back</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
