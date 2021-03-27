import './App.css';
import NavBar from './HomePage/NavBar';
import Banner from './HomePage/Banner';
import Aboutus from './HomePage/Aboutus';
import Footer from './HomePage/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Resources from './Components/Resources';


function App() {
  return (
    <div className="App">
      {/* <Alert variant='secondary'>This is a alert</Alert>
      <Button>classic</Button> */} 
      <Router>
      <NavBar />
      <Switch>
          <Route exact={true} path="/resources">
            <Resources />
          </Route>
          </Switch>
          </Router>
      <Banner />
      <Aboutus />
      <Footer />
    </div>
  );
}

export default App;
