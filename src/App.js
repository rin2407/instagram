import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import RedirectUrl from './router/RedirectUrl';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
           <RedirectUrl></RedirectUrl>
        </Router>
      </div>
    );
  }
}

export default App;