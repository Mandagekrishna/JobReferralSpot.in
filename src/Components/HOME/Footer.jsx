import styles from '../../Styles/FooterStyles.module.css'
import {NavLink} from 'react-router-dom'


import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Card, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';



export default function Footer()
{
    return(
        <>
    
        <Grid container sx={{marginTop:10}} >
            <Grid size={{md:12}}  sx={{backgroundColor:'#263238'}}>
                    <NavLink to='/Internships'><button type='button' className={styles.footercontainer} >Internships</button><br/></NavLink>
                    <NavLink to='/FreshersJobsList'><button type='button' className={styles.footercontainer}>Freshers Jobs</button><br/></NavLink>
                    <NavLink to='/ExperiencedJobs'><button type='button' className={styles.footercontainer}>Experienced Jobs</button><br/></NavLink>
                    <NavLink to='/WalkInDriveJobsList'><button type='button' className={styles.footercontainer}>Walk-IN Drives</button><br/></NavLink>
              </Grid>
        </Grid>     
    </>
    )
}