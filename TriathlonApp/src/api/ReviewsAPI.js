import _ from 'lodash';

var posts = null ;
if ( localStorage.getItem('posts') ) {
     posts = JSON.parse(localStorage.getItem('posts')) ;
     localStorage.setItem('updated',false ) ;
} else { 
    posts = [
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
  localStorage.setItem('posts', JSON.stringify(posts)) ;
  localStorage.setItem('updated', false ) ;
}
 
 var ReviewsAPI = {
     getAll : function() {
        return posts ;
      },
     add : function(t,l) {
          var id = 1 ;
          var last = _.last(posts) ;
          if (last) {
             id = last.id + 1 ;
          }
          var len = posts.length ;
          var newL_len = posts.push({ 
          	'id': id,  
             title: t, link : l, username: '', comments: [], upvotes: 0 }) ;
           localStorage.setItem('updated', true ) ;
           return newL_len > len ;
          },
     upvote : function(id) {
         var index = _.findIndex(posts, 
         	  function(post) {
                return post.id === id;
              } );   
         if (index !== -1) {                 
              posts[index].upvotes += 1 ;
              localStorage.setItem('updated', true ) ;
              return true ;
            }
          return false ;
       },
     getPost : function(id) {
         var result = null ;
         var index = _.findIndex(posts, function(post) {
                return post.id === id;
                } );     
         if (index !== -1) {                 
            result = posts[index];
                }
        return result ;
        },
     addComment : function(postId,c,n) {
        var post = this.getPost(postId ) ;
        var id = 1 ;
        var last = _.last(post.comments) ;
        if (last) {
           id = last.id + 1 ;
        }
        post.comments.push({ 'id': id,  
                 comment: c , author: n, upvotes: 0 } ) ;
        localStorage.setItem('updated', true ) ;
        },
     upvoteComment : function(postId,commentId) {
        var post = this.getPost(postId ) ;
        var index = _.findIndex(post.comments, function(c) {
                  return c.id === commentId;
                } );  
         if (index !== -1) {                 
             post.comments[index].upvotes += 1 ;
             localStorage.setItem('updated', true ) ;
            }

      },
      persist: function() {
        if (localStorage.getItem('updated') === 'true') { 
          localStorage.setItem('updated',false ) ;
          localStorage.setItem('posts', JSON.stringify(posts)) ;
        }
      }
  }

export default ReviewsAPI;