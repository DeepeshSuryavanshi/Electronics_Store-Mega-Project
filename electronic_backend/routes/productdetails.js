var express = require("express");
var router = express.Router();
// unlink sync
const fs = require("fs");
// mySQL
var pool = require("./pool");
var upload = require("./multer");
const e = require("express");
const { route } = require("./Category");

// Featch all productdetails
router.get("/Display_productdetails", function (req, res, next) {
  //console.log("Display Productdetaile API call ");
  try {
    pool.query("SELECT P.*,(select categoryname from category where Categoryid=P.categoryid)as categoryname ,(select Brandname from brands where brandsid=P.brandid)as brandname ,(select productname from products where productid=P.productid)as productname  from productdetails P;"
    ,function (error, result) {
      if (error) {
        //console.log("error on Productdetails/Display_productdetails", error);
        res.status(200).json({
          status: false,
          message: "Database Error Pls Contact ADMIN!",
        });
      } else {
        //console.log("result on Productdetails/Display_productdetails", result);
        res.status(200).json({
          status: true,
          message: "Productdetails Featch Sucessfully.",
          data: result,
        });
      }
    });
  } catch (e) {
    console.log("server error in node Backend xxxxx", e);
    res.status(200).json({ status: false, message: "Server Error......!" });
  }
});
// submit API productdetails
router.post("/submit_productdetails", upload.any(), function (req, res) {
  try {
    console.log("Data from front-end", req.body);
    console.log("data of image file", req.files);
    var filenames = req.files.map((file,index) => file.filename);
    pool.query(
      "insert into productdetails (categoryid, brandid, productid, modelno, description, color, price, offerprice, HSNcode, stock, status,rating,image) value(?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        req.body.categoryid,
        req.body.brandid,
        req.body.productid,
        req.body.modelno,
        req.body.description,
        req.body.color,
        req.body.price,
        req.body.offerprice,
        req.body.HSNcode,
        req.body.stock,
        req.body.status,
        req.body.rating,
        filenames+'',
      ],
      function (error, result) {
        if (error) {
          console.log("error of submit productdetails", error);
          res
            .status(200)
            .json({ status: false, message: "Productdetails not Submit!" });
        } else {
          console.log("result of submit productdetails", result);
          res.status(200).json({
            status: true,
            message: "Productdetails submit Sucessfully.",
            data: result,
          });
        }
      }
    );
  } catch (e) {
    console.log("server error in node Backend xxxxx", e);
    res.status(200).json({ status: false, message: "Server Error......!" });
  }
});

module.exports = router;
