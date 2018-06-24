import React, { Component } from 'react';

// Import services
import { getAllVideos } from "../../../../services/videosService_lt";

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
            })
        })
    }

    render() {
        return (
            <div>
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
                                <td>{ video.lectureVideo }</td>
                                <td>{ video.dateTime.substring(4, 24) }</td>
                                <td>
                                    <button type="button" className="btn btn-primary">Create Chapters</button>
                                </td>
                                <td>{ video.status }</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default LectureVideos_lt;