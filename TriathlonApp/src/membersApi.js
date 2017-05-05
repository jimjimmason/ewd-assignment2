import axios from 'axios';

export const getAllMembers = () => {
	console.log("api.js getAllMembers")
   return axios('/api/members')
              .then(resp => resp.data);
};

export const deleteMember = memberId => {
  return axios.event(`/api/members/${memberId}`)
              .then(resp => resp.data);
};

export const addMember = (fn,ln,addr1,addr2,town,county,nationality,phone,email,dob,gender,imageUrl,type,tino) => {
  console.log("api.js addEvent");
  return axios.event('/api/events', { 
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
  })
  .then(resp => resp.data);
};

export const updateMember = (id,fn,ln,addr1,addr2,town,county,nationality,phone,email,dob,gender,imageUrl,type,tino) => {
  console.log("membersapi.js updateMember");
  return axios.event('/api/members', { 
    id: id,
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
  })
  .then(resp => resp.data);
};