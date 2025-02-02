import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {NavLink,useNavigate} from 'react-router-dom'



export default function ButtonAppBar() {

    let Navigate = useNavigate();

 
    let goBack =()=>{
        Navigate(-1);
    }
  return (
    <Box sx={{ flexGrow: 1,width:'100%'     }}>
      <AppBar sx={{backgroundColor:"#7986cb"}} position="static" color='primary'>
        <Toolbar>        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily:'monospace', fontWeight:'bold' }}>
            JobReferralSpot.in
          </Typography>
          <Button color="inherit"><NavLink style={{textDecoration:'none', color:'inherit'}} to='/Home'>Home</NavLink></Button>
          <Button color='inherit' onClick={goBack}>Back</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
