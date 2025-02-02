import styles from '../../Styles/HomeAd.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AdHome(){


    return(
        <>
           
            <Card sx={{ maxWidth: 200, maxHeight: 250}}>
      <CardMedia
        sx={{ height: 20 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          AD
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Ads Here
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        
        
        </>
    )
}