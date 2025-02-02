import styles from '../../Styles/Card.module.css'
import {NavLink} from 'react-router-dom'



export default function MiniCard(){

    return(
        <>
       

        <div className ={styles.container}>
               
              <NavLink to='/Internships' className={styles.card1}>
                    <button type='button' className={styles.button}  >                   
                      INTERNSHIPS                  
                    </button>
              </NavLink> 
           
              <NavLink to='/FreshersJobsList' className={styles.card2}>
                <button type='button' className={styles.button}>
                      FRESHERS JOBS
                </button>
              </NavLink> 


                <NavLink to='/ExperiencedJobs' className={styles.card3}>
                <button type='button' className={styles.button}>
                     Experienced/Referral JOBS
                </button>
              </NavLink> 


                <NavLink to='/WalkInDriveJobsList' className={styles.card4}>
                <button type='button' className={styles.button}>
                        WALK-IN INTERVIEWS
                </button>
              </NavLink> 


               
        </div>
        </>
    )
}