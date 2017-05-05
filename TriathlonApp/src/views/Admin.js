import React from 'react';
import Members from '../Members';
import Events from '../Events';


var Admin = React.createClass({
  getInitialState : function() {
    return {
      isAdministrator: true,
      membersClassName: 'active',
      eventsClassName: null,
      otherClassName: null,
      showMembers: true,
      showEvents: false,
      showOther: false
    };
  },
  handleMemberClick: function(){
    this.setState({
      showMembers: true,
      showEvents: false,
      showOther: false,
      membersClassName: 'active',
      eventsClassName: null,
      otherClassName:null
    })
    //console.log("memberView clicked")
  },
  handleEventClick: function(){
    this.setState({
      showMembers: false,
      showEvents: true,
      showOther: false,
      membersClassName: null,
      eventsClassName: 'active',
      otherClassName:null
    })
    //console.log("eventsView clicked")
  },
   handleOtherClick: function(){
    this.setState({
      showMembers: false,
      showEvents: false,
      showOther: true,
      membersClassName: null,
      eventsClassName: null,
      otherClassName:'active'
    })
    //console.log("otherView clicked")
  },
  render: function(){
    return (
      <div>
        <h1> Admin Page </h1>
        <ul className="nav nav-tabs">
          <li className={this.state.membersClassName}><a href="#" onClick={this.handleMemberClick}><span className="glyphicon glyphicon-user"></span>  Members</a></li>
          <li className={this.state.eventsClassName}><a href="#" onClick={this.handleEventClick}><span className="glyphicon glyphicon-flash"></span> Events</a></li>
          <li className={this.state.otherClassName}><a href="#" onClick={this.handleOtherClick}><span className="glyphicon glyphicon-envelope"></span> Admin</a></li>
        </ul>
        <Members isAdministrator={this.state.isAdministrator} /> 
        <Events isAdministrator={this.state.isAdministrator} />
      </div>
    );
  }
});

export default Admin;