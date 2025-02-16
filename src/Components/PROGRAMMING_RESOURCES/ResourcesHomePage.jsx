import { Card, Paper } from '@mui/material';
import {useState} from 'react'

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CardActionArea from '@mui/material/CardActionArea';
import data from '../../DATA/ProgrammingResources.json'

import Grid from '@mui/material/Grid2';
import { NavLink } from 'react-router';
export default function ResourcesHomePage(){

    let [ResourceDetails, updateDetails] = useState(data);
    return(<>

    <Grid container spacing={{ xs: 2, md: 12 }} columns={{ xs: 4, sm: 8, md: 12 }} margin={10}>
        {ResourceDetails.map(element=>{return(<>
        
        <Grid size={4} >

        <NavLink to={`/ResourceDetails/${element.id}`}  style={{underline:'none',textDecoration:'none', color:'inherit'}}>
         
               

            <Card sx={{justifyContent:'center'}}>
          <CardActionArea     
            sx={{
              height: '100%',
              width:400,
            //   justifySelf:'center',background: 'linear-gradient(45deg,rgb(107, 129, 254) 30%,rgb(83, 163, 255) 90%)',
              justifySelf:'center',background: 'linear-gradient(45deg,#5c6bc0 30%,#9fa8da 90%)',

              
                 }}
          >
            <CardContent sx={{ height: '100%',justifySelf:'center' }}>
              <Typography variant="h3" component="div" sx={{underline:'none',textDecoration:'none', color:'inherit'}}>
                {   element['Name']}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary"  sx={{underline:'none',textDecoration:'none', color:'text'}}>
                Click to Visit
              </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>

 </NavLink>
</Grid></>)})}


    </Grid>
      
      
        
        
        </>)
}