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
                        <h5 className='job-role'>We are looking for a talented designer to help us create beautiful and functional interfaces for our company. Your role requires you to understand users very well.</h5>
                        
                        <div className='job-tags'>
                            <div className='tag' id = 'batch'>2024</div>
                            <div className='tag' id = 'type'>Fulltime</div>
                            <div className='tag' id = 'location'>Remote</div>
                            <div className = 'tag' id='eligibility-tag'>CGPA &gt; 8.0</div>
                        </div>
                        
                        
                        <hr></hr>
                        <div className='job-tags-2'>
                            <div className='job-salary'>Salary : 22 lpa</div>
                            <div className='job-apply'><button>Apply Now</button></div>
                        </div>
                    </div>:null
                }
                  <div className="jdw-top">
                        <div className='jdw-top-left'>
                            <div className='Company-logo'>
                                <img src = "https://cdn.dribbble.com/users/121337/screenshots/5885287/slack.png?compress=1&resize=400x300"></img>
                            </div>
                            <div className='Job-head'>
                                <h3 className="Job-title">Junior UI/UX Designer</h3>
                                <h3 className="Company-title">Slack Technologies, LLC</h3>
                            </div>
                        </div>
                     
                        
                        <h3 className="Job-status">Eligible</h3>
                        <button className="showDetails" onClick={()=>setShow(!show)}>Details</button>
                  </div>       
                        
                    </div>
            </section>
        );
    }

export default JobDescription;