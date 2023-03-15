import React from "react";
 import './details.css';
 import pic from "./mypic.jpg";


 const Details = ()=>{
    return(
        <><div className="P"><img src={pic} width="250" height="250" alt=" not loaded" className="Coner" />
          </div>


        {/*personal details  */}
        <div className="B">
            <h2 className="Head"> <u>Personal Details:</u></h2>
            <p1 className="Head"> Name:</p1> <p1>Sujith Thopucherla</p1><br />
            <p1 className="Head"> Date of Birth:</p1><p1>07-07-2000</p1><br />
            <p1 className="Head"> Address:</p1><p1>H.no: 2-1-647, Naimnagar, Hanamkonda, Telangana, India.</p1><br />
            <p1 className="Head"> Email id:</p1><p1>sujiththopucherla@gmail.com</p1><br />
            <p1 className="Head"> Languages Known:</p1><p1>English,Hindi,Telugu</p1><br />
            <p1 className="Head"> Phone No. :</p1><p1>+91 9618042379</p1>
        </div> 
        
        {/*Educational details  */}
        <div className="B">
            <h2 className="Head"> <u>Educational  Details:</u></h2>
            <ul>
                 <li><h3>Kaktiya Institute of Technology & Science</h3> </li>
                    <p> Bachelor of Technolgy in Computer Science & Engineering </p>CGPA :     7.3/10
                 <li><h3>S R Junior College</h3> </li>
                      <p> XII (Senior Secondary)  </p>Percentage : 86.6%
                 <li><h3>Tejaswi High School</h3> </li>
                 <p> X (Higher Secondary)   </p>CGPA : 9.3/10
  
            </ul>  
            
        </div> 


        {/*Professional Skills details  */}
          
        <div className="container">
            <h2 className="Pro"> <u>Professional Skills</u></h2>
        <div class="skill-box">
            <span class="title">C and Java: </span>

            <div class="skill-bar">
                <span class="skill-per html">
                    <span class="tooltip">60%</span>
                </span>
            </div>
        </div>

        <div class="skill-box">
            <span class="title">Web Development:</span>

            <div class="skill-bar">
                <span class="skill-per wd">
                    <span class="tooltip">50%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">Computer Networks:</span>

            <div class="skill-bar">
                <span class="skill-per cn">
                    <span class="tooltip">50%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">Photoshop:</span>

            <div class="skill-bar">
                <span class="skill-per ps">
                    <span class="tooltip">75%</span>
                </span>
            </div>
        </div>
    </div>
        </>
    
    )   
 }
 export default Details;