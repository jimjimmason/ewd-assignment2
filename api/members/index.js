import express from 'express';
import membersAPI from './members';
import _ from 'lodash';

const router = express.Router();

router.get('/', (req, res) => {
  const members = membersAPI.getAllMembers();
  res.send({ members: members });
});

//get Member
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const event = membersAPI.getMember(id);

   if(event){
           return   res.status(200).send(event);
          }
          return    res.status(404).send({message: `Unable to find Event ${id}`}); 
            
            
});

//add Member
router.post('/', (req, res) => {
	console.log("requst Post newMember");
  const newMember = req.body;
  let result = null
  if (newMember){
  	result = membersAPI.addMember(
  		newMember.FirstName,
  		newMember.Surname,
  		newMember.Address1,
  		newMember.Address2,
  		newMember.Town,
  		newMember.County,
  		newMember.Nationality,
  		newMember.phone_number,
      newMember.email,
      newMember.DOB,
      newMember.gender,
      newMember.imageUrl,
      newMember.Type,
      newMember.TriathlonIrelandID,
      newMember.Role
  	);
  }
  if (result > 0) {  
  	return res.status(201).send({message: "Event Created", id:result});
  }
   	return res.status(400).send({message: "Unable to find Event in request. No Event Found in body"});
  
});


//delete Member
router.delete('/:id', (req, res) => {
	console.log("requst Delete Member");
  const id = req.params.id;
  const elements = membersAPI.deleteMember(id);
	  if (elements){
	   	res.status(200).send({message: "Member deleted"});
	  }else{
        res.status(400).send({message: "Unable to find Member. No event Deleted"}) ;
	  }
});


router.put('/:id', (req, res) => {
  console.log("requst Post updateMember");
  const updateMember = req.body;
  let result = false;
  if (newMember){
    result = membersAPI.updateMember(
      updateMember.id,
      updateMember.FirstName,
      updateMember.Surname,
      updateMember.Address1,
      updateMember.Address2,
      updateMember.Town,
      updateMember.County,
      updateMember.Nationality,
      updateMember.phone_number,
      updateMember.email,
      updateMember.DOB,
      updateMember.gender,
      updateMember.imageUrl,
      updateMember.Type,
      updateMember.TriathlonIrelandID,
      updateMember.Role
    );
  }
  if (result ) {  
    return res.status(201).send({message: "Member Updated", id:result});
  } else {
    return res.status(400).send({message: "Unable to find Member in request. No Member Found in body"});
  }
  
});
export default router;