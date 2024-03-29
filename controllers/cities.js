const express = require("express");
const router = express.Router();

const Cities = require("../models/City");

// Get list of cities
router.get("/", (req, res) => {
  Cities.find({}).then(city => {
    res.json(city);
  });
});

// From Edit page, edit comment action/route
router.put("/:city/:reviews_id", (req, res) => {
  Cities.findOne({ city: req.params.city }).then(city => {
    var review = city.reviews.id(req.params.reviews_id)
    review.set(req.body.reviews);
    city.save().then(function (savedReview) {
      res.send(savedReview);
    }).catch(function (err) {
      res.status(500).send(err)
    })
  });
});

// Worked with Ali for initial put route
// From show page, add comment
router.put("/:city", (req, res) => {
  Cities.findOne({ city: req.params.city }).then(city => {
      city.reviews.push(req.body.reviews)
      city.save()
      res.send(200)
      console.log(city);
  })
});

// https://stackoverflow.com/questions/24922548/node-mongoose-express-rest-api-get-subdocument-with-id
// From show page go to edit or delete comment route
router.get("/city/:city/edit/review/:reviews_id", (req, res) => {
    Cities.findOne(({ city: req.params.city }), (err, city) => {
        if (err)
            res.send(err);
        res.json(city.reviews.id(req.params.reviews_id));
    })
});

// From Edit page, delete comment action/route
router.put("/delete/:city/:reviews_id", (req, res) => {
  Cities.findOne({ city: req.params.city }).then(city => {
      city.reviews.remove(req.params.reviews_id)
      city.save()
      res.send(200)
      console.log(city);
  })
});

// Get reviews by city name
router.get("/:city/reviews", (req, res) => {
  Cities.findOne({ city: req.params.city }).then(reviews => {
    res.json(reviews.reviews);
  });
});

// Get a single city by city name (show page)
router.get("/:city", (req, res) => {
  Cities.findOne({ city: req.params.city }).then(city => {
    res.json(city);
  });
});

module.exports = router;