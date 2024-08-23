import React from "react"
import {useState,useEffect} from 'react'
import { Button } from "@mui/material"
import { serverURL,getData,postData } from "../../../services/FeatchNodeServices"
export default function ProductColorDetails(props)
{  
   var product=props.product 
    const [selectedId,setSelectedId]=useState(product.productdetailsid)
    const [details,setDetails]=useState([])
   
     const handleChangeProduct=(id)=>{
      // fetchDetails(id)
     }
     const fetchProductDetails=async()=>{
        var result=await postData('useinter/fetch_product_details_by_productid',{productid:product.productid})
        setDetails(result.data) 
       }
      useEffect(function(){
       fetchProductDetails()
    
      },[])


    const showDetails=()=>{
        return details.map((item)=>{
          return  (
          <div onClick={()=>handleChangeProduct(item?.productdetailsid)} style={{ color: '#fff', fontSize: '12px', marginTop: '3%'}}>
          <Button style={{ color: '#fff', borderColor:selectedId==item.productdetailsid?'#12daa8':'gray', fontSize: 12, padding: '8px 10px 8px', fontWeight: 'bold', textTransform: 'none' }} size='small' variant='outlined'>{item.color}</Button>
          </div>
          )
         })
     }
     return(
     <>
     {showDetails()}
     </>
     )
}