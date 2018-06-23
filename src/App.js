import React, { Component } from 'react';
import './App.css';
import './css/SideNav_aj.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/layouts/Home';
import About from './components/layouts/About';
import Layout from './components/layouts/Layout';
import UserManagement_aj from './components/presentation/afterLogin/UserManagement_aj';
import Dashboard_aj from './components/presentation/afterLogin/Dashboard_aj';
import Register_aj from './components/presentation/afterLogin/Register_aj';
import LoginSelection_aj from './components/presentation/beforeLogin/LoginSelection_aj';

class App extends Component {
    render() {
        return (
                <BrowserRouter>
                    <Layout>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/loginselection" component={LoginSelection_aj} />
                        <Dashboard_aj>
                            <Route path="/loginselection/userManagement" component={UserManagement_aj} />
                                {/*<UserManagement_aj>*/}
                                    <Route path="/loginselection/userManagement/registerUser" component={Register_aj} />
                                {/*</UserManagement_aj>*/}
                        </Dashboard_aj>
                    </Layout>
                </BrowserRouter>
        );
    }
}

export default App;