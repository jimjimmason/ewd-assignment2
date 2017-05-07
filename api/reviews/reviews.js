import _ from 'lodash';

  const  reviews = [
     {  id: 1 ,
        title : 'Wiggle - online triathlon store',
        link : 'http://www.wiggle.co.uk/triathlon/',
        review: 'Good value for money and Im impressed all round with the service. ',
        username : 'jbloggs',
        comments : [],
        upvotes : 10
      },
     { 
        id: 2,
        title : 'Kuota Kyron',
        link : 'http://blog.nuclearsecrecy.com/2014/12/15/button-isnt/',
        review: 'The Kryon is a good bike and is well made with neat lines and internal cable routing',
        username : 'Bob',
        comments : [],
        upvotes : 12
      },
      { 
        id: 3,
        title : 'For Sale: MAKO MENS NAMI TRIATHLON WETSUIT',
        link : null,
        review: '€95 (175 new) I year old. see review here http://www.irishfit.eu/shop/triathlon/mens-triathlon-wetsuits/mako-mens-nami-triathlon-wetsuit',
        username : 'notme',
        comments : [],
        upvotes : 12
      },
      { 
        id: 4,
        title : 'Swim, Bike, Run: Our Triathlon Story',
        link : 'https://www.amazon.co.uk/Swim-Bike-Run-Triathlon-Story/dp/0241965845/ref=sr_1_1?ie=UTF8&qid=1490820635&sr=8-1&keywords=triathlon+books  ',
        review: 'This is the story of how two skinny lads from west Yorkshire became the best triathletes in the world.',
        username : 'psmith',  
        comments : [],
        upvotes : 2
      }
  ] ;
   

     const reviewsAPI = {
         getAll : () => {
            console.log("/api/reviews/reviews.js getAll");
            return reviews ;
          },
         add : (t,l) => {
              let id = 1 ;
              const last = _.last(reviews) ;
              if (last) {
                 id = last.id + 1 ;
              }
              let len = reviews.length ;
              let newL_len = reviews.push({ 
                  'id': id,  
                 title: t, link : l, username: '', comments: [], upvotes: 0 }) ;
               return newL_len > len?id:-1;
              },
         upvote : (id) => {
             const index = _.findIndex(reviews, 
                   function(review) {
                    return review.id == id;
                  } );   
             if (index !== -1) {                 
                  reviews[index].upvotes += 1 ;
                  return true ;
                }
              return false ;
           },
         getReview : (id) => {
            let result = null ;
            const index = _.findIndex(reviews, 
                   function(review) {
                    return review.id == id;
                  } );     
             if (index !== -1) {                
                result = reviews[index];
                    }
            return result;            
            },
         addComment :(reviewId,c,n) => {
            let result = false;
            const review = stubAPI.getreview(reviewId);
            let id = 1 ;
            if (review){
            const last = _.last(review.comments) ;
            if (last) {
               id = last.id + 1 ;
            }
            review.comments.push({ 'id': id,  
                     comment: c , author: n, upvotes: 0 } ) ;
            result = true;
            }
          return result;
            },
         upvoteComment : (reviewId,commentId) => {
            let result = false;
            const review = stubAPI.getreview(reviewId) ;
            if (review){
            const index = _.findIndex(review.comments, function(c) {
                      return c.id == commentId;
                    });  
             if (index !== -1) {                 
                 review.comments[index].upvotes += 1 ;
                 result = true
                }
              }
            return result;
          }
      }
export default reviewsAPI ;