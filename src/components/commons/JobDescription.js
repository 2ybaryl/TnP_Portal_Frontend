import React,{useState} from 'react'
import '../stylesheets/AvailableJobs.css'

    function JobDescription() {
        /* const display = event =>{
            event.currentTarget.style.color = 'red';
            event.currentTarget.style.display = 'block';
            document.getElementsByClassName("jdw-top").style.color = "red";
        }; */
        const [show,setShow]=useState(false)
        return (
            <section id="JobDescription">
            {/*     <div className="App">
                {
                        show?<h1>Hello World !</h1>:null
                } <button onClick={()=>setShow(!show)} >Toggle</button> </div> */}
                <div className="jdw">{
                   
                    show?<div className="hidden">
                        <h5>Name of the Company: Netflix</h5>
                        <h5>Hiring Position: </h5>
                        <h5>Salary/Stipend: </h5>
                        <h5>Elgibility Criteria: </h5>
                        <h5>Process of Hiring: </h5>
                    </div>:null
                }
                  <div className="jdw-top">
                        <h3 className="Job-title">React Developer Internship</h3>
                        <h3 className="Job-status">Eligible</h3>
                        <button className="showDetails" onClick={()=>setShow(!show)}>View Details</button>
                  </div>       
                        
                    </div>
            </section>
        );
    }

export default JobDescription;