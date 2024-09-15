const express = require("express");
const router = express.Router();

router.get("/",(req, res) => {
    res.send("Time nahi to nahi banaya!  <a href='/home'>home</a>  <a href='/about'>about</a>  <a href='/contact'>contact</a>");
    
});

module.exports = router;