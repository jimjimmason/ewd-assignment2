import React from 'react';

var MemberType=React.createClass({
  handleMemberType: function(e){
    //this.setState({memberType: e.target.value})
    this.props.member.handleMemberType(e.target.value);
  },

  render: function(){
    return(
      <div className="form-group">
        <label>Membership Type:
          <select value={this.props.member.memberType} onChange={this.handleMemberType}>
            <option value="u23Race">U23 Race</option>
            <option value="juniorRace">Junior Race (17-19Yrs)</option>
            <option value="youth">Youth (15-16Yrs)</option>
            <option value="kids">Kids U15</option>
            <option value="training">Training</option>
            <option value="joint">Joint Triathlon and Swim Ireland</option>
            <option value="race">Full Race</option>
          </select>
        </label>
      </div>
    )
  }
});

export default MemberType;
