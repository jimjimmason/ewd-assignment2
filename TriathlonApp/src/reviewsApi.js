import axios from 'axios';

export const getAll = () => {
	console.log("reviewapi.js getAllReviews")
   return axios('/api/reviews')
              .then(resp => resp.data);
};

export const deleteReview = reviewId => {
  return axios.delete(`/api/reviews/${reviewId}`)
              .then(resp => resp.data);
}; 

export const upvote = reviewId => {
  return axios.post(`/api/reviews/${reviewId}/upvote`)
              .then(resp => resp.data);
};

export const getReview = reviewId => {
  return axios.get(`/api/reviews/${reviewId}`)
              .then(resp => resp.data);
};

export const add = (title, link, userName) => {
  console.log("reviewsapi.js addReview");
  return axios.post('/api/reviews', { 
    title: title,
    link: link,
    userName: userName
  })
  .then(resp => resp.data);
};
