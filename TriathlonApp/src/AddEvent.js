import React from 'react';

var AddEvent=React.createClass({
  getInitialState : function() {
    return {
      addEventBodyVisible: false,
      eventDate: "",
      eventName: "",
      eventType: "",
      distance: "",
      raceSeries: "",
      ageGroup: "",
      county: "",
      eventUrl: ""
    };
  }, //getInitialState
  handleAdd: function(e) {
    e.preventDefault();
    this.props.addHandler(
          this.state.eventDate,
          this.state.eventName,
          this.state.eventType,
          this.state.distance,
          this.state.raceSeries,
          this.state.ageGroup,
          this.state.county,
          this.state.eventUrl
    );
    this.setState({
      addEventBodyVisible: false,
      eventDate: '',
      eventName: '',
      eventType: '',
      distance: '',
      raceSeries: '',
      ageGroup: '',
      county: '',
      eventUrl: ''
    });
  }, // handleAdd
  toggleAddEventDisplay: function() {
    this.props.handleToggleAddEvent();
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
  handleRaceSeriesChange : function(e){
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

  render: function() {
    // for inline style to hide or display form body
    var displayAddEventBody={
      display: this.props.bodyVisible ? 'block': 'none'
    };

    return(
      <div className="panel panel-primary">
        <div className="panel-heading" onClick={this.toggleAddEventDisplay} >
          <span className="glyphicon glyphicon-plus"></span> Add Event
        </div>
        <div className="panel-body" style={displayAddEventBody}>
          <form role="form">

            <div className="form-group">


              <label >Event Date</label>
              <input type="text" className="form-control" id="eventDate" placeholder="Event Date" value={this.state.eventDate} onChange={this.handleEventDateChange}/>
              <label >Event Name</label>
              <input type="text" className="form-control" id="eventName" placeholder="Event Name" value={this.state.eventName} onChange={this.handleEventNameChange}/>
              <label >Type (Duathlon, Triathlon, Open Water Swim, Cycle)</label>
              <input type="text" className="form-control" id="eventType" placeholder="Event Type" value={this.state.eventType} onChange={this.handleEventTypeChange}/>
              <label >Distance (Sprint, Standard, Iron Man etc.)</label>
              <input type="text" className="form-control" id="distance" placeholder="Distance" value={this.state.distance} onChange={this.handleDistanceChange}/>
              <label >Race Series</label>
              <input type="text" className="form-control" id="raceSeries" placeholder="Race Series" value={this.state.raceSeries} onChange={this.handleRaceSeriesChange}/>
              <label >Age Groups</label>
              <input type="text" className="form-control" id="ageGroup" placeholder="Age groups eligible to enter" value={this.state.ageGroup} onChange={this.handleAgeGroupChange}/>
              <label >County</label>
              <input type="text" className="form-control" id="county" placeholder="County" value={this.state.county} onChange={this.handleCountyChange}/>

              <label >Event Website</label>
              <input type="text" className="form-control" id="eventUrl" placeholder="Event Website" value={this.state.eventUrl} onChange={this.handleEventUrlChange}/>
           </div>

            <button className="btn btn-default" onClick={this.handleAdd}>Add Event</button>
          </form>
        </div>
      </div>
    );
  }
}); // AddEvent

export default AddEvent;
