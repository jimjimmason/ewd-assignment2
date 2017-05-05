import _ from 'lodash';
import uuid from 'uuid';

var events = null;
if (localStorage.getItem('events')) {
  events = JSON.parse(localStorage.getItem('events'));
  localStorage.setItem('updated',false);
} else {
  events =  [
    {
      "id": uuid.v4(),
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
      "id": uuid.v4(),
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
      "id": uuid.v4(),
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
      "id": uuid.v4(),
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
  localStorage.setItem('events',JSON.stringify(events));
  localStorage.setItem('updated',false);
}

var EventsAPI = {
      // EVENTS
      getAllEvents : function() {
        var promise = new Promise ((resolve,reject) => {
                setTimeout(() => resolve(events),10 );
        }) ;
        return promise ;
      },

      deleteEvent : function(k) {
         var promise = new Promise( (resolve,reject) => {
            var elements = _.remove(events,
                   function(event) {
                       return event.id === k;
                  });
             setTimeout(() => resolve(elements),10 );
         }) ;
         return promise ;
       }, // deleteEVent

       addEvent : function(eDate,eName,eType,distance,series,ageGroup,county,eventUrl) {
        var len = events.length ;
        var newL_len = events.push({
          id: uuid.v4(),
          eventDate: eDate,
          eventName: eName,
          eventType : eType,
          distance: distance,
          raceSeries: series,
          ageGroup: ageGroup,
          county: county,
          eventUrl: eventUrl
        }) ;
        return newL_len > len ;
       },  // addEvent

       updateEvent : function(key,eDate,eName,eType,distance,series,ageGroup,county,
            eventUrl,membersCompeting,membersCompetingCount) {
         var promise = new Promise ((resolve,reject) => {
            setTimeout(() => {
               var index = _.findIndex(events, function(event) {
                   return event.id === key;
               } );
              if (index !== -1) {
                  events.splice(index, 1, {
                    eventDate: eDate,
                    eventName: eName,
                    eventType : eType,
                    distance: distance,
                    raceSeries: series,
                    ageGroup: ageGroup,
                    county: county,
                    eventUrl: eventUrl,
                    membersCompeting: membersCompeting,
                    membersCompetingCount: membersCompetingCount
                  });
                  resolve(true);
              } else {
                  reject(key) ;
              }
            },10) ;
         });
         return promise ;
       } , // updateEvent

       addMemberToEventParticipants : function(key) {
         var index = _.findIndex(events,
         	  function(event) {
                return event.id === key;
              } );
         if (index !== -1) {
              events[index].membersCompetingCount += 1 ;
              localStorage.setItem('updated', true ) ;
              return true ;
            }
          return false ;
       } // addMemberToEventParticipants
    }

export default EventsAPI ;
