import React from "react";
import "../stylesheets/ApplicationDashboard.css";
import "../components/SideNav";
import SideNav from "../components/SideNav";
import RecentlyAdded from "../components/RecentlyAdded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faVideo } from "@fortawesome/free-solid-svg-icons";
import { PieChart, Pie, Cell, Legend, Label, Line } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import JobHistory from "../components/JobHistory";
import TopNav from "../components/TopNav";
import SingleLineChart from "../components/graphs/LineChart";
import PlacementPackagesChart from "../components/graphs/ScatterChart";
import PieChartComponent from "../components/graphs/PieChart";

const data = [
    { date: '2023-01-01', 'Package A': 10, 'Package B': 5, 'Package C': 15 },
    { date: '2023-02-01', 'Package A': 8, 'Package B': 12, 'Package C': 10 },
    { date: '2023-03-01', 'Package A': 15, 'Package B': 10, 'Package C': 8 },
    // ...
  ];

  const data2 = [
    { package: '10', students: 8 },
    { package: '6', students: 15 },
    { package: '12', students: 6 },
    { package: '4', students: 10 },
    { package: '15', students: 4 },
    { package: '8', students: 20 },
    { package: '5', students: 12 },
    { package: '9', students: 9 },
    { package: '7', students: 14 },
    { package: '11', students: 7 },
    // Add more entries...
  ];
  const data3 = [
    { name: 'Placed', value: 12 },
    { name: 'Seeking Placement', value: 25 },
    { name: 'Not Actively Looking', value: 21 },
  ];
 
  
  
class AdminDashboard extends React.Component {
    render() {
        return (
            <div className="admin-dashboard">
                <div className="main-section">
                    <div className="left-section">
                        <SideNav />
                    </div>
                    <div className="right-section">
                        <TopNav />
                        <div className="dashboard-mc">
                            <div className="metrics">
                                <div className="metrics-heading">
                                    <h3>Dashboard</h3>
                                    <h5>
                                        &nbsp;Empowering efficient placement management through comprehensive data insights
                                    </h5>
                                </div>
                                <div className="metrics-cards">
                                    <div className="metric-card" id="metric-card-1">
                                        <div className="mc-1" id="applied">
                                            <div className="mc-1-icon">
                                                <FontAwesomeIcon class="fai" icon={faCheckSquare} />
                                            </div>
                                            <div className="mc-1-metric">32</div>
                                            <div className="mc-1-name">Students Placed</div>
                                        </div>
                                        <div className="mc-1" id="in-progress">
                                            <div className="mc-1-icon">
                                                <FontAwesomeIcon class="fai" icon={faVideo} />
                                            </div>
                                            <div className="mc-1-metric">12</div>
                                            <div className="mc-1-name">In Progress</div>
                                        </div>
                                    </div>
                                    <div className="metric-card" id="metric-card-2">
                                    <PieChartComponent data={data3} />
                                    </div>
                                    <div className="metric-card" id="metric-card-3" style={{  display: 'flex', justifyContent: 'center' , flex: '1.3'}}>
                                    
                                   
                                    <SingleLineChart data = {data2}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AdminDashboard;
