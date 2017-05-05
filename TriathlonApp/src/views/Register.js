import React from 'react';
import AddMember from '../AddMember';
//import api from '../../api/MembersAPI';
import * as api from '../membersApi';

var Register = React.createClass({
  addMember : function(fn,ln,addr1,addr2,town,county,nationality,phone,email,dob,gender,imageUrl,type,tino){
    console.log("adding new member : " + fn + ' ' + ln);
    api.addMember(fn,ln,addr1,addr2,town,county,nationality,phone,email,dob,gender,imageUrl,type,tino);
    var p = api.getAllMembers();
    p.then( response => {
      localStorage.clear();
      localStorage.setItem('members', JSON.stringify(response)) ;
      this.setState({}) ;
    }) ;
  }, //addMember
  render: function(){
    //var bVisible = true;
    //var bRegisterUser = true;
    
    return (
      <div>
      <h3> Register </h3>
      <AddMember addHandler={this.addMember}
            bodyVisible={true} 
            registerUser={true} />
      </div>
    );
  }
});

export default Register;