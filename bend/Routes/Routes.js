const express = require('express');
const router = express.Router();

const totalevents = require("../Components/Totalevent/Totalevent");
const completedEvent = require("../Components/completedEvent/completedEvent");
const inprogressEvent = require('../Components/inprogressEvent/inprogressEvent');
const weekEvent = require('../Components/weekEvent/weekEvent');
const gallery = require('../Components/gallery/gallery');
const organizerDetails = require('../Components/organizerDetails/organizerDetails');
const completedGallery = require('../Components/completedGallery/completedGallery');
const EventDetails = require('../Components/EventDetails/EventDetails');
// const mail = require('../Components/Mailsystem/NewUserMailsystem.js');
const CompletedEventDetails= require('../Components/CompletedEventDetails/CompletedEventDetails');
const OrganizerMoreDetails = require('../Components/OrganizerMoreDetails/OrganizerMoreDetails');
const PendingGallery = require('../Components/PendingGallery/PendingGallery');

router.get('/data', (req, res) => {
    totalevents(req, res);
});

router.get('/completedEvent', (req, res) => {
    completedEvent(req, res);
});

router.get('/inprogressEvent', (req, res) => {
    inprogressEvent(req, res);
});

router.get('/weekEvent', (req, res) => {
    weekEvent(req, res);
});

router.get('/gallery', (req, res) => {
    gallery(req, res);
});

router.get('/organizerDetails', (req, res) => {
    organizerDetails(req, res);
});

router.get('/completedGallery', (req, res) => {
    completedGallery(req, res);
});

router.get('/EventDetails', (req, res) => {
    EventDetails(req, res);
});
router.get('/CompletedEventDetails/:id',(req,res)=>{
    CompletedEventDetails(req,res);
});

router.get('/OrganizerMoreDetails/:id',(req,res)=>{
    OrganizerMoreDetails(req,res);
});

router.get('/PendingGallery',(req,res)=>{
    PendingGallery(req,res);
});

// router.get('/mail',(req,res)=>{
//     mail(req,res);
// });

module.exports = router;
