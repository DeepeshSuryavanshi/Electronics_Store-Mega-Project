import { useState,useEffect } from "react";
import { serverURL,postData,getData } from "../../../services/FeatchNodeServices";
export default function CartProduct(props){
    var  product
    useEffect(function(){
        props.data.map((item)=>{
        fetchDetails(item)
        })
    },[props])

    const fetchDetails=async(id)=>{
        var result=await postData('useinter/display_productdetails_by_id',{productdetailsid:id})
        product=(result.data)
       }
   
     
  const Productlist=()=>{
    return product?.map((item)=>{
        return(
            <div>{item.productname}</div>
        );
    })
  }
     


 return(
   <div>
  {product}
   </div>
 )

}