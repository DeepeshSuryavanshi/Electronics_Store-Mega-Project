import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { postData } from "../../../services/FeatchNodeServices";
export default function SerchComponent(){
  var navigate=useNavigate();
  const[text,settext]=useState('');
  var featchRecoad=async()=>{
    var result=await postData('useinter/product_filter',{text:text});
    return result.data
  }
  const handleSerch=()=>{
  featchRecoad().then((responce)=>{
    navigate('/productfilterscreen',{state:{result:responce}})
    // alert("hii"+JSON.stringify(responce))
  })
}


 return(
    <div style={{display:'flex',alignItems:'center',backgroundColor:'#FFFF',width:'100%',height:35,padding:3,borderRadius:5}} >
    <TextField
    hiddenLabel
    placeholder=" What you are looking For?"
    variant="standard"
    size="small"
    fullWidth
    onChange={(e)=>settext(e.target.value)}
    InputProps={{
        disableUnderline:true,
        endAdornment: (
          <InputAdornment position="start">
          <SearchIcon onClick={handleSerch} onPressEnter={handleSerch} />
          </InputAdornment>
        ),
      }}
      style={{backgroundColor:'#FFFF',border:'non',}}
    />     
     </div>
 )
}