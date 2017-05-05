import React from 'react';
import _ from 'lodash';
import './App.css'
import buttons from './utils/MembersButtons';
//import api from '../api/ReviewsAPI';
import * as api from './eventsApi';
//import { Link } from 'react-router';

//**********************************************************************************

var EventRow = React.createClass({
  getInitialState : function(){
    return {
      status: '',
      id: this.props.event._id,
      eventDate: this.props.event.eventDate,
      eventName: this.props.event.eventName,
      eventType: this.props.event.eventType,
      distance: this.props.event.distance,
      raceSeries: this.props.event.raceSeries,
      ageGroup: this.props.event.ageGroup,
      county: this.props.event.county,
      eventUrl: this.props.event.eventUrl,
      membersCompeting: this.props.event.membersCompeting,
      membersCompetingCount: this.props.event.membersCompetingCount
    };
  },
  handleDelete : function(){
    this.setState({status: 'delete'})
  },
  handleUndo : function(){
    this.setState({status : ''});
  },
  handleConfirm : function(){
    this.props.deleteHandler(this.state.id);  //changed thif from props.member.id
    this.setState({status : ''});
  },
  handleEdit : function(){
    this.setState({status: 'edit'});
  },
  handleCancel : function(){
    this.setState({
      status: '',
      id: this.props.event._id,
      eventDate: this.props.event.eventDate,
      eventName: this.props.event.eventName,
      eventType: this.props.event.eventType,
      distance: this.props.event.distance,
      raceSeries: this.props.event.raceSeries,
      ageGroup: this.props.event.ageGroup,
      county: this.props.event.county,
      eventUrl: this.props.event.eventUrl,
      membersCompeting: this.props.event.membersCompeting,
      membersCompetingCount: this.props.event.membersCompetingCount
     });
  },
  handleSave : function(e) {
      e.preventDefault();
      var eventDate = this.state.eventDate;
      var eventName = this.state.eventName;
      var eventType = this.state.eventType;
      var distance = this.state.distance;
      var raceSeries = this.state.raceSeries;
      var ageGroup = this.state.ageGroup;
      var county = this.state.county;
      var eventUrl = this.state.eventUrl;
      var membersCompeting = this.state.membersCompeting;
      var membersCompetingCount = this.state.membersCompetingCount;
      this.props.updateHandler(
        this.state.id,eventDate,eventName,eventType,distance,raceSeries,ageGroup,county,eventUrl,membersCompeting,membersCompetingCount);
      this.setState({status : ''} )
  },
  handleEventDateChange : function(e){
    this.setState({
      eventDate: e.target.value
    })
  },
  handleEventNameChange : function(e){
    this.setState({
      eventName: e.target.value
    })
  },
  handleEventTypeChange : function(e){
    this.setState({
      eventType: e.target.value
    })
  },
  handleDistanceChange : function(e){
    this.setState({
      distance: e.target.value
    })
  },
  handleSeriesChange : function(e){
    this.setState({
      raceSeries: e.target.value
    })
  },
  handleAgeGroupChange : function(e){
    this.setState({
      ageGroup: e.target.value
    })
  },
  handleCountyChange : function(e){
    this.setState({
      county: e.target.value
    })
  },
  handleEventUrlChange : function(e){
    this.setState({
      eventUrl: e.target.value
    })
  },
  handleMembersCompetingChange : function(e){
    this.setState({
      membersCompeting: e.target.value
    })
  },
  handleMembersCompetingCountChange : function(e){
    this.setState({
      membersCompetingCount: e.target.value
    })
  },
  handleEnterEvent: function(e){
    //console.log("Enter Event " + this.state.id + ' : ' + this.state.eventName)
    // pass up the event id and let API add the user name to membersCompeting and increment the membersCompetingCount
    this.props.addMemberToEventParticipants(this.state.id);
    this.setState({status : ''});
  },

  render: function(){
    var activeButtons = buttons.normal;
    var leftButtonHandler = this.handleEdit;
    var rightButtonHandler = this.handleDelete;

    var fields = [
      <td key={'eventDate'}>{this.state.eventDate}</td>,
      <td key={'eventName'}>{this.state.eventName}</td>,
      <td key={'eventType'}>{this.state.eventType}</td>,
      <td key={'distance'}>{this.state.distance}</td>,
      <td key={'raceSeries'}>{this.state.raceSeries}</td>,
      <td key={'ageGroup'}>{this.state.ageGroup}</td>,
      <td key={'county'}>{this.state.county}</td>,
      <td key={'eventUrl'}>{this.state.eventUrl}</td>,
      <td key={'membersCompeting'}>{this.state.membersCompeting}</td>,
      <td key={'membersCompetingCount'}>{this.state.membersCompetingCount}</td>
    ];
    if (this.state.status === 'edit') {
      activeButtons = buttons.edit;
      leftButtonHandler = this.handleSave;
      rightButtonHandler = this.handleCancel;
      fields = [
        <td key={'eventDate'}><input type="text" className="form-control"
            value={this.state.eventDate}
            onChange={this.handleEventDateChange} />
        </td>,
        <td key={'eventName'}><input type="text" className="form-control"
            value={this.state.eventName}
            onChange={this.handleEventNameChange} />
        </td>,
        <td key={'eventType'}><input type="text" className="form-control"
            value={this.state.eventType}
            onChange={this.handleEventTypeChange} />
        </td>,
        <td key={'distance'}><input type="text" className="form-control"
            value={this.state.distance}
            onChange={this.handleDistanceChange} />
        </td>,
        <td key={'raceSeries'}><input type="text" className="form-control"
            value={this.state.raceSeries}
            onChange={this.handleSeriesChange} />
        </td>,
        <td key={'ageGroup'}><input type="text" className="form-control"
            value={this.state.ageGroup}
            onChange={this.handleAgeGroupChange} />
        </td>,
        <td key={'county'}><input type="text" className="form-control"
            value={this.state.county}
            onChange={this.handleCountyChange} />
        </td>,
        <td key={'eventUrl'}><input type="text" className="form-control"
            value={this.state.eventUrl}
            onChange={this.handleEventUrlChange} />
        </td>,
        <td key={'membersCompeting'}><input type="text" className="form-control"
            value={this.state.membersCompeting}
            onChange={this.handleMembersCompetingChange} />
        </td>,
        <td key={'membersCompetingCount'}><input type="text" className="form-control"
            value={this.state.membersCompetingCount}
            onChange={this.handleMembersCompetingCountChange} />
        </td>
      ];
    }
    if (this.state.status === 'delete') {
      activeButtons = buttons.delete;
      leftButtonHandler = this.handleUndo;
      rightButtonHandler = this.handleConfirm;
    }

    return(
      <tr>
        {fields}
        { this.props.isAdministrator ?
            <td>
              <input type="button" className={'btn ' + activeButtons.leftButtonColor}
                        value={activeButtons.leftButtonVal}
                        onClick={leftButtonHandler} />
            </td>
          : null
        }
        { this.props.isAdministrator ?
            <td>
              <input type="button" className={'btn ' + activeButtons.rightButtonColor}
                      value={activeButtons.rightButtonVal}
                      onClick={rightButtonHandler} />

            </td>
          : null
        }
        { !this.props.isAdministrator ?
            <td>
              <button type="button" className="btn btn-success" id={this.state.id} onClick={this.handleEnterEvent}>Enter Event</button>

            </td>
          : null
        }
      </tr>
    );
  }
});  // EventRow

var EventsList = React.createClass({
  getInitialState: function() {
    return {
      addEventBodyVisible: false
    }
  },
  render: function(){

    //var contactRows = null; //TODO  initailize to an array of contact elements
    var eventRows = this.props.events.map(event => {
        return <EventRow key={event.id} event={event}
            isAdministrator={this.props.isAdministrator}
            updateHandler={this.props.updateHandler}
            deleteHandler={this.props.deleteHandler}
            addMemberToEventParticipants={this.props.addMemberToEventParticipants}
        />
    });

    return (
      <tbody>
      {eventRows}
      </tbody>
    );
  }
});


var EventsTable = React.createClass({
  render: function(){
    return(
      <table className="table table-striped table-hover table-condensed">
        <thead>
          <tr>
            <th>Event Date</th>
            <th>Name</th>
            <th>Type</th>
            <th>Distance</th>
            <th>Race Series</th>
            <th>Age Group</th>
            <th>County</th>
            <th>Event URL</th>
            <th>Members Taking Part</th>
            <th># Members Taking Part</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <EventsList
            events={this.props.allEvents}
            isAdministrator={this.props.isAdministrator}
            addHandler={this.props.addHandler}
            updateHandler={this.props.updateHandler}
            deleteHandler={this.props.deleteHandler}
            addMemberToEventParticipants={this.props.addMemberToEventParticipants}
        />
      </table>
    );
  }
});

//**********************************************************************************
var Events = React.createClass({ 

  getInitialState: function() {
    return {  
      addEventBodyVisible: false,
      orderBy: 'eventDate',
      orderDir: 'asc',
      queryText: '',
      events: [{}]
    };
  },


  componentDidMount: function(){
    api.getAll().then(resp => {
      this.setState({
        events: resp.events
      });
    }).catch(console.error);
  },


 toggleAddEventDisplay: function() {
    var tempVisibility = !this.state.addEventBodyVisible;
    this.setState({
      addEventBodyVisible: tempVisibility
    });
  }, //toggleAddEventDisplay

  reOrder: function(orderBy, orderDir) {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir,
      queryText: ''
    });
  },

  searchEvents(q) {
    this.setState({
      queryText: q
    });
  },

  componentWillUnmount: function() {
    api.persist() ;
  },
  
  updateEvent : function(key,eDate,eName,eType,distance,series,ageGroup,county,
       eventUrl,membersCompeting,membersCompetingCount) {

       console.log("updateEvent" + key);

    api.updateEvent(key,eDate,eName,eType,distance,series,ageGroup,county,
         eventUrl,membersCompeting,membersCompetingCount)
      .then ( response => {
         return api.getAll()
      })
      .then( response => {
          //localStorage.clear();
          //localStorage.setItem('events', JSON.stringify(response)) ;
          this.setState( {}) ;
      })
      .catch( error => {console.log(`Update failed for ${error}` )}  ) ;
  }, // updateEvent

 addEvent : function(eDate,eName,eType,distance,series,ageGroup,county,eventUrl) {
    api.addEvent(eDate,eName,eType,distance,series,ageGroup,county,eventUrl)
    .then(resp => {
                  const newEvent = {
                    "id":resp.id,
                    eventDate: eDate,
                    eventName: eName,
                    eventType : eType,
                    distance: distance,
                    raceSeries: series,
                    ageGroup: ageGroup,
                    county: county,
                    eventUrl: eventUrl
                  };
                  this.setState({events: this.state.events.concat([newEvent])});
    })
  }, //addEvent

/*   addPost : function(title,link) {
          api.add(title,link)
          .then(resp => {
            const newEvent = {"id":resp.id,"title":title,"link":link,"upvotes":0, "comments":[]};
            this.setState({events: this.state.events.concat([newEvent])});
          })
        },
*/

deleteEvent : function(k) {
console.log("delete event: " + k);
    api.deleteEvent(k)
      .then(response => {
        return api.getAll()
      })
      .then(response => {
        //localStorage.clear();
        //localStorage.setItem('events', JSON.stringify(response));
        this.setState({});
      });
  }, //deleteEvent

  addMemberToEventParticipants : function(key){
    var userName = "bob burger";
    api.addMemberToEventParticipants(key,userName)
      .then ( response => {
         return api.getAllEvents()
      })
      .then( response => {
          //localStorage.clear();
          //localStorage.setItem('events', JSON.stringify(response)) ;
          this.setState( {}) ;
      })
      .catch( error => {console.log(`Update failed for ${error}` )}  ) ;
  }, // addMemberToEventParticipants

  render: function(){
    const filteredEvents = this.state.events;

      return (
         <div >
             
          <EventsTable
            allEvents={filteredEvents}
            isAdministrator={this.props.isAdministrator}
            addHandler={this.addEvent}
            updateHandler={this.updateEvent}
            deleteHandler={this.deleteEvent}
            addMemberToEventParticipants={this.addMemberToEventParticipants}
          />       
        </div>
      );
  }
});

export default Events;
