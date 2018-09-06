import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class Attendance extends Component {

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

    render() {
        if(this.state.redirect){
            return(<Redirect to={'/'}/>)
        }

        return (
            <div>
                <h3>Attendance Management</h3>



            </div>
        )
    }
}

export default Attendance;