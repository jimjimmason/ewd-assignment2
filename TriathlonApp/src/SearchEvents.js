import React from 'react';

var SearchEvents = React.createClass({

  handleSort: function(e) {
    this.props.onReOrder(e.target.id, this.props.orderDir);
  },
  handleOrder: function(e) {
    this.props.onReOrder(e.props.orderBy,e.target.id);
  },

  handleSearch: function(e) {
    this.props.onSearch(e.target.value)
  },

  render: function(){
    return (
        <div className="col-sm-offset-3 col-sm-6">
          <form className="form-inline">
            <div className="form-group">
              <input type="text" className="form-control" id="SearchEVents" onChange={this.handleSearch} placeholder="Search Event Name" />
            </div>
            <button type="submit" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">Sort by: <span className="caret"></span></button>
            <ul className="dropdown-menu dropdown-menu-center">
              <li><a href="#" id="eventDate" onClick={this.handleSort}>Event Date {(this.props.orderBy === 'eventDate') ? <span className="glyphicon glyphicon-ok"></span>: null}</a></li>
              <li><a href="#" id="eventName" onClick={this.handleSort}>Event Name {(this.props.orderBy === 'eventName') ? <span className="glyphicon glyphicon-ok"></span>: null}</a></li>
              <li><a href="#" id="eventType" onClick={this.handleSort}>Event Type {(this.props.orderBy === 'eventType') ? <span className="glyphicon glyphicon-ok"></span>: null}</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#" id="asc" onClick={this.handleOrder}>Asc {(this.props.orderDir === 'asc') ? <span className="glyphicon glyphicon-ok"></span>: null}</a></li>
              <li><a href="#" id="dsc" onClick={this.handleOrder}>Dsc {(this.props.orderDir === 'dsc') ? <span className="glyphicon glyphicon-ok"></span>: null}</a></li>
            </ul>
          </form>
        </div>
    );
  }
});

export default SearchEvents;
