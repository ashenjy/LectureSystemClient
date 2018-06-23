import constants from '../constants/actionTypes'

var initialState = {
    loggedIn: localStorage.getItem('token') ? true : false,
    username: localStorage.getItem('username') ? localStorage.getItem('username') : '',
    usertype: localStorage.getItem('usertype') ? localStorage.getItem('usertype') : '',
    getRegisterResponseMsg: ''

}

export default (state = initialState, action) => {

    var updated = Object.assign({}, state);

    switch(action.type) {

        case constants.USER_REGISTERED:
            updated['loggedIn'] = true;
            updated['username'] = action.username;
            updated['usertype'] = action.usertype;

            return updated;

        case constants.USER_LOGGEDIN:
            updated['loggedIn'] = true;
            updated['username'] = action.username;
            updated['usertype'] = action.usertype;
            return updated;

        case constants.USER_LOGOUT:
            updated['loggedIn'] = false;
            updated['username'] = '';
            updated['usertype'] = '';
            updated['getRegisterResponseMsg'] = '';
            return updated;

        case constants.GET_REGISTER_RESPONSE_MESSAGE:
            updated['getRegisterResponseMsg'] = action.getRegisterResponseMsg;
            return updated;


        default:
            return state;
    }
}