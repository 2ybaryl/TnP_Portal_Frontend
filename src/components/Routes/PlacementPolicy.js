import React from "react";
import '../stylesheets/PlacementPolicy.css'
import SideNav from "../commons/SideNav";
class PlacementPolicy extends React.Component {
    render() {
        return (
            <div className="pp">
            <div className="main-section">
                <div className="left-section">
                    <SideNav/>
                </div>
                <div className="right-section">
                    <h1>Placement Policy</h1>
                </div>
            </div>
        </div>
        );
    }
}
export default PlacementPolicy;