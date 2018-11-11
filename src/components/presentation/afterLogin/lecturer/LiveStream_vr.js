import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Iframe from 'react-iframe'
// Import css stylesheet
import './../../../../css/style.css';
import {config} from './../../../../configurations/config';

class LiveStream_vr extends Component {

    constructor(props){
        super(props);
        this.state = {
            redirect:false
            // videoSrc: ''
        };

    }

    /*componentDidMount(){
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
        if (navigator.getUserMedia) {
            navigator.getUserMedia({video: true}, this.handleVideo, this.videoError);
        }
    }*/
/*

    handleVideo (stream) {
        // Update the state, triggering the component to re-render with the correct stream
        // this.setState({ videoSrc: window.URL.createObjectURL("rtsp://192.168.1.110:554/1/h264major") });
    }

    videoError()
    {
        console.log('error');
    }
*/

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
                <div className="row">
                    <div className="col-xs-2"></div>
                    <div className="col-xs-8">

                    </div>
                    <div className="col-xs-2">
                        <h4> Logged in students</h4>
                        <h6>VimukthiM</h6>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-1"></div>

                    <div className="col-xs-11">

                        <Iframe url={config.kurentoUrl}
                                width="1000"
                                height="518.4"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative"
                                allowFullScreen/>

                    </div>
                </div>

                <br/> <br/>


                <div className="row">
                    <div className="col-xs-2"></div>
                    <div className="col-xs-8">
                        <h1> Screen Share Stream</h1>
                    </div>
                    <div className="col-xs-2">

                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-1"></div>

                    <div className="col-xs-8">

                        <Iframe url="https://webrtcweb.com/screen/?s=lcs_18_072"
                                width="921.6"
                                height="518.4"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative"
                                allowFullScreen/>


                        {/*<video width="800" height="400" controls autoPlay>
                            <source src="rtsp://192.168.1.110:554/1/h264major"/>
                            Your browser does not support HTML5 video.

                        </video>*/}
                        {/*<video width="800" height="400" autoPlay>*/}
                            {/*<source src={process.env.PUBLIC_URL + '/videos/222.mp4'}/>*/}
                            {/*Your browser does not support HTML5 video.*/}

                        {/*</video>*/}
                    </div>

                </div>

                <br/>

                {/*<div className="row">*/}
                    {/*<div className="col-xs-3"></div>*/}
                    {/*<div className="col-xs-3">*/}
                        {/*<button type="button" className="btn btn-primary">Rotate Camera</button>*/}
                    {/*</div>*/}
                    {/*<div className="col-xs-2">*/}
                        {/*<h4> </h4>*/}
                    {/*</div>*/}

                {/*</div>*/}
            </div>
        )
    }
}

export default LiveStream_vr;