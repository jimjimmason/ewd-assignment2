import axios from 'axios';

export const getAll = () => {
  console.log("eventsapi.js getAllEvents")
   return axios('/api/events')
              .then(resp => resp.data);
};

export const getEvent = eventId => {
  return axios.get(`/api/events/${eventId}`)
              .then(resp => resp.data);
};

export const addEvent = (id,eDate, eName,eType,distance,series,ageGroup,county,eventUrl) => {
  console.log("api.js addEvent");
  return axios.put('/api/events', { 
    id: id,
    eventDate: eDate,
    eventName: eName,
    eventType : eType,
    distance: distance,
    raceSeries: series,
    ageGroup: ageGroup,
    county: county,
    eventUrl: eventUrl 
  })
  .then(resp => resp.data);
};

export const deleteEvent = eventId => {
  console.log("eventsapi.js deleteEvent");
  return axios.delete(`/api/events/${eventId}`)
              .then(resp => resp.data);
};

export const updateEvent = (id,eDate, eName,eType,distance,series,ageGroup,county,eventUrl) => {
  console.log("api.js updateEvent");
  return axios.put('/api/events', { 
    id: id,
    eventDate: eDate,
    eventName: eName,
    eventType : eType,
    distance: distance,
    raceSeries: series,
    ageGroup: ageGroup,
    county: county,
    eventUrl: eventUrl 
  })
  .then(resp => resp.data);
};

export const addMemberToEventParticipants = (eventId,member) => {
  return axios.post(`/api/events/${eventId}`)
              .then(resp => resp.data);
};
