import React from 'react';
import './App.css'
import buttons from './utils/MembersButtons';
// import api from '../api/EventsAPI';
import AddEvent from './AddEvent';
import SearchEvents from './SearchEvents';
import _ from 'lodash';
import * as api from './eventsApi';


var EventRow = React.createClass({
  getInitialState : function(){
    return {
      status: '',
      id: this.props.event.id,
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
      id: this.props.event.id,
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
      var eventDate = this.state.eventDate.trim();
      var eventName = this.state.eventName.trim();
      var eventType = this.state.eventType.trim();
      var distance = this.state.distance.trim();
      var raceSeries = this.state.raceSeries.trim();
      var ageGroup = this.state.ageGroup.trim();
      var county = this.state.county.trim();
      var eventUrl = this.state.eventUrl.trim();
      var membersCompeting = this.state.membersCompeting.trim();
      var membersCompetingCount = this.state.membersCompetingCount.trim();
          // check that reqiured fields are populated
//      if (!eventDate || !eventName || !distance || !county || !eventUrl) {
//        console.log("returning")
//        return;
//      }
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


// Events Component
var Events = React.createClass({
  
  getInitialState : function() {
    return {
      addEventBodyVisible: false,
      orderBy: 'eventDate',
      orderDir: 'asc',
      queryText: '',
      events: [{}]
    };
  },

  // componentDidMount : function() {
  //   var p = api.getAllEvents();
  //   p.then( response => {
  //     localStorage.clear();
  //     localStorage.setItem('events', JSON.stringify(response)) ;
  //     this.setState({}) ;
  //   }) ;
  // }, //componentDidMount
  componentDidMount: function() {
    console.log("componentDidMount");
    api.getAllEvents().then(resp => {
      this.setState({
        events: resp.events
      });
    }).catch(console.error);
  },

  deleteEvent : function(k) {
    api.deleteEvent(k)
      .then(response => {
        return api.getAllEvents()
      })
      .then(response => {
        localStorage.clear();
        localStorage.setItem('events', JSON.stringify(response));
        this.setState({});
      });
  }, //deleteEvent

  // addEvent : function(eDate,eName,eType,distance,series,ageGroup,county,eventUrl){
  //   api.addEvent(eDate,eName,eType,distance,series,ageGroup,county,eventUrl);
  //   var p = api.getAllEvents();
  //   p.then( response => {
  //     localStorage.clear();
  //     localStorage.setItem('events', JSON.stringify(response)) ;
  //     this.setState({}) ;
  //   }) ;
  //   this.setState({
  //     addEventBodyVisible: false,
  //   });
  // }, //addEvent
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
                  this.setState({posts: this.state.events.concat([newEvent])});
    })
  }, //addEvent

  updateEvent : function(key,eDate,eName,eType,distance,series,ageGroup,county,
       eventUrl,membersCompeting,membersCompetingCount) {

    api.updateEvent(key,eDate,eName,eType,distance,series,ageGroup,county,
         eventUrl,membersCompeting,membersCompetingCount)
      .then ( response => {
         return api.getAllEvents()
      })
      .then( response => {
          localStorage.clear();
          localStorage.setItem('events', JSON.stringify(response)) ;
          this.setState( {}) ;
      })
      .catch( error => {console.log(`Update failed for ${error}` )}  ) ;
  }, // updateEvent

  addMemberToEventParticipants : function(key){
    var userName = "bob burger";
    api.addMemberToEventParticipants(key,userName)
      .then ( response => {
         return api.getAllEvents()
      })
      .then( response => {
          localStorage.clear();
          localStorage.setItem('events', JSON.stringify(response)) ;
          this.setState( {}) ;
      })
      .catch( error => {console.log(`Update failed for ${error}` )}  ) ;
  }, // addMemberToEventParticipants

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

  render: function(){

    // var events = localStorage.getItem('events') ?
      // JSON.parse(localStorage.getItem('events')) : [];
      const events = this.state.events;
      // Filter the events list by search text
      console.log(events);
      var filteredEvents = events.filter(function(e) {
        // return e.eventName.toLowerCase().search(
        //   this.state.queryText.toLowerCase() ) !== -1;
        return e.eventName.search(
          this.state.queryText ) !== -1;
        }.bind(this) );
        //sort the filtered list by specified order
        filteredEvents = _.sortBy(filteredEvents, this.state.orderBy);

    return(
      <div className="interface">
        { this.props.isAdministrator ?
            <AddEvent addHandler={this.addEvent}
                bodyVisible={this.state.addEventBodyVisible}
                handleToggleAddEvent={this.toggleAddEventDisplay}
            />
          : null
        }
        <SearchEvents
          orderBy={this.state.orderBy}
          orderDir={this.state.orderDir}
          onReOrder={this.reOrder}
          onSearch={this.searchEvents}
        />

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
