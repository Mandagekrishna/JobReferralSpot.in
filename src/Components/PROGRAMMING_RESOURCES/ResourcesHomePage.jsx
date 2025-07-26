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
import adProduct from '../../DATA/Advertisements.json'


import Grid from '@mui/material/Grid2';
import { NavLink } from 'react-router';
export default function ResourcesHomePage(){

    let [adProducts, updateProducts] = useState(adProduct);
    let [ResourceDetails, updateDetails] = useState(data);
    return(<>




<Grid container>
    <Grid sx={{margin:'20px'}}>
    <Typography variant='h3'>Programming Resources</Typography>
    </Grid>
</Grid>

<Grid container>  
  <Grid container direction='row'  size={{xs:8,md:8}} columns={8} offset={0.3} sx={{marginRight:'7%',justifyContent: "space-evenly", marginTop:'5%',alignItems:"flex-start", maxHeight:'auto', height:'200px'}}>
    {ResourceDetails.map(element=>{
        
        return(        
            <Grid size={{xs:5,md:2.3}}   marginBottom='60px' justifyContent="space-between">         
              <NavLink to={`/ResourceDetails/${element.id}`}  style={{underline:'none',textDecoration:'none', color:'inherit'}}>
                <Card sx={{justifyContent:'center'}}>
                  <CardActionArea  sx={{              
                                      //   justifySelf:'center',background: 'linear-gradient(45deg,rgb(107, 129, 254) 30%,rgb(83, 163, 255) 90%)',
                                        justifySelf:'center',background: 'linear-gradient(45deg,#5c6bc0 30%,#9fa8da 90%)',
                                    }} >
                    <CardContent sx={{justifySelf:'center',  }}>
                     
                      <Typography variant="h3" component="div" sx={{underline:'none',textDecoration:'none', color:'inherit',fontSize:{xs:'1.5rem', md:'2000px',lg: '3rem'}}}>{   element['Name']}</Typography>
                     
                      {/* <Typography variant="body2" color="text.secondary"  sx={{underline:'none',textDecoration:'none', color:'text'}}>
                        Click to Visit
                      </Typography> */}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NavLink>
            </Grid>
          )
        }
      )
    }
  </Grid>




<Grid container size={{xs:2,md:2.5}} sx={{backgroundColor:'lightblue'}}>

<Paper elevation={4}  >
           <Grid>
           {adProducts.map(adProductElement => { 
                                                return(         
            <Button>   <Link target="_blank" href={adProductElement['productUrl']} sx={{underline:'none',textDecoration:'none', color:'inherit'}}>
                        <Card sx={{justifyContent:'center' }}>
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













{/* 

    <Grid container spacing={{ xs: 2, md: 12 }} columns={{ xs: 4, sm: 8, md: 12 }} margin={10}>
        {ResourceDetails.map(element=>{return(<>
        
        <Grid size={4} >

        <NavLink to={`/ResourceDetails/${element.id}`}  style={{underline:'none',textDecoration:'none', color:'inherit'}}>
         
               

            <Card sx={{justifyContent:'center'}}>
          <CardActionArea     
            sx={{
              height: '100%',
             
            //   justifySelf:'center',background: 'linear-gradient(45deg,rgb(107, 129, 254) 30%,rgb(83, 163, 255) 90%)',
              justifySelf:'center',background: 'linear-gradient(45deg,#5c6bc0 30%,#9fa8da 90%)',

              
                 }}
          >
            <CardContent sx={{ height: '100%',justifySelf:'center' }}>
              <Typography variant="h3" component="div" sx={{underline:'none',textDecoration:'none', color:'inherit'}}>
                {   element['Name']}
              </Typography>
            
            </CardContent>
          </CardActionArea>
        </Card>

 </NavLink>
</Grid></>)})}


    </Grid> */}
      
      
        
        
        </>)
}