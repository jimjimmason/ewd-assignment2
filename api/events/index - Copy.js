import express from 'express';
import eventsAPI from './events';
import _ from 'lodash';

const router = express.Router();

router.get('/', (req, res) => {
  const events = eventsAPI.getAllEvents();
  res.send({ events: events });
});

//get event
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const event = eventsAPI.getEvent(id);

   if(event){
           return   res.status(200).send(event);
          }
          return    res.status(404).send({message: `Unable to find Event ${id}`}); 
            
            
});

//add Event
router.post('/', (req, res) => {
	console.log("requst Post newEvent");
  const newEvent = req.body;
  let result = null
  if (newEvent){
  	result = eventsAPI.addEvent(
  		newEvent.eventDate,
  		newEvent.eventName,
  		newEvent.eventType,
  		newEvent.distance,
  		newEvent.series,
  		newEvent.ageGroup,
  		newEvent.county,
  		newEvent.eventURL
  	);
  }
  if (result > 0) {  
  	return res.status(201).send({message: "Event Created", id:result});
  }
   	return res.status(400).send({message: "Unable to find Event in request. No Event Found in body"});
  
});


//delete event
router.delete('/:id', (req, res) => {
	console.log("requst Delete Event");
  const id = req.params.id;
  const elements = eventsAPI.deleteEvent(id);
	  if (elements){
	   	res.status(200).send({message: "Event deleted"});
	  }else{
        res.status(400).send({message: "Unable to find Event. No event Deleted"}) ;
	  }
});

//add addMemberToEventParticipants
router.post('/:id', (req, res) => {
   const id = req.params.id;
   const member = req.body;
   console.log(id);
   console.log(member)
   const result = eventsAPI.addMemberToEventParticipants(id,member);
 if (result){
            return  res.status(200).send({message: `Member added to event ${id}`}); 
      }
            return   res.status(400).send({message: `Unable to add Member to event ${id}`});
           
             
});

router.put('/:id', (req, res) => {
  console.log("requst Post updateEvent");
  const updateEvent = req.body;
  let result = false;
  if (updateEvent){
    result = eventsAPI.updateEvent(
      updateEvent.id,
      updateEvent.eventDate,
      updateEvent.eventName,
      updateEvent.eventType,
      updateEvent.distance,
      updateEvent.series,
      updateEvent.ageGroup,
      updateEvent.county,
      updateEvent.eventURL
    );
  }
  if (result ) {  
    return res.status(201).send({message: "Event Updated", id:result});
  } else {
    return res.status(400).send({message: "Unable to find Event in request. No Event Found in body"});
  }
  
});


export default router;