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
import { Card, colors, Paper, Stack } from '@mui/material';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
// import {MDXProvider} from '@mdx-js/react';


export default function ReactResources(){

    let {id} = useParams();
    let [DisplaymdFile, updatemdFile ] = useState();
    let [adProducts, updateProducts] = useState(adProduct);

    let currentDetails = ResourcesList.filter(element => element.id === id);
    let fileName = currentDetails[0].fileName
    let syllabus = currentDetails[0].syllabus

useEffect(()=>{
    
    const loadMdx = async function()
    {
        try{    
            
                
                if(fileName=='') return 
                else{
                // const mdxContent = await import (`../../DATA/${fileName}.mdx`)//from chatgpt  for mdx
                const mdxContent = await import (`../../DATA/${fileName}.md?raw`)//from chatgpt  for md

                // updatemdFile(mdxContent.default); // this will not work because state will use the stale state. If there are multiple state updates in sequence, React may use stale data or incorrectly batch the updates, resulting in issues with component rendering.(chatgpt)
                updatemdFile(()=>mdxContent.default)
                // console.log(mdxContent)
                }
            
            }
        
        catch(error){
            console.log(error)
        }
    }

   loadMdx()
},[]);
  

    return(<>
<h1 style={{marginLeft:'20px'}}>{currentDetails[0].Name}</h1>

<Grid container columns={8} marginLeft={10}>
    
    <Grid container direction='row' size={5.5} marginRight={6} sx={{justifyContent: "space-evenly",height:'1000px'}}>
    
        <Grid size={2}>
            <h2>Beginner</h2>
            <Stack>{syllabus.basics.map(topics => {return(<><p>{topics}</p></>)})}</Stack>
        </Grid>
        <Grid size={2}>
            <h2>Intermediate</h2>
            <Stack>{syllabus.intermediate.map(topics => {return(<><p>{topics}</p></>)})}</Stack>
        </Grid>
        <Grid size={2}>
            <h2>Advance</h2>
            <Stack>{syllabus.advance.map(topics => {return(<><p>{topics}</p></>)})}</Stack>
        </Grid>
        <Grid className = 'details' size={8}>
        {fileName==''?<h1 style={{ color: 'red' }}>Details are in Process</h1>:<ReactMarkdown  remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>{DisplaymdFile}</ReactMarkdown>}    
        {/* {fileName==''?<h1 style={{ color: 'red' }}>Details don't exist</h1>:<MDXProvider>{DisplaymdFile?<DisplaymdFile/>:<p>loading...</p>}</MDXProvider>} */}
        </Grid>

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