import "./App.css";
import Home from "./HomePage/Home.js";
import languages from "./Data/Languages.js";
import TechLang from "./Components/TechLang";
import Languages from "./Components/Languages";
import Tech from "./Components/Tech";
import Make from "./Components/Make";
import Learn from "./Components/Learn";
import { Switch, Route } from "react-router-dom";
import technologies from "./Data/Technologies";
import NavBar from "./HomePage/NavBar";

console.log(languages);

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Alert variant='secondary'>This is a alert</Alert>
      <Button>classic</Button> */}
      <Switch>
        {/* {technologies.map((tech, i) => (
          <Route
            exact
            path={tech.proj}
            key={i}
            render={() =>
              lang.learnContent.map(item => (
                <Learn name={item.name} link={item.link} image={item.image} />
              ))
            }
          />
        ))} */}
        <Route path="/learnweb" component={Make} />
        {languages.map((lang, i) => (
          <Route
            exact
            path={lang.learnPath}
            key={i}
            render={() =>
              lang.learnContent.map(item => (
                <Learn name={item.name} link={item.link} image={item.image} />
              ))
            }
          />
        ))}
        <Route exact path="/techLang" component={TechLang} />
        <Route exact path="/Languages" component={Languages} />
        <Route exact path="/Tech" component={Tech} />
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
