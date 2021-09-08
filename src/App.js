import React, { Component, createRef } from 'react'
import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import Home from './pages/Index/Index.jsx'
import Error404 from './pages/Error404/Error404.jsx'

class App extends Component {
  state = {
    
  }

  render() {
    return (
      <div className="screen">
        <Router>
          {/* Use Switch to avoid 404 not rendering on all pages. */}
          <Switch>
            {/*All our Routes goes here!*/}
            <Route exact path="/" component={Home} />
            <Route component={Error404} />
          </Switch>
        </Router>
      </div>
      
    )
  }
}

export default App;