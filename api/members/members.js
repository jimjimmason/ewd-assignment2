import _ from 'lodash';
//import uuid from 'uuid';


var members =  [
  {
    "id": 1,
    "FirstName": "Jim",
    "Surname": "Mason",
    "Address1": "",
    "Address2": "",
    "Town": "Thurles",
    "County": "Co. Tipperary",
    "Nationality": "Irish",
    "phone_number": "0881234567",
    "email": "jmason@eircom.net",
    "DOB" : "1965-10-10",
    "gender" : "male",
    "imageUrl": "",
    "Type": "Administrator",
    "TriathlonIrelandID": "1965IE12431244",
    "Role": "admin"
  },
  {
    "id": 2,
    "FirstName": "Brian",
    "Surname": "O'Brien",
    "Address1": "New Street",
    "Address2": "Some Road",
    "Town": "Thurles",
    "County": "Co. Tipperary",
    "Nationality": "Irish",
    "phone_number": "0885568648",
    "email": "bobrien@somewhere.net",
    "DOB" : "1986-07-07",
    "gender": "male",
    "imageUrl":"",
    "Type": "race",
    "TriathlonIrelandID": "",
    "Role": "member"
  }
];


const membersAPI = {

  getAllMembers : () => {
      return members;
  },

   
  deleteMember : function(id) {
    var elements = _.remove(members,
        function(member) {
          return member.id == id;
        }
      );
    return elements;
  }, // delete



  addMember : function(fn,ln,addr1,addr2,town,county,nationality,phone
             ,email,dob,gender,imageUrl,type,tino) {
      let id = 1;
      const last = _.last(members);
      if (last) { id = last.id + 1; }
      let len = members.length ;
      let newL_len = members.push({ 
          'id': id,
          FirstName: fn,
          Surname : ln,
          Address1: addr1,
          Address2: addr2,
          Town: town,
          County: county,
          Nationality: nationality,
          phone_number: phone,
          email: email,
          DOB : dob,
          gender: gender,
          imageUrl: imageUrl,
          Type: type,
          TriathlonIrelandID: tino
        }) ;
        return newL_len > len;
      }, // addMember 

  updateMember : function(id,fn,ln,addr1,addr2,town,county,nationality,phone
             ,email,dob,gender,imageUrl,type,tino) {
    let result = false;
      var index = _.findIndex(members, member => {
        return member.id === id;
      });
      if (index !== -1) {
        members.splice(index, 1, {
          'id': id,
          FirstName: fn,
          Surname : ln,
          Address1: addr1,
          Address2: addr2,
          Town: town,
          County: county,
          Nationality: nationality,
          phone_number: phone,
          email: email,
          DOB : dob,
          gender: gender,
          imageUrl: imageUrl,
          Type: type,
          TriathlonIrelandID: tino
        });
        result = true;
      };
      return result;
  } // updateMember 
 
} //membersAPI

export default membersAPI ;
