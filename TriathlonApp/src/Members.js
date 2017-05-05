import React from 'react';
import './App.css'
import buttons from './utils/MembersButtons';
//import api from '../api/MembersAPI';
import * as api from './membersApi';
import AddMember from './AddMember';
import SearchMembers from './SearchMembers';
import _ from 'lodash';

var MemberRow = React.createClass({
  getInitialState : function(){
    return {
      status: '',
      id: this.props.member.id,
      fname: this.props.member.FirstName,
      lname: this.props.member.Surname,
      addr1: this.props.member.Address1,
      addr2: this.props.member.Address2,
      town: this.props.member.Town,
      county: this.props.member.County,
      nationality: this.props.member.Nationality,
      phone: this.props.member.phone_number,
      email: this.props.member.email,
      dob: this.props.member.DOB,
      gender: this.props.member.gender,
      imageUrl: this.props.member.imageUrl,
      type: this.props.member.Type,
      tino: this.props.member.TriathlonIrelandID
    };
  },
  handleDelete : function(){
    this.setState({status: 'delete'})
  },
  handleUndo : function(){
    this.setState({status : ''});
  },
  handleConfirm : function(){
    //console.log("confirm pressed");
    this.props.deleteHandler(this.state.id);  //changed thif from props.member.id
    this.setState({status : ''});
  },
  handleEdit : function(){
    this.setState({status: 'edit'});
  },
  handleCancel : function(){
    this.setState({
      status: '',
      id: this.props.member.id,
      fname: this.props.member.FirstName,
      lname: this.props.member.Surname,
      addr1: this.props.member.Address1,
      addr2: this.props.member.Address2,
      town: this.props.member.Town,
      county: this.props.member.County,
      nationality: this.props.member.Nationality,
      phone: this.props.member.phone_number,
      email: this.props.member.email,
      dob: this.props.member.DOB,
      gender: this.props.member.gender,
      imageUrl: this.props.member.imageUrl,
      type: this.props.member.Type,
      tino: this.props.member.TriathlonIrelandID
     });
  },
  handleSave : function(e) {
    console.log("handleSave" + this.state.id)
      e.preventDefault();
      var fname = this.state.fname.trim();
      var lname = this.state.lname.trim();
      var addr1 = this.state.addr1.trim();
      var addr2 = this.state.addr2.trim();
      var town = this.state.town.trim();
      var county = this.state.county.trim();
      var nationality = this.state.nationality.trim();
      var phone = this.state.phone.trim();
      var email = this.state.email.trim();
      var dob = this.state.dob.trim();
      var gender = this.state.gender;
      var imageUrl = this.state.imageUrl.trim();
      var type = this.state.type.trim();
      var tino = this.state.tino.trim();
      // check that reqiured fields are populated
      if (!fname || !lname || !phone || !email || !dob) {
        console.log("returning")
        return;
      }
      console.log("in the updatehandler")
      this.props.updateHandler(
        this.state.id,fname,lname,addr1,addr2,town,county,nationality,phone,email,dob,gender,imageUrl,type,tino);
      this.setState({status : ''} )
  },
  handleFnameChange : function(e){
    this.setState({
      fname: e.target.value
    })
  },
  handleLnameChange : function(e){
    this.setState({
      lname: e.target.value
    })
  },
  handleAddr1Change : function(e){
    this.setState({
      addr1: e.target.value
    })
  },
  handleAddr2Change : function(e){
    this.setState({
      addr2: e.target.value
    })
  },
  handleTownChange : function(e){
    this.setState({
      town: e.target.value
    })
  },
  handleCountyChange : function(e){
    this.setState({
      county: e.target.value
    })
  },
  handleNationalityChange : function(e){
    this.setState({
      nationality: e.target.value
    })
  },
  handlePhoneChange : function(e){
    this.setState({
      phone: e.target.value
    })
  },
  handleEmailChange : function(e){
    this.setState({
      email: e.target.value
    })
  },
  handleDobChange : function(e){
    this.setState({
      dob: e.target.value
    })
  },
  handleGenderChange : function(e){
    this.setState({
      gender: e.target.value
    })
  },
  handleImageUrlChange : function(e){
    this.setState({
      imageUrl: e.target.value
    })
  },
  handleTypeChange : function(e){
    this.setState({
      type: e.target.value
    })
  },
  handleTinoChange : function(e){
    this.setState({
      tino: e.target.value
    })
  },
  handleMemberType: function(e){
    this.setState({ type: e.target.value });
  },

  render: function(){
    var activeButtons = buttons.normal;
    var leftButtonHandler = this.handleEdit;
    var rightButtonHandler = this.handleDelete;

    var fields = [
      <td key={'fname'} >{this.state.fname}</td>,
      <td key={'lname'}>{this.state.lname}</td>,
      <td key={'addr1'}>{this.state.addr1}</td>,
      <td key={'addr2'}>{this.state.addr2}</td>,
      <td key={'town'}>{this.state.town}</td>,
      <td key={'county'}>{this.state.county}</td>,
      <td key={'nationality'}>{this.state.nationality}</td>,
      <td key={'phone'}>{this.state.phone}</td>,
      <td key={'email'}>{this.state.email}</td>,
      <td key={'dob'}>{this.state.dob}</td>,
      <td key={'gender'}>{this.state.gender}</td>,
      <td key={'imageUrl'}>{this.state.imageUrl}</td>,
      <td key={'type'}>{this.state.type}</td>,
      <td key={'tino'}>{this.state.tino}</td>
    ];
    if (this.state.status === 'edit') {
      activeButtons = buttons.edit;
      leftButtonHandler = this.handleSave;
      rightButtonHandler = this.handleCancel;
      fields = [
        <td key={'fname'}><input type="text" className="form-control"
            value={this.state.fname}
            onChange={this.handleFnameChange} />
        </td>,
        <td key={'lname'}><input type="text" className="form-control"
            value={this.state.lname}
            onChange={this.handleLnameChange} />
        </td>,
        <td key={'addr1'}><input type="text" className="form-control"
            value={this.state.addr1}
            onChange={this.handleAddr1Change} />
        </td>,
        <td key={'addr2'}><input type="text" className="form-control"
            value={this.state.addr2}
            onChange={this.handleAddr2Change} />
        </td>,
        <td key={'town'}><input type="text" className="form-control"
            value={this.state.town}
            onChange={this.handleTownChange} />
        </td>,
        <td key={'county'}><input type="text" className="form-control"
            value={this.state.county}
            onChange={this.handleCountyChange} />
        </td>,
        <td key={'nationality'}><input type="text" className="form-control"
            value={this.state.nationality}
            onChange={this.handleNationalityChange} />
        </td>,
        <td key={'phone'}><input type="text" className="form-control"
            value={this.state.phone}
            onChange={this.handlePhoneChange} />
        </td>,
        <td key={'email'}><input type="text" className="form-control"
            value={this.state.email}
            onChange={this.handleEmailChange} />
        </td>,
        <td key={'dob'}><input type="text" className="form-control"
            value={this.state.dob}
            onChange={this.handleDobChange} />
        </td>,
        <td key={'gender'}>
          {/*<input type="text" className="form-control"
            value={this.state.gender}
            onChange={this.handleGenderChange} /> */}
            <select value={this.state.gender} onChange={this.handleGenderChange}>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
        </td>,
        <td key={'imageUrl'}><input type="text" className="form-control"
            value={this.state.imageUrl}
            onChange={this.handleImageUrlChange} />
        </td>,
        <td key={'type'}>
          {/*<input type="text" className="form-control"
            value={this.state.type}
            onChange={this.handleTypeChange} /> */}
            <select value={this.state.type} onChange={this.handleMemberType}>
              <option value="Administrator">Administrator</option>
              <option value="user">Site User</option>
              <option value="senior">Senior</option>
              <option value="u23Race">U23 Race</option>
              <option value="juniorRace">Junior Race (17-19Yrs)</option>
              <option value="youth">Youth (15-16Yrs)</option>
              <option value="kids">Kids U15</option>
              <option value="training">Training</option>
              <option value="joint">Joint Triathlon and Swim Ireland</option>
            </select>
        </td>,
        <td key={'tino'}><input type="text" className="form-control"
            value={this.state.tino}
            onChange={this.handleTinoChange} />
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

        <td>
          <input type="button" className={'btn ' + activeButtons.leftButtonColor}
                    value={activeButtons.leftButtonVal}
                    onClick={leftButtonHandler} />
        </td>
        <td>
        <input type="button" className={'btn ' + activeButtons.rightButtonColor}
                  value={activeButtons.rightButtonVal}
                  onClick={rightButtonHandler} />
        </td>

      </tr>
    );
  }
});


var MembersList = React.createClass({
  getInitialState: function() {
    return {
      addMemberBodyVisible: false
    }
  },
  render: function(){
    //console.log('ContactsList');
    //console.log(this.props.contacts);
    //var contactRows = null; //TODO  initailize to an array of contact elements
    var memberRows = this.props.members.map(member => {
        return <MemberRow key={member.id} member={member}
            updateHandler={this.props.updateHandler}
            deleteHandler={this.props.deleteHandler}
        />
    });
    //console.log(this.contactRows);
    return (
      <tbody>
        {memberRows}
      </tbody>
    );
  }
});

var MembersTable = React.createClass({
  render: function(){
    //console.log("MembersTable");
    //console.log(this.props.allMembers);
    return(
      <table className="table table-striped table-hover table-condensed">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address 1</th>
            <th>Address 2</th>
            <th>Town</th>
            <th>County</th>
            <th>Nationality</th>
            <th>Phone Number</th>
            <th>E-mail</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Image</th>
            <th>Membership Type</th>
            <th>Triathlon Ireland #</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <MembersList members={this.props.allMembers}
            addHandler={this.props.addHandler}
            updateHandler={this.props.updateHandler}
            deleteHandler={this.props.deleteHandler}
        />
      </table>
    );
  }
});

//**********************************************************************************

// Members Component
var Members = React.createClass({
  getInitialState : function() {
    return {
      addMemberBodyVisible: false,
      orderBy: 'eventDate',
      orderDir: 'asc',
      queryText: '',
      members: [{}]
    };
  },

  componentDidMount: function(){
    api.getAllMembers().then(resp => {
      this.setState({
        members: resp.members
      });
    }).catch(console.error);
  },


  deleteMember_orig : function(key){
    api.deleteMember(key);
    this.setState({});
  },
  deleteMember : function(k) {
    console.log("deleting member id: " + k);
    api.deleteMember(k)
      .then(response => {
        return api.getAllMembers()
      })
      .then(response => {
        localStorage.clear();
        localStorage.setItem('members', JSON.stringify(response));
        this.setState({});
      });
  }, //deleteMember
  addMember : function(fn,ln,addr1,addr2,town,county,nationality,phone,email,dob,gender,imageUrl,type,tino){
    console.log("adding new member : " + fn + ' ' + ln);
    api.addMember(fn,ln,addr1,addr2,town,county,nationality,phone,email,dob,gender,imageUrl,type,tino);
    var p = api.getAllMembers();
    p.then( response => {
      localStorage.clear();
      localStorage.setItem('members', JSON.stringify(response)) ;
      this.setState({}) ;
    }) ;
    this.setState({
      addMemberBodyVisible: false,
    });
  }, //addMember

  updateMember : function(key,fn,ln,addr1,addr2,town,county,nationality,phone,email,dob,gender,imageUrl,type,tino) {
    console.log("updateMember" + key + fn);
    api.updateMember(key,fn,ln,addr1,addr2,town,county,nationality,phone,email,dob,gender,imageUrl,type,tino)
      .then ( response => {
         return api.getAllMembers()
      })
      .then( response => {
          localStorage.clear();
          localStorage.setItem('members', JSON.stringify(response)) ;
          this.setState( {}) ;
      })
      .catch( error => {console.log(`Update failed for ${error}` )}  ) ;
  }, // updateMember

  toggleAddMemberDisplay: function() {
    var tempVisibility = !this.state.addMemberBodyVisible;
    this.setState({
      addMemberBodyVisible: tempVisibility
    });
  }, //toggleAddMemberDisplay

  reOrder: function(orderBy, orderDir) {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir,
      queryText: ''
    });
  },

  searchMembers(q) {
    this.setState({
      queryText: q
    });
  },

  render: function(){
    console.log("Members Component");

    const filteredMembers = this.state.members;
console.log ("filteredMembers jim" + filteredMembers);

console.log(filteredMembers);

      // Filter the Members list by search text
//      var filteredMembers = members.filter(function(m) {
//        return m.Surname.toLowerCase().search(
//          this.state.queryText.toLowerCase())!== -1;
//        }.bind(this) );
//        //sort the filtered list by specified order
//        filteredMembers = _.sortBy(filteredMembers, this.state.orderBy);


    return(
      <div className="interface">
        <AddMember addHandler={this.addMember}
            bodyVisible={this.state.addMemberBodyVisible}
            handleToggleAddMember={this.toggleAddMemberDisplay}
        />
        <SearchMembers
          orderBy={this.state.orderBy}
          orderDir={this.state.orderDir}
          onReOrder={this.reOrder}
          onSearch={this.searchMembers}
        />
        <MembersTable allMembers={filteredMembers}
            addHandler={this.addMember}
            updateHandler={this.updateMember}
            deleteHandler={this.deleteMember}
        />


      </div>
    );
  }
});
export default Members;