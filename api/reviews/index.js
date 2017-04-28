import express from 'express';
import reviewsAPI from './reviews';
import mongoose from 'mongoose';
import Review from './reviewsModel';
import config from './../../config';

const router = express.Router();

// get all reviews
router.get('/', (req, res) => {
  Review.find((err, reviews) => {
    if(err) { return handleError(res, err); }
    return res.send(reviews);
  });
});

//Add a review
router.post('/', (req, res) => {
  const newReview = req.body;
  if (newReview){
    Review.create(newReview, (err, review) => {
      if(err) { return handleError(res, err); }
        return res.status(201).send({review});
      });
    }else{
      return handleError(res, err);
    }
});


//upvote a review
router.post('/:id/upvotes', (req, res) => {
  const id = req.params.id;
  Review.findById(id, function (err, review) { 
    if(err) { return handleError(res, err); }
      review.upvotes++;
      review.save(err => {
        if (err) {return handleError(res, err);}
        return res.status(201).send({review});
    });
  });
});

//get a review
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Review.findById(id, function (err, review) { 
    if(err) { return handleError(res, err); }
    return res.send({review});
  });       
});

//add comment
router.post('/:id/comments', (req, res) => {
   const id = req.params.id;
   const comment = req.body;
   Review.findById(id, (err, review)=>{ 
        if(err) { return handleError(res, err); }
        review.comments.push(comment);
        review.save(err => {
          if (err) {return handleError(res, err);}
           return res.status(201).send({review});
        });
  });
});


//upvote a comment on a review
router.post('/:postId/comments/:commentId/upvotes', (req, res) => {
   const commentId = req.params.commentId;
   const postId = req.params.postId;
   Review.findById( postId, (err, review)=>{
        if(err) { return handleError(res, err); }
           review.comments.id(commentId).upvotes++;
           review.save(err => {
           if (err) {return handleError(res, err);}
                return res.status(201).send({review});
           });
  });
});

export default router;