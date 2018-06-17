import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Layout extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse"
                                        data-target="#myNavbar">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="#">LECTURE CAPTURING SYSTEM</a>
                            </div>
                            <div className="collapse navbar-collapse" id="myNavbar">
                                <ul className="nav navbar-nav">
                                    <li className="active"><Link to={'/'}>Home</Link></li>
                                    <li><Link to={'/about'}>About</Link></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div>
                    { this.props.children }
                </div>
                <div>
                    <footer className="container-fluid text-center">
                        <p>&copy; 2018 SLIIT Research Project</p>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Layout;