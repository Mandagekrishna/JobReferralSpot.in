
import {NavLink} from 'react-router-dom'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Margin } from '@mui/icons-material';


export default function MiniCard(){

    return(
        <>
       


        <Stack  direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ width:1, justifyContent: "space-around", alignItems:'center'}}>
        <NavLink to='/Internships'>
                    <Button variant="contained" sx={{width:300,height:100,backgroundColor:'#5c6bc0'}} >                   
                      INTERNSHIPS                  
                    </Button>
              </NavLink> 
           
              <NavLink to='/FreshersJobsList' >
                <Button variant="contained" sx={{width:300,height:100,backgroundColor:'#5c6bc0'}}>
                      FRESHERS JOBS
                </Button>
              </NavLink> 


                <NavLink to='/ExperiencedJobs' >
                <Button variant="contained" sx={{width:300,height:100,backgroundColor:'#5c6bc0'}}>
                     Experienced/Referral JOBS
                </Button>
              </NavLink> 


                <NavLink to='/WalkInDriveJobsList' >
                <Button variant="contained" sx={{width:300,height:100,backgroundColor:'#5c6bc0'}}>
                        WALK-IN INTERVIEWS
                </Button>
              </NavLink> 
</Stack>

        
        </>
    )
}