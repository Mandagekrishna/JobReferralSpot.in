import ResourcesList from '../../DATA/ProgrammingResources.json'
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useEffect,useState } from 'react';
import Grid from '@mui/material/Grid2';
import adProduct from '../../DATA/Advertisements.json'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CardActionArea from '@mui/material/CardActionArea';
import { Card, Paper } from '@mui/material';


export default function ReactResources(){

    let {id} = useParams();
    let [displaymdFile, updatemdFile ] = useState();
    let [adProducts, updateProducts] = useState(adProduct);

    let currentDetails = ResourcesList.filter(element => element.id === id);
    let fileName = currentDetails[0].fileName

    useEffect(()=>  {import (`../../DATA/${fileName}.md?raw`).then(result=>updatemdFile(result.default))},[]);   //from chatgpt
  

    return(<>

<Grid container columns={8} marginLeft={10}>
    <Grid size={5.5} marginRight={6}>
        <h1>my selected id {id}</h1>
        <ReactMarkdown>{displaymdFile}</ReactMarkdown>
       
    </Grid>

     <Grid container size={{xs:2,md:2}} sx={{backgroundColor:'lightblue'}}> 
        <Paper elevation={4}>
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
    
    </>)
}