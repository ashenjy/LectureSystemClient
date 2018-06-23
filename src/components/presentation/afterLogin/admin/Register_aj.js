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
                <h3>Register</h3>
                Username <input onChange={this.updateDetails.bind(this)} id="username" type="text" placeholder= "Username"/><br/>
                Password <input onChange={this.updateDetails.bind(this)} id="password" type="password" placeholder= "Password"/><br/>
                UserType <input onChange={this.updateDetails.bind(this)} id="usertype" type="text" placeholder= "Usertype"/><br/>

                <button onClick={this.register.bind(this)}>Register</button>
                {this.props.getRegisterResponseMsg === 'success' ? successMsg : null}
                {this.props.getRegisterResponseMsg === 'error' ? errorMsg : null}
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