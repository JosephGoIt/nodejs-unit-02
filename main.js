const express = require("express"),
    app = express();

app.use(express.static("public"));
const layouts = require("express-ejs-layouts");
app.set("view engine", "ejs");
app.use(layouts);

const homeController = require("./controllers/homeController");

app.set("port", process.env.PORT || 3000);

app.get("/" , (req, res) => {
    res.send("Welcome to Confetti Cuisine!");
});

app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());

app.listen(app.get("port"), () => {
    console.log(
        `Server running at http://localhost:${app.get(
            "port"
        )}`
    );
});