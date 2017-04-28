import _ from 'lodash';

  const  reviews = [
         {  id: 1 ,
            title : 'India - Tiger population sees 30% increase.',
            link : 'http://www.bbc.com/news/world-asia-30896028',
            username : 'jbloggs',
            comments : [],
            upvotes : 10
          },
         { 
            id: 2,
            title : 'The button that is not.',
            link : 'http://blog.nuclearsecrecy.com/2014/12/15/button-isnt/',
            username : 'notme',
            comments : [],
            upvotes : 12
          },
          { 
            id: 3,
            title : 'Google Nears $1B Investment in SpaceX',
            link : null,
            username : 'notme',
            comments : [],
            upvotes : 12
          },
          { 
            id: 4,
            title : 'Coinbase Raises $75M from DFJ Growth, USAA, and More',
            link : 'http://blog.coinbase.com/review/108642362357/coinbase-raises-75m-from-dfj-growth-usaa-nyse',
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