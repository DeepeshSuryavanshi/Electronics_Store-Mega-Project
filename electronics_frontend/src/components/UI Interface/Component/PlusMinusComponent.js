import { useState,useEffect } from "react";
import { Button,Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Navigate, useNavigate } from "react-router-dom";

export default function PlusMinusComponent(props)
{   
    useEffect(function(){
    setcount(props.value)
    },[props])
    //Style
    const theme = useTheme();
    const matches_md = useMediaQuery(theme.breakpoints.down("md"));
    const matches_sm = useMediaQuery(theme.breakpoints.down("sm"));
    var Navigate=useNavigate()
    const [count,setcount]=useState(0)
    
    const handleAdd=()=>{
    var c=count+1
    setcount(c)
    props.onChange(c)
    
    }
    const handleMinus=()=>{
    var c=count-1
    if(c>=0)
    setcount(c)
    props.onChange(c)
    }


    return(
        <div >
            {count==0?
             
         <div style={{ display:'flex', width:'100%' }}>
            <Button  style={{ color: '#191919', borderColor: '#353535', background: '#12daa8',  marginRight: '10px',borderRadius: 10, fontWeight: 'bold', padding: '6px 40px 6px 40px', textTransform: 'none' }} variant="outlined">
             Buy Now</Button>
            <Button onClick={handleAdd} style={{ color: '#fff', borderRadius: 10, background: '#353535', borderColor: '#fff', padding: '6px 40px', textTransform: 'none', fontWeight: 'bold' }} variant="outlined">
             Add to Cart</Button>
          </div>
            :
            <div style={{padding:5,width:props.screen=='cart'?110:270,alignItems:'center',display:'flex',justifyContent:'space-between'}}>
                <Fab onClick={handleAdd} style={{background:'#00E9BF',color:'#000'}} size="small"  aria-label="add">
                <AddIcon style={{fontSize:20}} />
                </Fab>
                <div style={{fontSize:18,fontWeight:600,color:props.screen==='cart'?'#000':'#fff'}} >{count}</div>
                <Fab onClick={handleMinus} style={{background:'#00E9BF',color:'#000'}} size="small" aria-label="add">
                <RemoveIcon style={{fontSize:20}} />
                </Fab>
                 {props.screen=='cart'?
                  <></>
                  :
                <Button  onClick={()=>{Navigate('/')}} 
                style={{ color: '#191919', borderColor: '#fff', background: '#12daa8',borderRadius: 10, fontWeight:'bold',marginLeft:5, textTransform: 'none' }} variant="outlined">
                Continue Shoping</Button>
                  }
            </div> }
        </div>
    )
}