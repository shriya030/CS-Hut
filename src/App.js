import "./App.css";
import Home from "./HomePage/Home.js";
import languages from "./Data/Languages.js";
import Learn from "./Components/Learn";
import ContactUs from './Components/ContactUs';
import Feedback from './Components/Feedback'
import { Switch, Route } from "react-router-dom";
import NavBar from "./HomePage/NavBar";
import Frameworks from "./Components/Tags/Frameworks";
import frameworks from "./Data/Frameworks";
import Tags from "./Components/Tags";
import Databases from "./Components/Tags/Databases";
import Softwares from "./Components/Tags/Softwares";
import ScrollToTop from "./Components/ScrollToTop";
import Languages from "./Components/Tags/Languages";
import { useState, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import databases from "./Data/Databases";

console.log(languages);

function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        // DISPLAY PRELOADER
        <div className="MyLoader">
          <PropagateLoader size={30} margin={1} color={"#66f0f1"} />
        </div>
      ) : (
        // DISPLAY ORIGINAL CONTENT AFTER PRELOADER
        <>
          <NavBar />
          {/* <Alert variant='secondary'>This is a alert</Alert>
      <Button>classic</Button> */}
          <Switch>
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
            <Route exact path="/feedback" component={Feedback} />
            <Route exact path="/" component={Home}></Route>
          </Switch>
          <ScrollToTop />
        </>
      )}


    </div>
  );
}

export default App;
