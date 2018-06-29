import React, { Component } from 'react';
import {getRegsterResponseMessage, submitLogin} from '../../../actions/authActions_aj';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../css/loginForm_aj.css';
import avatar from '../../../css/images/avatar.png';
import Webcam from 'react-webcam';

class Login_aj extends Component {

    constructor(){
        super();

        this.state = {
            details:{
            },
            src : {
                imageString : ''
            },
            allowWebcam : false
        };

        this.confirmBox.bind(this);
        this.capture.bind(this);
        this.faceRecognize.bind(this);
    }

    componentDidMount(){
        setTimeout(this.confirmBox.bind(this), 2000)
    }

    confirmBox(){
        if (window.confirm("Allow Webcam?")) {
            this.setState({
                allowWebcam : true
            });
            console.log("this.state.allowWebcam" + this.state.allowWebcam)
        }
    }

    updateDetails(event){
        let updateDetails = Object.assign({}, this.state.details);

        updateDetails[event.target.id] = event.target.value;
        this.setState({
            details: updateDetails
        });
    }

    login(){
        this.props.dispatch(submitLogin(this.state.details));
    }

    // showImage() {
    //     const canvas = this.refs.canvas;
    //     const ctx = canvas.getContext("2d")
    //     const img = this.refs.image
    //     img.onload = () => {
    //         ctx.drawImage(img, 0, 0)
    //         // ctx.font = "40px Courier"
    //         // ctx.fillText(this.props.text, 210, 75)
    //     }
    // }

    setRef = (webcam) => {
        this.webcam = webcam;
    };

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        console.log("Image src :" + imageSrc);
        this.setState({
            src :{
                imageString : imageSrc
            }
        });
        const base64 = {  imageString : imageSrc };
        console.log("imageString :" + base64);
        // this.showImage();
        this.faceRecognize(base64);

    };

    faceRecognize(base64) {
        fetch('/user/faceLogin',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(base64),
            mode: 'cors'
        }).then(response =>{
            if (!response.ok) {
                console.log("Client().faceRecognize().Error");
                throw Error(response.statusText);
            }
            console.log("Client().faceRecognize().Success");
            return response.json();
        })
            .then(data=>{

        })
            .catch( (e) => console.log(e) );
    }


    render(){
        const webcamCode = (
            <div className="webcam">
                <Webcam
                    audio={false}
                    height={350}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={400}
                />
                <button onClick={this.capture}
                        className="btn btn-primary btn-lg btn-block">Face Login</button>
            </div>
        );

        return (
            <div>

                {/*<Link to={'/faceLogin'}>Face Login</Link>*/}

                <div className="col-md-4">
                    {this.state.allowWebcam === true ? webcamCode : null }
                </div>
                {/*<div className="row">>*/}
                    {/*<canvas ref="canvas" width={640} height={425} />*/}
                    {/*<img ref="image" src={this.state.src.imageString} className="hidden" />*/}
                {/*</div>*/}

                {/*<h3>Login</h3>*/}
                {/*Username <input onChange={this.updateDetails.bind(this)} id="username" type="text" placeholder= "Username"/><br/>*/}
                {/*Password <input onChange={this.updateDetails.bind(this)} id="password" type="password" placeholder= "Password"/><br/>*/}
                {/*<button onClick={this.login.bind(this)}>Login</button>*/}
                <div className="col-md-4">
                <div className="login-form">
                    <div className="form">
                        <div className="avatar">
                            <img src={avatar} alt="Avatar"/>
                        </div>
                        <h2 className="text-center">Login</h2>
                        <div className="form-group">
                            <input type="text" onChange={this.updateDetails.bind(this)}
                                   className="form-control" id="username" placeholder="Username"
                                   required="required"/>
                        </div>
                        <div className="form-group">
                            <input type="password" onChange={this.updateDetails.bind(this)}
                                   className="form-control" id="password" placeholder="Password"
                                   required="required"/>
                        </div>
                        <div className="form-group">
                            <button onClick={this.login.bind(this)}
                                    className="btn btn-primary btn-lg btn-block">Sign in</button>
                        </div>
                        <div className="clearfix">
                            <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
                            <a href="#" className="pull-right">Forgot Password?</a>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps)(Login_aj);