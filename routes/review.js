const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");

const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {isLoggedIn} = require("../middleware.js");
const {validateReview} = require("../middleware.js");
const {isReviewAuthor} = require("../middleware.js");


const reviewController = require("../controllers/review.js");


// POST route for creating a new review
router.post("/",
isLoggedIn,
 validateReview, 
 wrapAsync(reviewController.postReview));

// DELETE route for deleting a review
router.delete("/:reviewId",
isLoggedIn,
isReviewAuthor, 
wrapAsync(reviewController.deleteReview));


module.exports = router;
