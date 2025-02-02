import styles from '../../Styles/FooterStyles.module.css'
import {NavLink} from 'react-router-dom'


export default function Footer()
{
    return(
        <>
            <div className={styles.container}>



{//uncomment below section for accepting Donation
            }

                {/* <div className={styles.donationContainer}>
                    <p>Your donation keeps me motivated to run and <br/>
                    keep sharing on this site—thank you for your support!!!"</p>

                    <p>
                        you can make donation by buying thank you card from below
                    </p>

                    <button type='button' className={styles.button}>Donate</button>
                </div> */}

                


                <div className={styles.footercontainer}>
                  
                <NavLink to='/Internships'><button type='button' className={styles.footercontainer} >Internships</button><br/></NavLink>
                <NavLink to='/FreshersJobsList'><button type='button' className={styles.footercontainer}>Freshers Jobs</button><br/></NavLink>
                <NavLink to='/ExperiencedJobs'><button type='button' className={styles.footercontainer}>Experienced Jobs</button><br/></NavLink>
                <NavLink to='/WalkInDriveJobsList'><button type='button' className={styles.footercontainer}>Walk-IN Drives</button><br/></NavLink>
                
                </div>


            </div>
        
        
        </>
    )
}