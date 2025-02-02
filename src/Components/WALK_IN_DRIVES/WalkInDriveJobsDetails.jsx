import styles from '../../Styles/DetailsPage.module.css'
import Data from '../../DATA/WalkInDrive.json';
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
                <span>Job Location - {currentJobs[0]['jobLocation']}</span>
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
            <h4> Apply at - </h4> <p><a href={currentJobs[0]['applyAt']}>click here</a></p>
           
                <h4> Interview Location</h4>
                <p>{currentJobs[0]['address']} </p>  
                <h4> Timing</h4>
                <p>{currentJobs[0]['timing']} </p>  

            </div>


            <div className={styles.element5}>
                <h2>Notes</h2>
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