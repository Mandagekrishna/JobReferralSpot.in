import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import SendIcon from '@mui/icons-material/Send';

export default function Introduction()
{

    
    return(
    <>
  

  <Stack size={{sx:6}} sx={{justifyContent: "center",alignItems: "center",}}>   
            <h2>
                Welcome to Referrals
            </h2>
   
        <Typography variant="subtitle2" align='justify' >This platform is designed to share high-quality referral opportunities sourced directly 
            from different hiring platforms to make your job hunt easier, faster and smoother. <br/>
            We believe in the power of community and helping others succeed in their career journey.

            <br/><br/>
                        
            Here, you can find job referrals, Internships and job leads shared by professionals who
            are dedicated to helping talented individuals like you take the next step in their career.
            
        </Typography>
  
        <h1>NOTE</h1>

         <Typography variant="subtitle2" align='center'>
                We do not ask for any money at any point.  <br/>  <br/>
            All the referrals, job leads, and resources listed on our site are completely free to access and apply. <br/> <br/>
            If you encounter any request for payment or suspicious activity, please be cautious and proceed at your own risk.<br/>
            We are not responsible for any fees or charges that may be required to apply for any jobs or access specific services listed on this site. <br/>
            <br/>It is always important and your responsibility to review the job posting carefully and confirm any potential costs directly with the respective employer or <br/> job board before proceeding with your application.
        </Typography>
        
        <hr></hr>
      
        <Typography>For getting daily updates on Mobile join below telegram Channel</Typography>
    
        
        <Button  sx={{width:300,height:50, margin:'30px'}}>
        <a target="_blank" href='https://t.me/JobReferralSpot' style={{textDecoration:'none'}}>Join Telegram Channel  </a>
        <TelegramIcon sx={{ fontSize: 40 }} />
                </Button>  

    </Stack>
        

         
    
    
    </>)
}