import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class UserManagement_aj extends Component {
    render() {
        return (
            <div>
                <h3>User Management</h3>
                <ol className="breadcrumb">
                    <li><Link to={'/loginselection/userManagement/viewUser'}>View User</Link></li>
                    <li><Link to={'/loginselection/userManagement/registerUser'}>Register User</Link></li>
                </ol>

                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default UserManagement_aj;