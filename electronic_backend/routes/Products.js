// import dependiceys
var express = require("express");
var router = express.Router();
const fs = require("fs");
// mySQL images
var pool = require("./pool");
var upload = require("./multer");
const { route } = require("./Category");
const e = require("express");

// Featch All Brands
router.get("/Display_all_Products", function (req, res, next) {
  pool.query(
    "SELECT P.*,(select categoryname from category where Categoryid=P.Categoryid) as categoryname ,(select brandname from brands where brandsid=P.brandsid ) as brandname  FROM products P;",
    function (error, result) {
      if (error) {
        res
          .status(200)
          .json({ status: false, message: "DB error Check DBServer" });
      } else {
        res
          .status(200)
          .json({
            status: true,
            message: "Products Featch Sucessfully",
            data: result,
          });
      }
    }
  );
});

/* Product Database insert  */
router.post("/submit_Products", upload.single("image"), function (req, res) {
  // alert("noad server Run data post .")
  console.log("data Body  form front_end ", req.body);
  try {
    pool.query(
      "insert into products (categoryid,brandsid,productname,image) values(?,?,?,?)",
      [
        req.body.Categoryid,
        req.body.Brandsid,
        req.body.Productname,
        req.file.filename,
      ],
      function (error, result) {
        if (error) {
          console.log("error product sumitedd,", error);
          res
            .status(200)
            .json({
              status: false,
              message: "Database Error, please contact DataBase Admin!",
            });
        } else {
          console.log("result Product sumitedd,", result);
          res
            .status(200)
            .json({ status: true, message: "Product Submited Sucessfully" });
        }
      }
    );
  } catch (e) {
    console.log("server error in node Backend xxxxx", e);
    res.status(200).json({ status: false, message: "Server Error......!" });
  }
});

/*  data Brands update  */
router.post("/edit_product_data", function (req, res) {
  // alert("noad server Run data post .")
  console.log("data Body  form front_end ", req.body);
  try {
    pool.query(
      "update products set Categoryid=?,brandsid=?,productname=? where productid=?",
      [
        req.body.Categoryid,
        req.body.Brandsid,
        req.body.Productname,
        req.body.productid,
      ],
      function (error, result) {
        if (error) {
          console.log("error Product sumitedd,", error);
          res
            .status(200)
            .json({
              status: false,
              message: "Database Error, please contact DataBase Admin!",
            });
        } else {
          console.log("result category sumitedd,", result);
          res
            .status(200)
            .json({ status: true, message: "Product Updated Sucessfully" });
        }
      }
    );
  } catch (e) {
    console.log("server error in node Backend xxxxx", e);
    res.status(200).json({ status: false, message: "Server Error......!" });
  }
});

// Update Brand Logo
router.post("/edit_product_image", upload.single("image"), function (req, res) {
  // alert("noad server Run data post .")
  console.log("data Body  form front_end ", req.body);
  console.log("data File  form front_end ", req.file.filename);
  try {
    pool.query(
      "update products set image=? where productid=? ",
      [req.file.filename, req.body.productid],
      function (error, result) {
        if (error) {
          console.log("error Product sumitedd,", error);
          res
            .status(200)
            .json({
              status: false,
              message: "Database Error, please contact DataBase Admin!",
            });
        } else {
          console.log("result Product sumitedd,", result);
          fs.unlinkSync(`public/images/${req.body.image2}`);
          res
            .status(200)
            .json({ status: true, message: "Image UpDated Sucessfully" });
        }
      }
    );
  } catch (e) {
    console.log("server error in node Backend xxxxx", e);
    res.status(200).json({ status: false, message: "Server Error......!" });
  }
});

// Brands Delete API s
router.post("/Product_Delete", function (req, res, next) {
  try {
    console.log("data frm front-end", req.body);
    pool.query(
      "Delete from products where productid=?",
      [req.body.productid],
      function (error, result) {
        if (error) {
          console.log("error in Delete Data brand", error);
          res
            .status(200)
            .json({ status: false, message: "product not Deleted" });
        } else {
          console.log("product Delete Reasult", result);
          fs.unlinkSync(`public/images/${req.body.image}`);
          res
            .status(200)
            .json({ status: true, message: "Product was Deleted" });
        }
      }
    );
  } catch (e) {
    res.status(200).json({ status: false, message: "Server error !" });
  }
});

// select product by category and brandid
router.post("/featch_product_for_detail",function(req,res,next){
  console.log("Body responce hello body responce ",req.body);
  pool.query('SELECT * FROM products where Categoryid=? and brandsid=?',[req.body.categoryid,req.body.Brandid],
  function(error,result){
    if(error)
    {console.log("error select brands ",error);
      res.status(200).json({status:false,message:'DB error Check DBServer'});
    }
    else
    { console.log("result of select brands ",result);
      res.status(200).json({status:true,message:'product Featch selected Sucessfully',data:result});
    }
  })

})
module.exports = router;
