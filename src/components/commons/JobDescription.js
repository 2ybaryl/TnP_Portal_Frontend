import React from "react";
import '../stylesheets/AvailableJobs.css'
class JobDescription extends React.Component {
    render() {
        const display = event =>{
            event.currentTarget.style.color = 'red';
            event.currentTarget.style.display = 'block';
            document.getElementsByClassName("jdw-top").style.color = "red";
        };
        return (
            <section id="JobDescription">
                <div className="jdw">
                        <div className="jdw-top">
                        <h3 className="Job-title">React Developer Internship</h3>
                        <h3 className="Job-status">Eligible</h3>
                        <button className="showDetails" onClick={display}>View Details</button>
                        </div>
                        <div className="hidden">
                            <h5>Name of the Company: Netflix</h5>
                            <h5>Hiring Position: </h5>
                            <h5>Salary/Stipend: </h5>
                            <h5>Elgibility Criteria: </h5>
                            <h5>Process of Hiring: </h5>
                        </div>
                    </div>
            </section>
        );
    }
}
export default JobDescription;