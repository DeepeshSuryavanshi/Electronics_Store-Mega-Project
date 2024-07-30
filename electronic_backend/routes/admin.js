var express = require("express");
var router = express.Router();
// unlink sync
// const fs = require("fs");
// mySQL
var pool = require("./pool");
// var upload = require("./multer");
const e = require("express");

// Admin data featch
router.post("/admincheck", function (req,res) {
  console.log("responce for body", req.body);
  try {
    pool.query(
      "select * from admins where (emails=? or username=? or mobile=? ) and password=?",
      [req.body.emailid, req.body.emailid, req.body.emailid, req.body.password],
      function (error, result) {
        if (error) { console.log("errrrrorr ",error);
          res
            .status(200)
            .json({ status: false, message: "database error....!" });
        } else {
            console.log("result data zzxxzx",result)
          if (result.length == 1) {
            res
              .status(200)
              .json({ status: true, message: "SignIn successfully.",data:result[0]});
          } else {
            res
              .status(200)
              .json({ status: false, message: "Incorrect ID or Password!" });
          }
        }
      }
    );
  } catch (e) {
    res.status(200).json({ status: false, message: "DB Server error...!" });
  }
});

module.exports= router;