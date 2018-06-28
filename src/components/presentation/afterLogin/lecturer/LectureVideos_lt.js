import React, { Component } from 'react';

// Import configuration file
import { config } from "../../../../configurations/config";

// Import methods from service
import { getAllVideos } from "../../../../services/videosService_lt";
import { createVideoChaptersService } from "../../../../services/videosService_lt";

// Import css stylesheet
import './../../../../css/LectureVideos_lt.css';

class LectureVideos_lt extends Component{
    constructor(props){
        super(props);

        // Initially the list is empty
        this.state = {
            videoList : []
        };

    }

    // Execute after the component has been rendered to the DOM
    componentDidMount() {
        getAllVideos().then(data=>{
            this.setState({
                videoList: data
            });
        });
    }

    // Function to create video chapters
    createVideoChapters(lectureVideo) {
        console.log('clicked');
        console.log(lectureVideo);

        createVideoChaptersService(lectureVideo).then(data=> {
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
        return (
            <div className="row">
                <div className="col-3"> </div>

                <div className="col-6">
                    <table className="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Video Name</th>
                            <th>Video</th>
                            <th>Date Uploaded</th>
                            <th>Action</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.videoList.map(video =>
                            <tr>
                                <td>{ video.subject }</td>
                                <td>{ video.videoName }</td>
                                <td>
                                    <video controls className="form-control" id="lectureVideoPreview">
                                        <source src={process.env.PUBLIC_URL + '/videos/' + video.lectureVideo}/>
                                        Your browser does not support HTML5 video.

                                    </video>
                                </td>

                                <td>{ video.dateTime.substring(4, 24) }</td>

                                {/*Display different buttons depending on processed status*/}
                                {video.status === 'unprocessed' ?
                                    <td>
                                        <button type="button" className="btn btn-primary"
                                                onClick={() => this.createVideoChapters(video.lectureVideo)}>Create
                                            Chapters
                                        </button>
                                    </td>
                                    :
                                    <td>
                                        <button type="button" className="btn btn-success"
                                                onClick={() => this.createVideoChapters(video.lectureVideo)}>View
                                            Chapters
                                        </button>
                                    </td>
                                }

                                <td>{ video.status }</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>

                <div className="col-3"> </div>
            </div>

        )
    }

}

export default LectureVideos_lt;