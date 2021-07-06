import "./App.css";
import Home from "./HomePage/Home.js";
import Learn from "./Components/Learn";
import ContactUs from './Components/ContactUs';
import { Switch, Route, useLocation } from "react-router-dom";
import NavBar from "./HomePage/NavBar";
import Frameworks from "./Components/Tags/Frameworks";
import frameworks from "./Data/Frameworks";
import Tags from "./Components/Tags";
import Databases from "./Components/Tags/Databases";
import databases from "./Data/Databases";
import Softwares from "./Components/Tags/Softwares";
import ScrollToTop from "./Components/ScrollToTop";
import Languages from "./Components/Tags/Languages";
import languages from "./Data/Languages.js";
import ErrorPage from "./Components/ErrorPage";
import {AnimatePresence} from 'framer-motion'
import tools from "./Data/Tools"
import Tools from "./Components/Tags/Tools"

function App() {

  /*useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);*/
const location=useLocation()
  return (
    <div className="App">

         {/*DISPLAY  PRELOADER*/}
        {/*<div className="MyLoader">
          <PropagateLoader size={30} margin={1} color={"#66f0f1"} />
        </div>*/}

        {/*DISPLAY ORIGINAL CONTENT AFTER PRELOADER*/}
        <>
          <NavBar />
      {/* <Alert variant='secondary'>This is a alert</Alert>
      <Button>classic</Button> */}
      <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            {frameworks.map((framework, i) => (
              <Route
                exact
                path={framework.path}
                key={i}
                // whenever we want to use props, we will use render instead of components
                render={() => (
                  <Learn name={framework.title} content={framework.content} />
                )}
              />
            ))}
            
            {languages.map((language, i) => (
              <Route
                exact
                path={language.path}
                key={i}
                // whenever we want to use props, we will use render instead of components
                render={() => (
                  <Learn name={language.title} content={language.content} />
                )}
              />
            ))}

            {databases.map((language, i) => (
              <Route
                exact
                path={language.path}
                key={i}
                // whenever we want to use props, we will use render instead of components
                render={() => (
                  <Learn name={language.title} content={language.content} />
                )}
              />
            ))}

            {tools.map((tool, i) => (
              <Route
                exact
                path={tool.path}
                key={i}
                // whenever we want to use props, we will use render instead of components
                render={() => (
                  <Learn name={tool.title} content={tool.content} />
                )}
              />
            ))}

            <Route exact path="/languages" component={Languages} />
            <Route exact path="/frameworks" component={Frameworks} />
            <Route exact path="/tags" component={Tags} />
            <Route exact path="/softwares" component={Softwares} />
            <Route exact path="/databases" component={Databases} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/tools" component={Tools} />
            <Route exact path="/" component={Home}></Route>
            <Route render={(props) => (
              <div>
                <ErrorPage />
              </div>
            )}></Route>
          </Switch>
          </AnimatePresence>
          <ScrollToTop />
        </>
      )


    </div>
  );
}

export default App;
