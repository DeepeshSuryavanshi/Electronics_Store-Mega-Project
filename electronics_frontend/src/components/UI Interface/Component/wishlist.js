import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';

function WishList(props) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
const add=()=>{
    props.onChange()
}
    return(
        <div  style={{alignItems:'center',display:'flex',justifyContent:'center',fontSize:matches?10:15}}>
         <Button onClick={add} variant="outlined" fullWidth style={{background:"#00E9BF",color:'#000 '}}>Move to WishList</Button>
        </div>
    )
    
}
export default WishList;