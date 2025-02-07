import styles from '../../Styles/DetailsPage.module.css'
import Data from '../../DATA/Internship.json'
import Footer from '../HOME/Footer';
import {useState} from 'react'
import { useParams } from 'react-router-dom';
import React from 'react';

import { NavLink } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Card, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import adProduct from '../../DATA/Advertisements.json'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';


export default function InternshipDetailsPage(){

    let [InternshipData,updateData] = useState(Data);
    let [adProducts, updateProducts] = useState(adProduct);

    let {id} = useParams();
    let currentInternship = InternshipData.filter(element => element["id"]==id)
    console.log(currentInternship)
    return(
    
    <>
    
    <Grid container sx={{marginBottom:'30px', marginLeft:'30px'}} >


        <Grid container size={{md:9}} sx={{marginRight:'50px'}}  >
            <Stack spacing={2}>
            <Typography variant='h4'>{currentInternship[0]["companyName"]}</Typography>
            <Typography variant='h6'>{currentInternship[0]["position"]}</Typography>
            <Stack direction="row" spacing={12} >
            <Typography>{currentInternship[0]['location']}</Typography>
                <Typography>{currentInternship[0]['salary']}</Typography>
                <Typography>{currentInternship[0]['positionType']}</Typography>
                <Typography>{currentInternship[0]['workMode']}</Typography>
                <Typography>{currentInternship[0]['experienceRequired']}</Typography>
            </Stack>
            <Paper elevation={6} square={false} sx={{padding:'20px'}}>
            <Stack>
            <Typography variant='h6'> How to apply  - {currentInternship[0]['applyMode']}</Typography>
            <Typography variant='h6'>Apply at link - <a href={currentInternship[0]['applyLink']}>click here</a> </Typography>
            </Stack>
            </Paper>
            <Paper elevation={6} square={false} sx={{padding:'20px'}}>
            <Stack>
            <Typography variant='h4'>Roles and Responsibilities</Typography>
               {Array.isArray(currentInternship[0]["Description"]["rolesAndResponsibilities"])?
                currentInternship[0]["Description"]["rolesAndResponsibilities"].map(element=>
                    (<Typography>- {element}</Typography>)):<></>}
            </Stack>
            </Paper>

            <Paper elevation={6} square={false} sx={{padding:'20px'}}>
            <Stack>
            <Typography variant='h4'>Requirements</Typography>
                {Array.isArray(currentInternship[0]["Description"]["requirements"])?
                currentInternship[0]["Description"]["requirements"].map(element=>
                    (<Typography>- {element}</Typography>)):<></>}
            </Stack>
            </Paper>
            </Stack>

           
        </Grid>
        
<Grid container size={{md:2.5}} sx={{backgroundColor:'lightblue'}}>




<Paper elevation={4} sx={{width:'100%'}}>
           <Grid>
           {adProducts.map(adProductElement => { 
                                                return(         
            <Button>   <Link target="_blank" href={adProductElement['productUrl']} sx={{underline:'none',textDecoration:'none', color:'inherit'}}>
                        <Card sx={{justifyContent:'center', maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        // height="400" 
                        sx={{justifySelf:'center',minheight:{md:'100px'}, width:{md:'200px'}}}
                        image={adProductElement['imgSrc']}
                        alt="img"
                        
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        {adProductElement['productTitle']} 
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', textDecoration:'line-through' }}>
                        {adProductElement['actualPrice']}
                        </Typography>
                        <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                        {adProductElement['discountedPrice']}
                        </Typography>
                      
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" > <Link target="_blank" href={adProductElement['productUrl']} sx={{underline:'none',textDecoration:'none', color:'inherit'}}> Get now</Link>
                       
                        </Button>
                    </CardActions>
                    </Card>
        </Link> </Button>)
           }
        )
    }
            </Grid>
            
</Paper>
   
</Grid>



</Grid>

 <Footer></Footer> 
    
    
    
    </>)
}