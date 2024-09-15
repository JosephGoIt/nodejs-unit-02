const express = require("express"),
    app = express();

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

// router.get("/courses.html", (req, res) => {
//     res.writeHead(httpStatus.OK, contentTypes.html);
//     utils.getFile("views/courses.html", res);
// });

// router.get("/contact.html", (req, res) => {
//     res.writeHead(httpStatus.OK, contentTypes.html);
//     utils.getFile("views/contact.html", res);
// });

// router.post("/" , (req, res) => {
//     res.writeHead(httpStatus.OK, contentTypes.html);
//     utils.getFile("views/thanks.html", res);
// });

// router.post("/graph.png" , (req, res) => {
//     res.writeHead(httpStatus.OK, contentTypes.png);
//     utils.getFile("public/images/graph.png", res);
// });

// router.post("/people.jpg" , (req, res) => {
//     res.writeHead(httpStatus.OK, contentTypes.jpg);
//     utils.getFile("public/images/people.jpg", res);
// });

// router.post("/product.jpg" , (req, res) => {
//     res.writeHead(httpStatus.OK, contentTypes.jpg);
//     utils.getFile("public/images/product.jpg", res);
// });

app.listen(app.get("port"), () => {
    console.log(
        `Server running at http://localhost:${app.get(
            "port"
        )}`
    );
});