import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';

// Import services
import {recalibrateCamera, turnDownCamera, turnRightCamera, turnUpCamera} from "../../../../services/ptzService_vm";
import { turnLeftCamera } from "../../../../services/ptzService_vm";
import { stopMovementCamera } from "../../../../services/ptzService_vm";
import {createVideoChaptersService} from "../../../../services/videosService_lt";

class MainView_vm extends Component {

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

    recalibrateCamera() {
        recalibrateCamera().then(data=> {
            //console.log('done');
            //console.log(data);
            if(data.success === true)
            {
                alert("Success");
            }
            else
            {
                alert("Failed");
            }
        })
    }

    turnLeftCamera() {
        turnLeftCamera().then(data=> {
            //console.log('done');
            console.log(data);
            if(data.success === true)
            {
                alert("Success");
            }
            else
            {
                alert("Failed");
            }
        })
    }

    turnRightCamera() {
        turnRightCamera().then(data=> {
            //console.log('done');
            console.log(data);
            if(data.success === true)
            {
                //alert("Success");
            }
            else
            {
                alert("Failed");
            }
        })
    }

    turnUpCamera() {
        turnUpCamera().then(data=> {
            //console.log('done');
            console.log(data);
            if(data.success === true)
            {
                //alert("Success");
            }
            else
            {
                alert("Failed");
            }
        })
    }

    turnDownCamera() {
        turnDownCamera().then(data=> {
            //console.log('done');
            console.log(data);
            if(data.success === true)
            {
                //alert("Success");
            }
            else
            {
                alert("Failed");
            }
        })
    }

    stopMovementCamera() {
        stopMovementCamera().then(data=> {
            //console.log('done');
            console.log(data);
            if(data.success === true)
            {
                alert("Success");
            }
            else
            {
                alert("Failed");
            }
        })
    }



    render() {
        if(this.state.redirect){
            return(<Redirect to={'/'}/>)
        }

        return (
            <div>
                <h3>Advanced Controls</h3>

                <div className="row">
                    <div className="col s6 center">
                        <table className="table-move">
                            <tr>
                                <td></td>
                                <td>
                                  <button id="btnMoveUp" className="btn btn-primary" onClick={this.turnUpCamera}>  Up</button>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <button id="btnMoveLeft" className="btn btn-primary" onClick={this.turnLeftCamera}>Left</button>
                                </td>
                                <td>

                                </td>
                                <td>
                                    <button id="btnMoveRight" className="btn btn-primary" onClick={this.turnRightCamera}>Right</button>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button id="btnMoveDown" className="btn btn-primary" onClick={this.turnDownCamera}>Down</button>
                                </td>
                                <td></td>


                            </tr>


                        </table>
                    </div>

                    <br/><br/>


                    <div className="col s6 center">
                    <td></td>
                    <td>
                        <button id="btnMoveDown" className="btn btn-warning" onClick={this.turnDownCamera}>Zoom In</button> &nbsp;&nbsp;
                    </td>
                    <td></td>

                    <td></td>
                    <td>
                        <button id="btnMoveDown" className="btn btn-warning" onClick={this.turnDownCamera}>Zoom Out</button> &nbsp;&nbsp;
                    </td>
                    <td></td>
                    </div>
                    <br/><br/>
                    <div className="col s6 center">
                        <button id="btnRefresh" className="btn btn-success"
                                onClick={this.recalibrateCamera}>Recalibrate</button>&nbsp;&nbsp;
                        <button id="btnRefresh" className="btn btn-success">Turn to Audience</button>&nbsp;&nbsp;
                        <button id="btnRefresh" className="btn btn-success">Turn Back to Lecturer</button>&nbsp;&nbsp;
                        <button id="btnClear" className="btn btn-danger" onClick={this.stopMovementCamera}>Stop</button>
                    </div>



                    <br/>
                    <br/>
                    <div className="col s6 center">
                        <button id="btnRefresh" className="btn btn-success">Start Lecturer Tracker</button>&nbsp;&nbsp;
                        <button id="btnRefresh" className="btn btn-success">Start Gesture Detection</button>&nbsp;&nbsp;
                        <button id="btnRefresh" className="btn btn-danger">Stop Tracker</button>&nbsp;&nbsp;
                        <button id="btnClear" className="btn btn-info">Clear</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainView_vm;