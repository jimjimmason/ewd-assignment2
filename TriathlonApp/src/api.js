import axios from 'axios';

export const upvote = postId => {
  return axios.post(`/api/events/${eventId}/upvote`)
              .then(resp => resp.data);
};

export const getAll = () => {
	console.log("api.js getAll")
   return axios('/api/events')
              .then(resp => resp.data);
};

export const getPost = postId => {
  return axios.get(`/api/events/${eventId}`)
              .then(resp => resp.data);
};

export const add = (newTitle, newLink) => {
	console.log("api.js add");
  return axios.post('/api/events', { title: newTitle, link: newLink })
              .then(resp => resp.data);
};