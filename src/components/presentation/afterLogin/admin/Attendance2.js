import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class Attendance2 extends Component {

    constructor(props){
        super(props);
        this.state = {
            redirect:false
        };

    }

    componentWillMount() {
        if (sessionStorage.getItem("userid")) {

        }
        else {
            this.setState({ redirect: true });
        }
    }

    componentWillUnmount() {

        fetch('/student/releaseWebCam')
        .then(response => {
            return null;
        })
        .then(data => {
            
        });
    }

    render() {
        if(this.state.redirect){
            return(<Redirect to={'/'}/>)
        }

        return (
            <div>
                <h3>Mark Attendance</h3>

                <img src="http://localhost:5004/video_feed"></img>

            </div>
        )
    }
}

export default Attendance2;