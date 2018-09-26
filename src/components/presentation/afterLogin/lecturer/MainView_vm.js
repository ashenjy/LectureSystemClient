import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';

// Import services
import { recalibrateCamera } from "../../../../services/ptzService_vm";
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
        console.log('ok');

        recalibrateCamera().then(data=> {
            console.log('done');
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
                <h3>Main View THIS</h3>

                <div className="row">
                    <div className="col s6 center">
                        <table className="table-move">
                            <tr>
                                <td></td>
                                <td>
                                    <button id="btnMoveUp" className="btn btn-info">Up</button>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <button id="btnMoveLeft" className="btn btn-info">Left</button>
                                </td>
                                <td>

                                </td>
                                <td>
                                    <button id="btnMoveRight" className="btn btn-info">Right</button>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button id="btnMoveDown" className="btn btn-info">Down</button>
                                </td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <br/><br/>

                    <div className="col s6 center">
                        <button id="btnRefresh" className="btn btn-success"
                                onClick={this.recalibrateCamera}>Recalibrate</button>&nbsp;&nbsp;
                        <button id="btnRefresh" className="btn btn-success">Turn to Audience</button>&nbsp;&nbsp;
                        <button id="btnRefresh" className="btn btn-success">Turn Back to Lecturer</button>&nbsp;&nbsp;
                        <button id="btnClear" className="btn btn-danger">Stop</button>
                    </div>

                    <br/>
                    <br/>
                    <div className="col s6 center">
                        <button id="btnRefresh" className="btn btn-success">Start Lecturer Tracker</button>&nbsp;&nbsp;
                        <button id="btnRefresh" className="btn btn-success">Start Gesture Detection</button>&nbsp;&nbsp;
                        <button id="btnRefresh" className="btn btn-success">Stop Tracker</button>&nbsp;&nbsp;
                        <button id="btnClear" className="btn btn-danger">Clear</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainView_vm;