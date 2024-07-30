// import dependiceys
var express = require("express");
var router = express.Router();
// mySQL images
var pool = require("./pool");
var upload = require("./multer");
const fs = require("fs");

/* Category Database insert  */
router.post("/submit_category", upload.single("image"), function (req, res) {
  // alert("noad server Run data post .")
  //   ("data Body  form front_end ",req.body);
  //   ("req of file by body",req.file)
  try {
    pool.query(
      "insert into category (Categoryname,image) values(?,?)",
      [req.body.Categoryname, req.file.filename],
      function (error, result) {
        if (error) {
          ////("error category sumitedd,", error);
          res.status(200).json({
            status: false,
            message: "Database Error, please contact DataBase Admin!",
          });
        } else {
          //  console.log('result category sumitedd,',result);
          res
            .status(200)
            .json({ status: true, message: "Category Submited Sucessfully" });
        }
      }
    );
  } catch (e) {
    //console.log("server error in node Backend xxxxx", e);
    res.status(200).json({ status: false, message: "Server Error......!" });
  }
});

// Display All Category
router.get("/Dispaly_all_category", function (req, res) {
  try {
    pool.query("Select * from category", function (error, result) {
      if (error) {
      //  console.log("error category sumitedd,", error);
        res.status(200).json({
          status: false,
          message: "Database Error, please contact DataBase Admin!",
        });
      } else {
        //  console.log('result category sumitedd,',result);
        res.status(200).json({
          data: result,
          status: true,
          message: "Category Featch Sucessfully",
        });
      }
    });
  } catch (e) {
  //  console.log("server error in node Backend xxxxx", e);
    res.status(200).json({ status: false, message: "Server Error......!" });
  }
});

/* Category data categoryname update  */
router.post("/edit_category_data", function (req, res) {
  // alert("noad server Run data post .")
 // console.log("data Body  form front_end ", req.body);
  try {
    pool.query(
      "update category set Categoryname=? where Categoryid=? ",
      [req.body.Categoryname, req.body.Categoryid],
      function (error, result) {
        if (error) {
          //console.log("error category sumitedd,", error);
          res.status(200).json({
            status: false,
            message: "Database Error, please contact DataBase Admin!",
          });
        } else {
      //    console.log("result category sumitedd,", result);
          res
            .status(200)
            .json({ status: true, message: "Category UpDated Sucessfully" });
        }
      }
    );
  } catch (e) {
  //  console.log("server error in node Backend xxxxx", e);
    res.status(200).json({ status: false, message: "Server Error......!" });
  }
});

/* Category data picture update  */
router.post(
  "/edit_category_picture",
  upload.single("image"),
  function (req, res) {
    // alert("noad server Run data post .")
  //  console.log("data Body  form front_end ", req.body);
    try {
      pool.query(
        "update category set image=? where Categoryid=? ",
        [req.file.filename, req.body.Categoryid],
        function (error, result) {
          if (error) {
    //        console.log("error category sumitedd,", error);
            res.status(200).json({
              status: false,
              message: "Database Error, please contact DataBase Admin!",
            });
          } else {
      //      console.log("result category sumitedd,", result);
            res
              .status(200)
              .json({ status: true, message: "Image UpDated Sucessfully" });
          }
        }
      );
    } catch (e) {
      //console.log("server error in node Backend xxxxx", e);
      res.status(200).json({ status: false, message: "Server Error......!" });
    }
  }
);
/* Category data delete */
router.post("/delete_category", function (req, res) {
  // alert("noad server Run data post .")
 // console.log("data Body  form front_end ", req.body);
  try {
    pool.query(
      "delete from category where Categoryid=?",
      [req.body.Categoryid],
      function (error, result) {
        if (error) {
   //       console.log("error category sumitedd,", error);
          res.status(200).json({
            status: false,
            message: "Database Error, please contact DataBase Admin!",
          });
        } else {
     //     console.log("result category sumitedd,", result);
          fs.unlinkSync(`public/images/${req.body.image}`);
          res
            .status(200)
            .json({ status: true, message: "Category Deleted Sucessfully" });
        }
      }
    );
  } catch (e) {
   // console.log("server error in node Backend xxxxx", e);
    res.status(200).json({ status: false, message: "Server Error......!" });
  }
});

module.exports = router;
