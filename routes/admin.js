const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const router = express.Router();

const adminController = require("../controllers/admin");

// const products = [];

router.get("/add-product", adminController.getAddProduct);
router.post("/add-product", adminController.postAddProduct);

router.get("/products");

// router.get("/add-product", (req, res, next) => {
//   console.log("In Another Middleware1");
//   res.render("add-product", {
//     pageTitle: "Add Product",
//     path: "/admin/add-product",
//     activeProduct: true,
//     productCSS: true,
//   });
//   //   res.sendFile(path.join(rootDir, "views", "add-product.html"));
//   //   res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
//   //   res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
// });

// router.post("/add-product", (req, res, next) => {
//   console.log("In Another Middleware");
//   products.push({ title: req.body.title });
//   res.redirect("/");
// });

module.exports = router;
// exports.route = router;
// exports.products = products;
