var express = require("express");
var router = express.Router();
var pool=require('./pool');
var upload=require('./multer');
const fs = require('fs');

// routers
router.post("/Display_all_Products_for_menu", function (req, res, next) {
    console.log('data from front ',req.body)
     pool.query(
      "SELECT * FROM products where Categoryid=?",[req.body.categoryid],
      function (error, result) {
        if (error) {
            console.log('error',error)
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

  router.post('/fetch_product_details_by_productid', function (req, res) {
    try {
        pool.query('SELECT P.*,(select categoryname from category where Categoryid=P.categoryid)as categoryname ,(select Brandname from brands where brandsid=P.brandid)as brandname ,(select productname from products where productid=P.productid)as productname  from productdetails P where P.productid=?',[req.body.productid], 
        function (error, result) {
            if (error) {
              console.log(error);
              res.json({ status: false, message: 'Database Error!' })
            }
            else {
                res.json({ status: true, data:result})
            }
        })
    } 
    catch (e) {
      console.log(e);
        res.json({ status: false, message: 'Server Error!' })
    }
})

// product display 
router.post('/display_productdetails_by_id', function (req, res) {
  try {
    // console.log('bodydata',req.body);
      pool.query('SELECT P.*,(select categoryname from category where Categoryid=P.categoryid)as categoryname ,(select Brandname from brands where brandsid=P.brandid)as brandname ,(select productname from products where productid=P.productid)as productname  from productdetails P where P.productdetailsid=?;',[req.body.productdetailsid], 
      function (error, result) {
          if (error) {
              console.log(error)
              res.json({ status: false, message: 'Database Error!' })
          }
          else {
              console.log(result)
              res.json({ status: true, message:"Data featch sucessfully",data: result })
          }
      })
  }
  catch (e) {
    console.log(e);
      res.json({ status: false, message: 'Server Error!' })
  }
})

router.post('/order_submit',function(req,res){
  try{
    var q='insert into orders (orderdate, productdetailid, qty, paymentstatus, deliverystatus, amount, mobileno, emailid,username, adderss) values ?'
    pool.query(q,
    [
      req.body.cart.map((item)=>{
      return(
        [new Date(),
          item.productdetailsid,
          item.qty,
          req.body.paymentstatus,
          'Undelivered',
          req.body.amount,
          req.body.user.mobileno,
          req.body.user.emailid,
          req.body.user.username,
          req.body.user.addres])
    })
  ], 
    function (error, result) {
        if (error) {
            // console.log(error)
            res.json({ status: false, message: 'Some Error!' })
        }
        else {
            // console.log(result)
            res.json({ status: true, message:"Order Submited Sucessfully!",data: result })
        }
    })
  }
  catch(e)
  { 
    // console.log('DB error Sign >>>>>>>>',e)
    res.json({ status: false, message:"Databser error DB MySQL?" })
  }

})

////////serch  product bar  \\\\\\\\\
router.post('/product_filter', function (req, res) {
  try {
     console.log('bodydata',req.body);
     var q=`select P.productname,P.image as mainpicture,PD.*,B.* from productdetails PD, products P,brands B where B.brandsid=P.brandsid and B.brandsid=
     PD.brandid and B.categoryid=P.categoryid and B.categoryid=PD.categoryid and PD.productid=P.productid and 
     (PD.modelno like '%${req.body.text}%' or P.productname  like '%${req.body.text}%' or B.brandname like '%${req.body.text}%')`
     console.log('query of featching  data of MySQL DB XXXXXXXXXX',q)
     pool.query(q, 
      function (error, result) {
          if (error) {
              // console.log(error)
              res.json({ status: false, message: 'Database Error!' })
          }
          else {
              console.log(result)
              res.json({ status: true, message:"Data featch sucessfully",data:result })
          }
      })
  }
  catch (e) {
    // console.log('error DB',e);
      res.json({ status: false, message: 'Server Error!' })
  }
})

module.exports = router;
