// require("babel-register");
const express = require("express");
const ejs = require("ejs");
const body_parser = require("body-parser");
const session = require("express-session");
const path = require("path");

const app = express();
const http = require("http").createServer(app);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(body_parser.json({limit: "5mb"}));
app.use(body_parser.urlencoded({ extended: true }));

app.use("/*", (req, res, next) => {

    req.templateSettings = {
        config: {
            root: __dirname,
            url: "/",
        }
    };

    next();
});

app.all("/", require("./routes/home"));
app.use("/apis", require("./apis/controller"));

http.listen((process.env.PORT || 3000), (err, req, res) => {
    if (err) {
        console.log("Cannot connect on PORT",err);
        return;
    }
    console.log("Server Started on localhost " + (process.env.PORT || "3000"));
});