import mongoose from 'mongoose';
import assert from 'assert';
import membersModel from './api/members/membersModel';
import config from './config';

const members =  [
    {
    "id": 1,
    "FirstName": "Jim",
    "Surname": "Mason",
    "Address1": "",
    "Address2": "",
    "Town": "Thurles",
    "County": "Co. Tipperary",
    "Nationality": "Irish",
    "phone_number": "0881234567",
    "email": "jmason@eircom.net",
    "DOB" : "1965-10-10",
    "gender" : "male",
    "imageUrl": "",
    "Type": "Administrator",
    "TriathlonIrelandID": "1965IE12431244",
    "Role": "admin"
  },
  {
    "id": 2,
    "FirstName": "Brian",
    "Surname": "O'Brien",
    "Address1": "New Street",
    "Address2": "Some Road",
    "Town": "Thurles",
    "County": "Co. Tipperary",
    "Nationality": "Irish",
    "phone_number": "0885568648",
    "email": "bobrien@somewhere.net",
    "DOB" : "1986-07-07",
    "gender": "male",
    "imageUrl":"",
    "Type": "race",
    "TriathlonIrelandID": "",
    "Role": "member"
  }
];

	export const loadMembers = () =>{membersModel.find({}).remove(function() { 
	    membersModel.collection.insert(members, (err,docs)=>{
	    if (err){
	      console.log(`failed to Load Event Data`);
	    }
	    else{
	      console.info(`${members.length} members were successfully stored.`);
	    }
	  })
	});
}
