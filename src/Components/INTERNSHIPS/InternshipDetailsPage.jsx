import styles from '../../Styles/DetailsPage.module.css'
import Data from '../../DATA/Internship.json'
import Footer from '../HOME/Footer';
import {useState} from 'react'
import { useParams } from 'react-router-dom';


export default function InternshipDetailsPageMui(){

    let [InternshipData,updateData] = useState(Data);
    let {id} = useParams();
    let currentInternship = InternshipData.filter(element => element["id"]==id)
    console.log(currentInternship)
    return(
    
    <>
        <div className={styles.container}>
            
            <div className={styles.element1}>
                <h2>{currentInternship[0]["companyName"]}</h2>
                <h5>{currentInternship[0]["position"]}</h5>

            </div>

            <div className={styles.element2}>
            <span>{currentInternship[0]['location']}</span>
                <span>{currentInternship[0]['salary']}</span>
                <span>{currentInternship[0]['positionType']}</span>
                <span>{currentInternship[0]['workMode']}</span>
                <span>{currentInternship[0]['experienceRequired']}</span>
               

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
                <p>Apply at link - <a href={currentInternship[0]['applyLink']}>click here</a> </p>  
            </div>


            <div className={styles.element5}>
                <h2>Roles and Responsibilities</h2>
               {Array.isArray(currentInternship[0]["Description"]["rolesAndResponsibilities"])?
                currentInternship[0]["Description"]["rolesAndResponsibilities"].map(element=>
                    (<li>{element}</li>)):<></>}
            </div>


            <div className={styles.element6}>
                <h2>Requirements</h2>
                {Array.isArray(currentInternship[0]["Description"]["requirements"])?
                currentInternship[0]["Description"]["requirements"].map(element=>
                    (<li>{element}</li>)):<></>}
            </div>


           <div className={styles.element7}>
                <Footer></Footer>
            </div>
        
        
        
        
        </div>
    
    
    
    
    
    </>)
}