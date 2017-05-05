import _ from 'lodash';
import uuid from 'uuid';


var members =  [
  {
    "id": uuid.v4(),
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
    "id": uuid.v4(),
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


    var MembersAPI = {
         deleteMember : function(k) {
            var promise = new Promise( (resolve,reject) => {
               var elements = _.remove(members,
                      function(member) {
                          return member.id == k;
                     });
                setTimeout(() => resolve(elements),10 );
            }) ;
            return promise ;

          },
         getAllMembers : function() {
           var promise = new Promise ((resolve,reject) => {
                   setTimeout(() => resolve(members),10 );
           }) ;
           return promise ;
         },

         addMember : function(fn,ln,addr1,addr2,town,county,nationality,phone
              ,email,dob,gender,imageUrl,type,tino) {
          var len = members.length ;
          var newL_len = members.push({
            id: uuid.v4(),
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
          return newL_len > len ;
        },  // addMember
        updateMember : function(key,fn,ln,addr1,addr2,town,county,nationality,phone,email,dob,gender,imageUrl,type,tino) {
           var promise = new Promise ((resolve,reject) => {
              setTimeout(() => {
                 var index = _.findIndex(members, function(member) {
                     return member.id === key;
                 } );
                if (index !== -1) {
                    members.splice(index, 1, {
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
                    resolve(true);
                } else {
                    reject(key) ;
                }
              },10) ;
           });
           return promise ;
        },  // update

      // END MEMBERS SECTION

   
    }

export default MembersAPI ;
