import React from 'react';
//import ValidateableForm from 'react-form-validate';

var AddMember=React.createClass({
  getInitialState : function() {
    return {
      addMemberBodyVisible: false,
      fname: "",
      lname: "",
      addr1: "",
      addr2: "",
      town: "",
      county: "",
      nationality: "",
      phone: "",
      email: "",
      dob: "",
      gender: "male",
      imageUrl: "",
      type: "",
      tino: "",
      selectCounty: "Tipperary"
    };
  }, //getInitialState
  handleAdd: function(e) {
    e.preventDefault();
    this.props.addHandler(
          this.state.fname,
          this.state.lname,
          this.state.addr1,
          this.state.addr2,
          this.state.town,
          this.state.selectCounty,
          this.state.nationality,
          this.state.phone,
          this.state.email,
          this.state.dob,
          this.state.gender,
          this.state.imageUrl,
          this.state.memberType,
          this.state.tino
    );
    this.setState({

      fname: '',
      lname: '',
      addr1: '',
      addr2: '',
      town: '',
      county: '',
      nationality: '',
      phone: '',
      email: '',
      dob: '',
      gender: 'male',
      imageUrl: '',
      type: '',
      tino: '',
      selectCounty: "Tippreary",
      memberType: ''
    });
  }, // handleAdd
  toggleAddMemberDisplay: function() {
    this.props.handleToggleAddMember();
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
  handleSelectCounty: function(e){
    this.setState({ selectCounty: e.target.value })
  },
  handleMemberType: function(e){
    this.setState({memberType: e.target.value})
    //this.setState({memberType: memberType })
  },

  render: function() {
    // for inline style to hide or display form body
    var displayAddMemberBody={
      display: this.props.bodyVisible ? 'block': 'none'
    };

    return(
      <div className="panel panel-primary">
        <div className="panel-heading" onClick={this.toggleAddMemberDisplay} >
          <span className="glyphicon glyphicon-plus"></span> {this.props.registerUser ? "Register Details": "Add Member"}
        </div>
        <div className="panel-body" style={displayAddMemberBody}>
        
          {/*  This did not work - I suspect it reqiure just a simple from no embedded vars etc.
          <ValidateableForm  
            onSubmit={this.console}
            rules={{
              fname: {
                required:true
              }

            }}>
          */}
          <form role="form">

            <div className="form-group">


              <label >First Name</label>
              <input type="text" className="form-control" name="fname" id="fname" placeholder="First Name" value={this.state.fname} onChange={this.handleFnameChange}/>
              <label >Last Name</label>
              <input type="text" className="form-control" id="lname" placeholder="Last Name" value={this.state.lname} onChange={this.handleLnameChange}/>
              <label >Address 1</label>
              <input type="text" className="form-control" id="addr1" placeholder="Address 1" value={this.state.addr1} onChange={this.handleAddr1Change}/>
              <label >Adddress 2</label>
              <input type="text" className="form-control" id="addr2" placeholder="Address 2" value={this.state.addr2} onChange={this.handleAddr2Change}/>
              <label >Town</label>
              <input type="text" className="form-control" id="town" placeholder="Town" value={this.state.town} onChange={this.handleTownChange}/>
              <label >County</label>
              <input type="text" className="form-control" id="county" placeholder="County" value={this.state.county} onChange={this.handleCountyChange}/>
              <label >Nationality</label>
              <input type="text" className="form-control" id="nationality" placeholder="Nationality" value={this.state.nationality} onChange={this.handleNationalityChange}/>
              <label >Phone Number</label>
              <input type="text" className="form-control" id="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.handlePhoneChange}/>
              <label >Email</label>
              <input type="text" className="form-control" id="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
              <label >Date of Birth</label>
              <input type="text" className="form-control" id="dob" placeholder="Date of Birth" value={this.state.dob} onChange={this.handleDobChange}/>

              <div className="form-group">
                <label>Gender
                <select value={this.state.gender} onChange={this.handleGenderChange}>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
                </label>
              </div>

              <label >Image URL</label>
              <input type="text" className="form-control" id="imageUrl" placeholder="Image URL" value={this.state.imageUrl} onChange={this.handleImageURlChange}/>
              <div className="form-group">
                <label>Membership Type
                  <select value={this.state.memberType} onChange={this.handleMemberType}>
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
                </label>
              </div>

            {/*  <MemberType handleMemberTypeChange={this.props.handleMemberType} />   */}
              <label >Triathlon Ireland Membership No.</label>
              <input type="text" className="form-control" id="tino" placeholder="Triathlon Ireland Membership No." value={this.state.tino} onChange={this.handleTinoChange}/>

           </div>

            <button type="submit" className="btn btn-default" onClick={this.handleAdd}>{this.props.registerUser ? "Register Details": "Add Member"}</button>
          </form>
          {/* </ValidateableForm> */}
        </div>
      </div>
    );
  }
}); // AddMember

export default AddMember;