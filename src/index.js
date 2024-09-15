require("dotenv").config();
const express = require("express");
const app = express();
const home = require("../routes/home");
const about = require("../routes/about");
const contact = require("../routes/contact");
const myProjects = require("../routes/projects");
const resources = require("../routes/resources");
const db = require("../config/db-connection");
const path = require("path");
const bodyParser = require("body-parser");
const serverless = require("serverless-http");
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.set('views',path.join(__dirname,'views'));

app.use("/", home);
app.use("/about", about);
app.use("/contact", contact);
app.use("/projects", myProjects);
app.use("/resources", resources);

app.use("/.netlify/functions/api", home);

app.listen(PORT, () => {
  console.log(`app is running on port: ${PORT}`);
});
