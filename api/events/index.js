import express from 'express';
//import eventsAPI from './events';
import _ from 'lodash';
import mongoose from 'mongoose';
import Event from './eventsModel';
import config from './../../config';

//connect to database
mongoose.connect(config.mongoDb);

const router = express.Router();

router.get('/', (req, res) => {
 Event.find((err, events) => {
    if(err) { return handleError(res, err); }
    return res.send({events});
  });
});

// get an event
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Event.findById(id, function (err, event) { 
    if(err) { return handleError(res, err); }
    return res.send({event});
  });
});

//add event
router.post('/', (req, res) => {
  const newEvent = req.body;
  if (newEvent){
    Event.create(newEvent, (err, event) => {
      if(err) { return handleError(res, err); }
      return res.status(201).send({event});
    });
  }else{
    return handleError(res, err);
  }
});

//Delete an event
router.delete('/:id', (req, res) => {
   let key = req.params.id;
   Event.findById(key, (err, event)=> {
    if(err) { return res.status(400).send(err);}
    if(!event) { return res.send(404); }
    event.remove(err => {
      if(err) { return handleError(res, err); }
      return res.send(event);
    });
  });   
});


//Update an Event
router.put('/:id', (req, res) => {
   let key = req.params.id;
   let updateEvent = req.body;

   if(updateEvent._id) { delete updateEvent._id; }
   Event.findById(req.params.id,  (err, event) => {
      if (err) { return handleError(res, err); }
        if(!event) { return res.send(404); }
            const updated = _.merge(event, req.body);
            updated.save((err) => {
                  if (err) { return handleError(res, err); }
                          return res.send(event);
            });
      });
});

/*

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


 */

export default router;