import reviewsModel from './api/reviews/reviewsModel';

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



  export const loadReviews = () =>{reviewsModel.find({}).remove(function() { 
      reviewsModel.collection.insert(reviews, (err,docs)=>{
      if (err){
        console.log(`failed to Load Event Data`);
      }
      else{
        console.info(`${reviews.length} reviews were successfully stored.`);
      }
    })
  });
}