var express = require('express');
var router = express.Router();
var Pool=require('./pool')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//display wishlist
router.get('/wishlist',function(req,res){
  console.log("Data from body",req.body);
  try {
    Pool.query("select * from wishlist where mobileno=? or userid=? or email=?",[req.body.mobileno,req.body.userid,req.body.email],
    function(error,result)
    {
       if(error)
       {
        // console.log("error is here ",error);
        res.status(200).json({status:false,message:"no product found"});
       }
       else
       { 
        // console.log("resul of the wish list",result);
        res.status(200).json({status:true,message:'product find in wish list ',data:result})
       }
    }
    )

  } catch (error) {
    res.status(404).json({status:false,message:'big error is here lets play'})
  }
})
//add wish list 
router.post('/addwishlist',function(req,res,next){
  try {
  //  console.log("Data from body ",req.body);
   Pool.query('insert into wishlist (productdetails, mobileno, username, email, userid) value(?,?,?,?,?)',[req.body.productdetails, req.body.mobileno, req.body.username, req.body.email, req.body.userid],
  function(error,result){
    if(error){
      // console.log("error is there",error);
      res.status(500).json({status:false,message:'product not edit in wish lst',})
    }
    else{
      // console.log("Sucess fully Add wish LIst ",result);
      res.status(500).json({status:true,message:'product edit in wish lst',data:result})
    }
  }
  )    
  } catch (error) {
  //  console.log("big error is here let's play ",error); 
    res.status(404).json({status:false,message:'big erro are throw',data:error})
  }
})
module.exports = router;
