import React, { Component } from 'react';
import './App.css';
import './css/SideNav_aj.css';
import { Route, BrowserRouter } from 'react-router-dom';
import openSocket from 'socket.io-client';

import Home from './components/layouts/Home';
import About from './components/layouts/About';
import Layout from './components/layouts/Layout';
import UserManagement_aj from './components/presentation/afterLogin/admin/UserManagement_aj';
import Dashboard_aj from './components/presentation/afterLogin/Dashboard_aj';
import Register_aj from './components/presentation/afterLogin/admin/Register_aj';
import LoginSelection_aj from './components/presentation/beforeLogin/LoginSelection_aj';
import LiveStream_vr from './components/presentation/afterLogin/lecturer/LiveStream_vr';
import MainView_vm from './components/presentation/afterLogin/lecturer/MainView_vm';
import ViewUsers_aj from './components/presentation/afterLogin/admin/ViewUsers_aj';
import FaceLogin from './components/presentation/beforeLogin/FaceRecognition/FaceLogin';
import LectureVideos_lt from "./components/presentation/afterLogin/lecturer/LectureVideos_lt";
import VideoChapters_lt from "./components/presentation/afterLogin/lecturer/VideoChapters_lt";
import adminDashboard from './components/presentation/afterLogin/admin/adminDashboard';

class App extends Component {

    socket = openSocket('http://127.0.0.1:5000');
    componentDidMount() {
        // const socket = openSocket('http://127.0.0.1:5000');

        //socket.on("FromAPI", data => this.setState({ response: data }));
        var visitorData = {
            referringSite: window.document.referrer,
            page: window.location.pathname
          }
        this.socket.emit('visitor-data', visitorData);

    }

    componentWillUnmount(){
    this.socket = {};
    }
    
    render() {
        return (
                <BrowserRouter>
                    <Layout>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/loginselection" component={LoginSelection_aj} />
                        <Route path="/faceLogin" component={FaceLogin} />
                        <Dashboard_aj >
                            <Route path="/loginselection/userManagement" component={UserManagement_aj} />
                            <Route path="/loginselection/userManagement/viewUser" component={ViewUsers_aj} />
                            <Route path="/loginselection/userManagement/registerUser" component={Register_aj} />
                            <Route path="/loginselection/liveStream" component={LiveStream_vr} />
                            <Route path="/loginselection/mainView" component={MainView_vm} />
                            <Route path="/loginselection/lectureVideos" component={LectureVideos_lt} />
                            <Route path="/loginselection/videoChapters" component={VideoChapters_lt} />
                            <Route path="/loginselection/adminDashboard" component={adminDashboard} />
                        </Dashboard_aj>
                    </Layout>
                </BrowserRouter>
        );
    }
}

export default App;