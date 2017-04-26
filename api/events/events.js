import _ from 'lodash';
//import uuid from 'uuid';

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

const eventsAPI = {
      // EVENTS
      getAllEvents : () => {
        return events;
      },
      
      getEvent : (id) => {
            let result = null ;
            const index = _.findIndex(events, 
                   function(event) {
                    return event.id == id;
                  } );     
             if (index !== -1) {                
                result = events[index];
                    }
            return result;            
      },

      deleteEvent : function(id) {
        var elements = _.remove(events,
            function(event) {
              return event.id == id;
            }
          );
        return elements;
      }, // deleteEvent
       
      addEvent : function(eDate,eName,eType,distance,series,ageGroup,county,eventUrl) {
        let id = 1;
        const last = _.last(events);
        if (last) { id = last.id + 1; }
        let len = events.length ;
        let newL_len = events.push({ 
            'id': id,
            eventDate: eDate,
            eventName: eName,
            eventType : eType,
            distance: distance,
            raceSeries: series,
            ageGroup: ageGroup,
            county: county,
            eventUrl: eventUrl
          }) ;
          return newL_len > len;
        }, // addEvent 

  updateEvent : function(id,eDate,eName,eType,distance,series,ageGroup,county,
            eventUrl,membersCompeting,membersCompetingCount) {
    let result = false;
      var index = _.findIndex(events, event => {
        return event.id === id;
      });
      if (index !== -1) {
        events.splice(index, 1, {
          'id': id,
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
        result = true;
      };
      return result;
  }, // updateEvent

       addMemberToEventParticipants : function(eventId, member) {
          let result = false;
          const event = eventsAPI.getEvent(eventId);
          if (event) {
            event.membersCompeting.push(member);
            event.membersCompetingCount += 1;
            result = true;
          }
          return result;
       } // addMemberToEventParticipants
    }

export default eventsAPI ;
