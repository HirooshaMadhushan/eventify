import React from 'react';
import './App.css';
// import Home from './component/Home';
import Appstart from './Appstart';
import Ticket from './Pages/CompletedEvent/CompletedEvent';
import Organizer from './Pages/Organizer/Organizer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutPage from './Pages/Layoutpage/LayoutPage';
import PendingEvent from './Pages/PendingEvent/PendingEvent';
import EventDetail from './Pages/EventDetails/EventDetail';
import CompletedEvent from './Pages/CompletedEvent/CompletedEvent';
import OrganizerDetails from './Pages/OrganizerDetails/OrganizerDetails';
import OrganizerMoreDetails from './Pages/OrganizerDetails/OrganizerDetails'
import EventDetailsDownload from './components/EventDetailsDownload/EventDetailsDownload';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LayoutPage/>} >
        <Route path="appstart" element={<Appstart />} />  
        <Route path="ticket" element={<CompletedEvent/>} />
        <Route path="Organizer" element={<Organizer/>}/>
        <Route path="PendingEvent" element={<PendingEvent/>}/>
        <Route path='/EventDetails/:event_id' element={<EventDetail />} />
        {/* <Route path="/EventDetails/:event_id" element={<CompletedEvent/>}/> */}
        <Route path='/organizer/:id' element={<OrganizerDetails />} />
        <Route path='/OrganizerMoreDetails/:organizer_id' element={<OrganizerDetails/>} />
        <Route path='/EventDetailsDownload/:event_id' element={<EventDetailsDownload />} />
        
        </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
