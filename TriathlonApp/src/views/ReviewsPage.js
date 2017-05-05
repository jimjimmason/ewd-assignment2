import React from 'react';
import Reviews from '../Reviews';

var ReviewsPage = React.createClass({

  render: function(){
    //var bVisible = true;
    //var bRegisterUser = true;
console.log("ReviewsPage LSKDFLKJ")
    return (
      <div>
      <h1>Reviews Page</h1>
      <p>Add reviews on equipent, events, training etc here.</p>
      <Reviews />
      </div>
    );
  }
});

export default ReviewsPage;