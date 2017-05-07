import React from 'react';
import Events from '../Events';

var EventInfo = React.createClass({
  render: function(){
    var isAdministrator = false;
    console.log("EventInfo	");
    return (
      <div>
      	<h1>Upcoming Events</h1>
        <Events isAdministrator={isAdministrator}/>
      </div>
    );
  }
});

export default EventInfo;
