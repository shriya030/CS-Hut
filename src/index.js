import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TechLang from './Components/TechLang';
import Languages from './Components/Languages';
import Tech from './Components/Tech';
import Make from './Components/Make';
import Learn from './Components/Learn';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>

  <Router>
  <Switch>
    <Route exact path = "/" component={App}></Route>
  </Switch>   
     
      <Switch>
         <Route exact path ="/techLang" component ={TechLang} />
      </Switch>

      <Switch>
        <Route exact path = "/Languages" component = {Languages} />
      </Switch>

      <Switch>
        <Route exact path='/Tech' component={Tech} />
      </Switch>

      <Switch>
        <Route exact path='/learncpp' component={Learn}/>
      </Switch>

      <Switch>
      <Route exact path='/learnweb' component={Make}/>
      </Switch>
  </Router>
    
           
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();