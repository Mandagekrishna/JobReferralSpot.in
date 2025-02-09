// import Data from '../../DATA/GateBooks.json';
import {useState} from 'react';
import React from 'react';
import Footer from '../HOME/Footer';
import { NavLink } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Card, Container, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Data from '../../DATA/GateBooks.json'

import adProduct from '../../DATA/Advertisements.json'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



export default function GateBooks(){

    let [adProducts, updateProducts] = useState(adProduct);
    let [BooksData,updateData] = useState(Data);

    console.log(BooksData[0]);

    return(
        <>
        
        <Grid container>
    <Grid sx={{margin:'20px'}}>
    <Typography variant='h3' sx={{fontWeight:600}}>Computer Engineering Books</Typography>
    <Typography>Hello everyone, below books suggested will help you in better understanding of subject. These books suggested have been read by me 
        during my academics and they helped me alot in understing subjects in better way with real world applications. Also these books helped me 
        during my GATE preparation and believe me they are worth of reading or referring once.
    </Typography>
    </Grid>
</Grid>

<Grid container columns={12}>
    <Grid size={{xs:8,sm:9,md:8}} columns={10} offset={0.3} sx={{marginRight:'7%'}} >
        {
            <Paper elevation={6} square={false} >
                <Grid container size={12}  sx={{marginBottom:'8%', padding:'10px',height:'auto'}} >
                    <Grid size={12} >
                        {BooksData.map(element =>{return(
                            <Accordion sx={{marginBottom:'20px'}}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            sx={{marginLeft:'0px'}}
                            >
                            <Typography variant='h4' sx={{marginLeft:'0'}} >{element['subject']}</Typography>
                            </AccordionSummary>
                                <AccordionDetails>{ element['books'].map(eachBook =>{return(<>
                             <Button >   <Link target="_blank" href={eachBook['bookUrl']} sx={{underline:'none',textDecoration:'none', color:'inherit'}}>
                            
                                 <Stack  direction={{ xs: 'column', sm: 'row' }}    spacing={{xs:3,md:10}}  sx={{alignItems: "center", mb:{xs:'50px',md:'10px'}}} >
                                 
                                    <img style={{height:200, width:150}} src={eachBook['bookImg']}></img>
                                    
                                  
                                    <Typography >{eachBook['bookName']}</Typography>
                                  
                                   
                                    <Button sx={{justifySelf:'end'}}>Buy Now</Button> 
                                       
                                                    
                                </Stack>
                                
                              </Link> </Button>
                                </>)})

                                                
                        }</AccordionDetails>
                            </Accordion>
                        )})
                   
                    

                        }</Grid>
                </Grid>
                </Paper>

        }
    </Grid>







<Grid container size={{xs:2,md:2.5}}>

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
        
        
        
        </>
    )
}