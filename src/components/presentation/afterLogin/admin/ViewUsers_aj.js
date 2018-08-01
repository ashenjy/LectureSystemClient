import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { usersRetrieved } from "../../../../actions/authActions_aj";
import { connect } from "react-redux";
import { getAllUsers } from '../../../../actions/authActions_aj';
import {Redirect} from 'react-router-dom';

class ViewUsers_aj extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect:false,
            users: []
        };
    }

    componentDidMount() {
        fetch('/user/getAllUsers')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({
                    users: users.data.result
                });
            });
    }


    componentWillMount() {
        if (localStorage.getItem("userid")) {

        }
        else {
            this.setState({ redirect: true });
        }
    }

    renderUsers() {


        const noImages = (<td style={{ color: 'red' }}>No Images</td>);

        // const allImagesPath = "../../../../../../allImages/";
        return this.state.users.map((users, index) => {
            return (
                <tr key={users._id}>
                    <td>{index + 1}</td>
                    <td>{users.username}</td>
                    <td>{users.password}</td>
                    <td>{users.usertype}</td>
                    <td>{users.created}</td>
                    {users.images.length == 0 ? noImages : <td>{users.images.map((f, index) => <img className="register" width={50}
                        height={50} key={index} src={"/" + f} />
                    )}</td>}

                </tr>
            );
        })
    }

    render() {

        if(this.state.redirect){
            return(<Redirect to={'/loginselection'}/>)
        }
        
        return (
            <div>

                <table id="example" className="table table-striped table-bordered dt-responsive nowrap">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>User Name</th>
                            <th>Password</th>
                            <th>User Type</th>
                            <th>Created Date</th>
                            <th>Images</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUsers()}
                    </tbody>
                </table>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         getAllUsers: state.auth.getAllUsers
//     }
// }
//
// export default connect(mapStateToProps)(ViewUsers_aj);
export default ViewUsers_aj;