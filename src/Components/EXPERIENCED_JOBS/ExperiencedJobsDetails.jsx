import styles from '../../Styles/DetailsPage.module.css'
import Data from '../../DATA/ExperiencedJobs.json'
import Footer from '../HOME/Footer';
import {useState} from 'react'
import { useParams } from 'react-router-dom';


export default function JobsDetailsPage(){

    let [JobsData,updateData] = useState(Data);
    let {id} = useParams();
    let currentJobs = JobsData.filter(element => element["id"]==id)
    console.log(currentJobs)
    return(
    
    <>
        <div className={styles.container}>
            
            <div className={styles.element1}>
                <h2>{currentJobs[0]["companyName"]}</h2>
                <h5>{currentJobs[0]["position"]}</h5>
            </div>

            <div className={styles.element2}>
                <span>{currentJobs[0]['salary']}</span>
                <span>{currentJobs[0]['location']}</span>
                <span>{currentJobs[0]['positionType']}</span>
                <span>{currentJobs[0]['workMode']}</span>
                <span>{currentJobs[0]['experienceRequired']}</span>
          </div>


            <div className={styles.element3}>                           
                            <div className={styles.element3card}>
                               Ad
                            </div>            
                            <div className={styles.element3card}>
                               Ad
                            </div>  
            </div> 


            <div className={styles.element4}>
                <h4> How to apply</h4>
                <p>Apply Mode  - {currentJobs[0]['applyMode']} <a href={`${currentJobs[0]['website']}`}>{currentJobs[0]['website']}</a> </p>  
            </div>


            <div className={styles.element5}>
                <h2>Roles and Responsibilities</h2>
               {Array.isArray(currentJobs[0]["Description"]["rolesAndResponsibilities"])?
                currentJobs[0]["Description"]["rolesAndResponsibilities"].map(element=>
                    (<li>{element}</li>)):<></>}
            </div>


            <div className={styles.element6}>
                <h2>Requirements</h2>
                {Array.isArray(currentJobs[0]["Description"]["requirements"])?
                currentJobs[0]["Description"]["requirements"].map(element=>
                    (<li>{element}</li>)):<></>}
            </div>


           <div className={styles.element7}>
                <Footer></Footer>
            </div>
        
        
        
        
        </div>
    
    
    
    
    
    </>)
}