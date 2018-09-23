import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class Attendance2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            attendanceError: false,
            redirect: false,
            attendanceDataSet: []
        };
       
        this.markAttendance.bind(this);
        this.getAllattendance = this.getAllattendance.bind(this);
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

    componentDidMount() {
        fetch('/student/getAllAttendance')
            .then(response => {
                return response.json();
            })
            .then(dataset => {
                this.setState({
                    attendanceDataSet: dataset.data.result
                });
            });
    }

    

    deleteAttendance(attendance, index) {

        if (attendance != null && index != null) {

            var tempAttendance = [...this.state.attendanceDataSet];
            tempAttendance.splice(index, 1);
            this.setState({
                attendanceDataSet: tempAttendance
            });

            var data = {
                attendanceId: attendance._id
            }
            fetch("/student/delete", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }).then(function (response) {
                if (!response.ok) {
                    throw new Error("Bad response from server");
                }
                return response.json();

            }).catch(function (err) {
                console.log(err)
            });
        }
    }

    organizeAttendanceDataSet() {

        return this.state.attendanceDataSet.map((dataset, index) => {
            return (
                <tr key={dataset._id}>
                    <td>{index + 1}</td>
                    <td>{dataset.username}</td>
                    <td>{dataset.usertype}</td>
                    <td>{dataset.status}</td>
                    <td>{dataset.created.substring(0, 10)}</td>
                    <td>{dataset.created.substring(12, 19)}</td>
                    <td><a onClick={() => this.deleteAttendance(dataset, index)}>Delete</a></td>
                </tr>
            );
        })
    }

    markAttendance() {
        fetch('/student/markAttendance2')
            .then(response => {
                if (!response.ok) {
                    console.log("Client().faceRecognize().Error :" + response.statusText);
                    this.setState({
                        attendanceError: true
                    });
                    throw Error(response.statusText);
                }
                console.log("Client().faceRecognize().Success");
                this.getAllattendance();
                return response.json();
            })
            .then(data => {
                
            })
            .catch((e) => console.log(e));
    }

    getAllattendance() {
        fetch('/student/getAllAttendance')
            .then(response => {
                return response.json();
            })
            .then(dataset => {
                this.setState({
                    attendanceDataSet: dataset.data.result
                });
            });
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to={'/'} />)
        }

        const faceAlert = (<div className="alert alert-danger" role="alert">Server Error! Please try again!</div>);

        return (
            <div>
                {/* <h3>Mark Attendance</h3> */}
                <div className="row">
                    <div className="col-md-4">
                        <img src="http://localhost:5004/video_feed"></img>

                        <button onClick={this.markAttendance.bind(this)}
                            className="btn btn-primary btn-lg btn-block" style={{ margin: '0 0 0 15%' }}>Mark Attendance</button>

                        {this.state.attendanceError === true ? faceAlert : null}
                    </div>
                    <div className="col-md-6" style={{ margin: '0 0 0 10%' }}>
                        <table id="example" className="table table-striped table-bordered dt-responsive nowrap">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>User Name</th>
                                    <th>User Type</th>
                                    <th>Present/Absent</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.organizeAttendanceDataSet()}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}

export default Attendance2;