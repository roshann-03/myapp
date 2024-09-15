const express = require("express");
const serveStatic = require("serve-static");
const router = express.Router();

router.get(["/", "/home"], (req, res)=> {
    res.render("index");
})
module.exports = router;