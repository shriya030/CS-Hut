import "./App.css";
import Home from "./HomePage/Home.js";
import languages from "./Data/Languages.js";
import Learn from "./Components/Learn";
import ContactUs from "./Components/ContactUs";
import { Switch, Route, useLocation } from "react-router-dom";
import NavBar from "./HomePage/NavBar";
import Frameworks from "./Components/Tags/Frameworks";
import frameworks from "./Data/Frameworks";
import Tags from "./Components/Tags";
import Databases from "./Components/Tags/Databases";
import Softwares from "./Components/Tags/Softwares";
import ScrollToTop from "./Components/ScrollToTop";
import Languages from "./Components/Tags/Languages";
import databases from "./Data/Databases";
import ErrorPage from "./Components/ErrorPage";
import { AnimatePresence } from "framer-motion";
import React from "react";

console.log(languages);

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <>
        <NavBar />
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

            <Route exact path="/languages" component={Languages} />
            <Route exact path="/frameworks" component={Frameworks} />
            <Route exact path="/tags" component={Tags} />
            <Route exact path="/softwares" component={Softwares} />
            <Route exact path="/databases" component={Databases} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/" component={Home}></Route>
            <Route
              render={props => (
                <div>
                  <ErrorPage />
                </div>
              )}
            ></Route>
          </Switch>
        </AnimatePresence>
        <ScrollToTop />
      </>
    </div>
  );
}

export default App;
