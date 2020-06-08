import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import Login from '../Components/auth/Login';
import Register from '../Components/auth/Register';
import Home from '../Components/home/Home';
import Explore from '../Components/explore/Explore';
class RedirectUrl extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Login}/>
                <Route exact path='/signup' component={Register}/>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/explore' component={Explore}/>
            </div>
        );
    }
}

export default RedirectUrl;