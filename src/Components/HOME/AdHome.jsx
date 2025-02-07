import { Card, Paper } from '@mui/material';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid2';
import {useState} from 'react'


import adProduct from '../../DATA/Advertisements.json'

import CardActionArea from '@mui/material/CardActionArea';

import Link from '@mui/material/Link';

export default function AdHome(){

  let [adProducts, updateProducts] = useState(adProduct);
    return(
        <>
           
           <Grid container size={{md:2.5}}>




<Paper elevation={4} sx={{width:'100%', marginTop:{md:'50px'}}}>
   <Grid container sx={{
    justifyContent: "space-evenly",
    alignItems: "center",
   
  }} >
   {adProducts.map(adProductElement => { 
                                                return(         
            <Button>   <Link target="_blank" href={adProductElement['productUrl']} sx={{underline:'none',textDecoration:'none', color:'inherit'}}>
                        <Card sx={{justifyContent:'center', maxWidth: {md:345}, minHeight:{md:500}}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        // height="400" 
                        sx={{justifySelf:'center',height:{md:'200px'}, width:{md:'200px'}}}
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
                        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
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




        
        </>
    )
}