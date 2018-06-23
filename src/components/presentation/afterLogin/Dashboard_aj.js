import React, {Component} from 'react';
import constants from "../../../constants/actionTypes";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Route, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class Dashboard_aj extends Component {

    switchDashboards = () => {

        console.log("this.props.usertype :" + this.props.usertype);
        switch(this.props.usertype){

            case 'admin':
                const adminDashboard = (<div className="sidenav">
                    <a href="#about">Admin Dashboard</a>
                    <Link to={'/loginselection/userManagement'}>User Management</Link>
                    <a href="#clients">Attendance</a>
                    <a href="#contact">Settings</a></div>);

                return adminDashboard;

            case 'lecturer':
                const lecturerDasboard = (<div className="sidenav">
                    <a href="#about">Lecturer Dasboard</a>
                    {/*<a href="#services">User Management</a>*/}
                    {/*<a href="#clients">Attendance</a>*/}
                    <a href="#contact">Settings</a></div>);

                return lecturerDasboard;

            case 'student':
                const studentDasboard = (<div className="sidenav">
                    <a href="#about">Student Dasboard</a>
                    {/*<a href="#services">User Management</a>*/}
                    {/*<a href="#clients">Attendance</a>*/}
                    <a href="#contact">Settings</a></div>);

                return studentDasboard;
        }
    };

    render() {

        return (
            <div>
                { this.switchDashboards()}

                <div className="main">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        usertype: state.auth.usertype
    }
}

export default withRouter(connect(mapStateToProps)(Dashboard_aj));


// export default Dashboard_aj;