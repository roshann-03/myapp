const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const People = require("../models/people");
router
  .route("/")
  .get((req, res) => {
    res.render("contact");
  })
  .post(async (req, res) => {
    try {
      const { name, email, message } = req.body;
      const searchPeople = await People.findOne({email:email});
      if(searchPeople){
       return res.json({ success: false, message: "User already registered!" });
      }
      const people = new People({ name, email, message });
      await people.save();
      // Send a success response to the client
      res.json({ success: true, message: "Data saved successfully!" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Error saving data" });
    }
  });
module.exports = router;
