import express from 'express';
import reviewsAPI from './reviews';

const router = express.Router();

// get all reviews
router.get('/', (req, res) => {
  console.log("/api/reviews/index.js request all Reviews");
  const reviews = reviewsAPI.getAll();
  console.log(reviews);
  res.send({ reviews: reviews });
});



//Add a review
router.post('/', (req, res) => {

    const newReview = req.body;
    let result = null;
    if (newReview){
         result = reviewsAPI.add(newReview.title, newReview.link);
    }    
    if (result>0){
       return    res.status(201).send({message: "Review Created", id: result});
      }
        return   res.status(400).send({message: "Unable to find Review in request. No Review Found in body"});
     
});

//upvote a review
router.post('/:id/upvote', (req, res) => {
   const id = req.params.id;
   const result = reviewsAPI.upvote(id);
             if (result) {
                 
                 return  res.status(200).send({message: `Review ${id} Upvoted`}); 
                }
            return    res.status(404).send({message: `Unable to find Review ${id}`});
           
});

//get review
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const review = reviewsAPI.getReview(id);

       if(review){
               return   res.status(200).send(review);
              }
              return    res.status(404).send({message: `Unable to find Review ${id}`}); 
     
});

//add comment
router.post('/:id/comments', (req, res) => {
   const id = req.params.id;
   const comment = req.body;
   console.log(id);
   const result = reviewsAPI.addComment(id,comment.comment, comment.author);
 if (result){
            return  res.status(200).send({message: `Comment added to Review ${id}`}); 
      }
            return   res.status(400).send({message: `Unable to add comment to Review ${id}`});
            
});

//add comment
router.get('/:id/comments', (req, res) => {
   const id = req.params.id;
   const comment = req.body;
   console.log(id);
   const result = reviewsAPI.getComments(id,comment.comment, comment.author);
 if (result){
            return  res.status(200).send({message: `Comment added to Review ${id}`}); 
      }
            return   res.status(400).send({message: `Unable to add comment to Review ${id}`});
            
});

//upvote comment
router.post('/:reviewId/comments/:commentId/upvote', (req, res) => {
   const commentId = req.params.commentId;
   const reviewId = req.params.reviewId;
   const result = reviewsAPI.upvoteComment(reviewId, commentId);
             if (result) {
                      return res.status(200).send({message: `Comment ${commentId} on Review ${reviewId} Upvoted`}); 
                }
            return res.status(404).send({message: `Unable to find comment ${commentId} on Review ${reviewId}`});
             
});

export default router;