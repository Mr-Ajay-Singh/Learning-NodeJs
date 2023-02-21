const path = require("path");
const express = require("express");
const rootDir = require("../util/path");
const router = express.Router();
const shopController = require("../controllers/shop");
// const adminData = require("./admin");

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/cart", shopController.getCart);

router.get("/checkout", shopController.getCheckout);

// router.get("/", (req, res, next) => {
//   console.log(adminData.products);
//   const products = adminData.products;
//   res.render("shop", {
//     prods: products,
//     docTitle: "Shop",
//     path: "/shop",
//     pageTitle: "Shop",
//     hasProducts: products.length > 0,
//     activeShop: true,
//     productCSS: true,
//   });
//   // res.render("shop", {
//   //   prods: products,
//   //   docTitle: "Shop",
//   //   path: "/shop",
//   //   pageTitle: "Shop",
//   // });
//   //   res.sendFile(path.join(rootDir, "views", "shop.html"));
//   //   res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
//   //   res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
//   //   res.send("<h1>Hello From Express</h1>");
// });

module.exports = router;
