// http , https, fs, path, os

const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const app = express();
const errorController = require("./controllers/error");

// app.engine(
//   "handlebars",
//   expressHbs({
//     layoutDir: "views/layouts",
//     defaultLayout: "main-layout",
//     extname: "handlebars",
//   })
// );
// app.engine("handlebars", expressHbs());
app.set("view engine", "ejs");
// app.set("view engine", "handlebars");
// app.set("view engine", "pug");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
// const adminData = require("./routes/admin");

// const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use(adminRoutes);
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// app.use((req, res, next) => {
//   res.status(404).render("404", { pageTitle: "Page Not Found" });
//   // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
// });

// app.use((req, res, next) => {
//   res.status(404).send("<h1>Page Not Found</h1>");
// });

// app.use((req, res, next) => {
//   console.log("In The Middleware");
//   next();
// });

// app.use("/add-product", (req, res, next) => {
//   console.log("In Another Middleware");
//   res.send("<h1>Add Product Page</h1>");
// });

app.listen(3000);
