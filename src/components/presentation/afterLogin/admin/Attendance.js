import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Webcam from 'react-webcam';
import { isNull } from 'util';

class Attendance extends Component {

    constructor(props) {
        super(props);
        this.state = {
            attendanceError: false,
            redirect: false
        };

        this.capture.bind(this);
        this.faceRecognize.bind(this);

    }

    componentWillMount() {
        if (sessionStorage.getItem("userid")) {

        }
        else {
            this.setState({ redirect: true });
        }
    }

    setRef = (webcam) => {
        this.webcam = webcam;
    };

    capture = () => {
        let imageSrc = this.webcam.getScreenshot();
        if (imageSrc != isNull) {
            console.log("Image src :" + imageSrc);
            let base64 = { imageString: imageSrc };
            console.log("imageString :" + base64);
            this.faceRecognize(base64);
        } else {
            console.log("Please try again!");
        }

    };

    faceRecognize(base64) {
        fetch('/student/attendance', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(base64),
            mode: 'cors'
        }).then(response => {
            if (!response.ok) {
                console.log("Client().faceRecognize().Error :" + response.statusText);
                this.setState({
                    attendanceError: true
                });
                throw Error(response.statusText);
            }
            console.log("Client().faceRecognize().Success");
            return response.json();
        })
            .then(data => {
                localStorage.setItem('name', data.data.username);
                console.log("type : " + data.data.usertype);
                localStorage.setItem('type', data.data.usertype);
                localStorage.setItem('id', data.data.userid);
                // this.props.dispatch(userLoggedIn(data.data.username, data.data.usertype));


            })
            .catch((e) => console.log(e));
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to={'/'} />)
        }

        const faceAlert = (<div className="alert alert-danger" role="alert">Face not recognized! Please try again!</div>);
        const webcamCode = (
            <div>
                <Webcam
                    audio={false}
                    height={350}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={400}
                    style={{ margin: '0 0 0 30%' }}
                />

                <button onClick={this.capture}
                    className="btn btn-primary btn-lg btn-block">Mark Attendance</button>

                {this.state.attendanceError === true ? faceAlert : null}

            </div>
        );


        return (
            <div>
                <h3>Attendance Management</h3>

                <div className="row">
                    <div className="col-md-4">
                        {webcamCode}
                    </div>
                    <div className="col-md-8">
                        <table id="example" className="table table-striped table-bordered dt-responsive nowrap">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>User Name</th>
                                    <th>User Type</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{localStorage.getItem('id')}</td>
                                    <td>{localStorage.getItem('name')}</td>
                                    <td>{localStorage.getItem('type')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        )
    }
}

export default Attendance;