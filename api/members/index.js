import express from 'express';
import membersAPI from './members';
import _ from 'lodash';
import mongoose from 'mongoose';
import Member from './membersModel';
import config from './../../config';


const router = express.Router();

router.get('/', (req, res) => {
 Member.find((err, members) => {
    if(err) { return handleError(res, err); }
    return res.send(members);
  });
});

// get a member
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Member.findById(id, function (err, member) { 
    if(err) { return handleError(res, err); }
    return res.send({member});
  });
});

//add member
router.post('/', (req, res) => {
  const newEvent = req.body;
  if (newEvent){
    Member.create(newEvent, (err, member) => {
      if(err) { return handleError(res, err); }
      return res.status(201).send({member});
    });
  }else{
    return handleError(res, err);
  }
});

//Delete a member
router.delete('/:id', (req, res) => {
   let key = req.params.id;
   Member.findById(key, (err, member)=> {
    if(err) { return res.status(400).send(err);}
    if(!member) { return res.send(404); }
    member.remove(err => {
      if(err) { return handleError(res, err); }
      return res.send(member);
    });
  });   
});

//Update an member
router.put('/:id', (req, res) => {
   let key = req.params.id;
   let updateMember = req.body;

   if(updateMember._id) { delete updateMember._id; }
   Member.findById(req.params.id,  (err, member) => {
      if (err) { return handleError(res, err); }
        if(!member) { return res.send(404); }
            const updated = _.merge(member, req.body);
            updated.save((err) => {
                  if (err) { return handleError(res, err); }
                          return res.send(member);
            });
      });
});

export default router;