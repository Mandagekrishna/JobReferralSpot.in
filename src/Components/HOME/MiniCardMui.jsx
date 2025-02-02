
import {NavLink} from 'react-router-dom'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function MiniCard(){

    return(
        <>
       
{/* 
        <div className ={styles.container}>
               
              <NavLink to='/Internships' className={styles.card1}>
                    <Button variant="contained"  >                   
                      INTERNSHIPS                  
                    </button>
              </NavLink> 
           
              <NavLink to='/FreshersJobsList' className={styles.card2}>
                <Button variant="contained">
                      FRESHERS JOBS
                </button>
              </NavLink> 


                <NavLink to='/ExperiencedJobs' className={styles.card3}>
                <Button variant="contained">
                     Experienced/Referral JOBS
                </button>
              </NavLink> 


                <NavLink to='/WalkInDriveJobsList' className={styles.card4}>
                <Button variant="contained">
                        WALK-IN INTERVIEWS
                </button>
              </NavLink> 


               
        </div> */}

        <Stack  direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{width:1, justifyContent: "space-around", alignItems:'center'}}>
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