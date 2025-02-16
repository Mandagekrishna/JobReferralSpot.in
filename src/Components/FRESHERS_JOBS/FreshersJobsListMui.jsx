import styles from '../../Styles/InternshipStyles/InternshipList.module.css'
import Data from '../../DATA/FreshersJobs.json'
import {useState} from 'react';
import React from 'react';
import Footer from '../HOME/Footer';
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



export default function FreshersJobsList()
{
    let [JobsData,updateData] = useState(Data);
    let [adProducts, updateProducts] = useState(adProduct);

   // console.log(JobsData);
    return(

 
        <>
            



     <Grid container>
    <Grid sx={{margin:'20px'}}>
    <Typography variant='h3'>Freshers Jobs</Typography>
    </Grid>
</Grid>
<Grid container columns={12}   rowSpacing={1} >

<Grid size={{xs:8,md:8}} columns={10}  offset={0.3} sx={{marginRight:'7%'}}  >
                
             {
             JobsData.map(element => { 
                                                return( 
                                                     
<Paper elevation={6} square={false} >
<Grid container size={12}  rowSpacing={1} sx={{marginBottom:'8%', padding:'10px'}} >
    
        <Grid container spacing={1} >
            <Grid item  size={{xs:9, md:10}} sx={{minWidth:{md:'500px'}}}>
            <Typography variant="h5">{element['position']}</Typography>
            </Grid>

            <Grid item  size={2} sx={{ justifyItems:'end'}} >           
            <Typography variant="caption">Posted Date - {element['addedDate']}</Typography>
            </Grid>
         

            <Grid  item marginBottom={3} size={8} >
            <Typography variant="h7" sx={{fontWeight:500,fontFamily:'Josefin Sans'}}>{element['companyName'] + ' - ' + element['location'] }</Typography>
            </Grid>

            
                <Grid size={6}>
                    <Typography variant="h8" sx={{fontWeight:350,fontFamily:'Josefin Sans'}}>{element['positionType']}</Typography>
                </Grid>
                <Grid size={6}>
                    <Typography variant="h8" sx={{fontWeight:350,fontFamily:'Josefin Sans'}}>{element['workMode']}</Typography>
                </Grid>
                <Grid size={6}>
                    <Typography variant="h8" sx={{fontWeight:350,fontFamily:'Josefin Sans'}}>{element['salary']}</Typography>
                </Grid>
                <Grid size={6}>
                    <Typography variant="h8" sx={{fontWeight:350,fontFamily:'Josefin Sans'}}>{element['experienceRequired']} </Typography>
                </Grid>

          
               

        </Grid>

  
        <Grid container size={12}sx={{ minHeight:'100px', backgroundColor:'#c5cae9'}} >
            <Grid size={8}>
                  {   Array.isArray(element.mustHaveSkills)?
                                                                        element.mustHaveSkills.map((element)=>(
                                                                            
                                                                                // <button className={styles.skills} >{element}</button>
                                                                                // <Typography variant="h8">{element}</Typography>
                                                                                <Button variant="outlined" size="small" sx={{margin:'5px',color:'#3f51b5',fontWeight:'bold'}}>{element}</Button>
                                                                              
                                                                            
                                                                        )):<></>
                                                                    
                                                                    }
            
            </Grid>

            <Grid size={4} container  sx={{justifyContent: "flex-end",alignItems: "center",}}>
            {/* <Typography variant="h8">View Details  &#8594;</Typography> */}
             <NavLink to={`/FreshersJobsDetails/${element['id']}`}><Button size="large" sx={{color:'#283593',fontWeight:'bolder'}}>View Details  &#8594;</Button></NavLink> 
            </Grid>
        </Grid>

  

    </Grid>

    </Paper>

                                            )}
                                )
            }
            </Grid>




<Grid container size={{xs:2,md:2.5}} sx={{backgroundColor:'lightblue'}}>

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





            {/* <div className={styles.element3}>
                
                <div className={styles.element3card}>
                   Ad
                </div>

                <div className={styles.element3card}>
                   Ad
                </div>


            </div>


     </div> */}




     <Footer></Footer>
        
</>
    )
}