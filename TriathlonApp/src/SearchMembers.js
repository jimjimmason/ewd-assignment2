import React from 'react';

var SearchMembers = React.createClass({

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
              <input type="text" className="form-control" id="SearchMembers" onChange={this.handleSearch} placeholder="Search Members" />
            </div>
            <button type="submit" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">Sort by: <span className="caret"></span></button>
            <ul className="dropdown-menu dropdown-menu-center">
              <li><a href="#" id="Surname" onClick={this.handleSort}>Surname {(this.props.orderBy === 'Surname') ? <span className="glyphicon glyphicon-ok"></span>: null}</a></li>
              <li><a href="#" id="TriathlonIrelandID" onClick={this.handleSort}>TI Num {(this.props.orderBy === 'TriathlonIrelandID') ? <span className="glyphicon glyphicon-ok"></span>: null}</a></li>
              <li><a href="#" id="DOB" onClick={this.handleSort}>Date of Birth {(this.props.orderBy === 'DOB') ? <span className="glyphicon glyphicon-ok"></span>: null}</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#" id="asc" onClick={this.handleOrder}>Asc {(this.props.orderDir === 'asc') ? <span className="glyphicon glyphicon-ok"></span>: null}</a></li>
              <li><a href="#" id="dsc" onClick={this.handleOrder}>Dsc {(this.props.orderDir === 'dsc') ? <span className="glyphicon glyphicon-ok"></span>: null}</a></li>
            </ul>
          </form>
        </div>
    );
  }
});

export default SearchMembers;
