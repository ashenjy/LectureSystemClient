import React, { Component } from 'react';
import './App.css';
import './css/SideNav_aj.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/layouts/Home';
import About from './components/layouts/About';
import Layout from './components/layouts/Layout';

import LoginSelection_aj from './components/presentation/beforeLogin/LoginSelection_aj';

class App extends Component {
    render() {
        return (
                <BrowserRouter>
                    <Layout>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/loginselection" component={LoginSelection_aj} />
                    </Layout>
                </BrowserRouter>
        );
    }
}

export default App;