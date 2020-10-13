import React from 'react';
import {BrowserRouter as Router,
  Route,Switch} from 'react-router-dom';
  import './home.css';
  import home from './home';
  import Dashboard from './dashboard';
  import AllJobs from "../Homepage/AllJobs";
  import Personal from '../Homepage/Personal';

function Routes3() {
  return (
    <Router>
      <div> 
        
         <Route exact path="/home" component = {home}/>
         <Route exact path= "/dashboard" component={Dashboard}></Route>
         <Route exact path="/alljobs" component={AllJobs}/>
         <Route path="/personal" component = {Personal}/>
      </div>
    </Router>

    
  );
}

export default Routes3;