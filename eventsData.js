import mongoose from 'mongoose';
import assert from 'assert';
import eventsModel from './api/events/eventsModel';
import config from './config';

const events =  [
    {
      "id": 1,
      "eventDate": "2017-04-15",
      "eventName": "Nenagh Sprint (poolswim)",
      "eventType": "Triathlon",
      "distance": ["Sprint"],
      "raceSeries": "Nationl Series",
      "ageGroup": ["adults","children"],
      "county": "Tipperary",
      "eventurl": "www.nenaghtriathlon.com",
      "membersCompeting": ["jim mason","fred flinstone"],
      "membersCompetingCount": 2
    },
    {
      "id": 2,
      "eventDate": "2017-04-19",
      "eventName": "Portlaoise Sprint (poolswim)",
      "eventType": "Swim",
      "distance": ["Sprint","Try-a-Try"],
      "raceSeries": "",
      "ageGroup": ["adults"],
      "county": "Laois",
      "eventUrl": "www.laoistriathlon.com",
      "membersCompeting": [],
      "membersCompetingCount": 0
    },
    {
      "id": 3,
      "eventDate": "2017-08-29",
      "eventName": "Trip to Tipp",
      "eventType": "Charity Cycle",
      "distance": ["Sprint","Try-a-Try"],
      "raceSeries": "",
      "ageGroup": ["adults"],
      "county": "Tipperary`",
      "eventUrl": "www.laoistriathlon.com",
      "membersCompeting": [],
      "membersCompetingCount": 0
    },
    {
      "id": 4,
      "eventDate": "2017-06-12",
      "eventName": "Athy",
      "eventType": "Triathlon",
      "distance": ["Sprint","Try-a-Try"],
      "raceSeries": "",
      "ageGroup": ["adults"],
      "county": "Laois",
      "eventUrl": "www.laoistriathlon.com",
      "membersCompeting": [],
      "membersCompetingCount": 0
    }
  ];

	export const loadEvents = () =>{eventsModel.find({}).remove(function() { 
	    eventsModel.collection.insert(events, (err,docs)=>{
	    if (err){
	      console.log(`failed to Load Event Data`);
	    }
	    else{
	      console.info(`${events.length} events were successfully stored.`);
	    }
	  })
	});
}