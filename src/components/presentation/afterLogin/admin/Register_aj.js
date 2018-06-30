import React, { Component} from 'react';
import { submitRegister, getRegsterResponseMessage } from '../../../../actions/authActions_aj';
import { connect } from 'react-redux';

class Register_aj extends Component {

    constructor(){
        super();

        this.state = {
            details:{
            }
        };
    }

    componentDidMount(){
        this.props.dispatch(getRegsterResponseMessage(''));
    }

    updateDetails(event){
        let updateDetails = Object.assign({}, this.state.details);

        updateDetails[event.target.id] = event.target.value;
        this.setState({
            details: updateDetails
        });
    }

    register(){
        this.props.dispatch(submitRegister(this.state.details));
    }

    render(){

        const successMsg = (<div className="alert alert-success" role="alert">Successfully Registered..</div>);
        const errorMsg = (<div className="alert alert-danger" role="alert">General Application Error</div>);

        return (
            <div>
                {/*<h3>Register</h3>*/}
                {/*Username <input onChange={this.updateDetails.bind(this)} id="username" type="text" placeholder= "Username"/><br/>*/}
                {/*Password <input onChange={this.updateDetails.bind(this)} id="password" type="password" placeholder= "Password"/><br/>*/}
                {/*UserType*/}
                {/*<select onChange={this.updateDetails.bind(this)} id="usertype">*/}
                    {/*<option value="admin">Admin</option>*/}
                    {/*<option value="lecturer">Lecturer</option>*/}
                    {/*<option value="student">Student</option>*/}
                {/*</select>*/}
                {/*<button onClick={this.register.bind(this)}>Register</button>*/}
                {this.props.getRegisterResponseMsg === 'success' ? successMsg : null}
                {this.props.getRegisterResponseMsg === 'error' ? errorMsg : null}

                <div className="controls">

                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="form_name">User Name *</label>
                                <input id="username" onChange={this.updateDetails.bind(this)}
                                       type="text" name="name" className="form-control"
                                       placeholder="Please enter the username *" required="required"
                                       data-error="User Name is required."/>
                                    {/*<div className="help-block with-errors"></div>*/}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="form_lastname">Password *</label>
                                <input id="password" onChange={this.updateDetails.bind(this)}
                                       type="text" name="surname" className="form-control"
                                       placeholder="Please enter the password *" required="required"
                                       data-error="Password is required."/>
                                    {/*<div className="help-block with-errors"></div>*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="form_name">User Type *</label>
                                <select className="form-control" onChange={this.updateDetails.bind(this)}
                                        id="usertype">
                                    <option value="admin">Admin</option>
                                    <option value="lecturer">Lecturer</option>
                                    <option value="student">Student</option>
                                </select>
                                {/*<div className="help-block with-errors"></div>*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-12">
                            <input type="submit" onClick={this.register.bind(this)}
                                   className="btn btn-success btn-send" value="Register"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        getRegisterResponseMsg: state.auth.getRegisterResponseMsg
    }
}

export default connect(mapStateToProps)(Register_aj);