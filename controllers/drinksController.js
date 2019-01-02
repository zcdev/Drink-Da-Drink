var express = require("express");

var router = express.Router();

var drink = require("../models/drink.js");

router.get("/", function(req, res) {
  drink.all(function(data) {
    var hbsObject = {
      drinks: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/drinks", function(req, res) {
  drink.create([
    "drink_name", "drink_up"
  ], [
    req.body.drink_name, req.body.drink_up
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/drinks/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  drink.update({
    drink_up: req.body.drink_up
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/drinks/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  drink.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
