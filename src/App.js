import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import RedirectUrl from './router/RedirectUrl';

class App extends Component {
  render() {
    return (
        <Router>
           <RedirectUrl></RedirectUrl>
        </Router>
    );
  }
}
export default App