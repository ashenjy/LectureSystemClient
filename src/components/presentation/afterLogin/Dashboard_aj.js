import React, {Component} from 'react';

class Dashboard_aj extends Component {
    render() {
        return (
            <div>
                <div className="sidenav">
                    <a href="#about">Dasboard</a>
                    <a href="#services">User Management</a>
                    <a href="#clients">Attendance</a>
                    <a href="#contact">Settings</a>
                </div>

                <div className="main">
                    <h2>Sidebar</h2>
                    <p>This sidebar is of full height (100%) and always shown.</p>
                    <p>Scroll down the page to see the result.</p>
                    <p>This sidebar is of full height (100%) and always shown.</p>
                    <p>Scroll down the page to see the result.</p>
                    <p>This sidebar is of full height (100%) and always shown.</p>
                    <p>Scroll down the page to see the result.</p>
                    <p>This sidebar is of full height (100%) and always shown.</p>
                    <p>Scroll down the page to see the result.</p>
                </div>
            </div>
        )
    }
}

export default Dashboard_aj;