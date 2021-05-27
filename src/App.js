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
import Frameworks from "./Components/Frameworks";
import frameworks from "./Data/Frameworks";

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

        {languages.map((tech, i) => (
          <Route
            exact
            path={tech.projPath}
            key={i}
            render={() => (
              <Make name={tech.projectheading} resources={tech.ApplyContent} />
            )}
          />
        ))}

        {technologies.map((learn, i) => (
          <Route
            exact
            path={learn.learnPath}
            key={i}
            render={() => (
              <Learn name={learn.learnheading} resources={learn.learnContent} />
            )}
          />
        ))}

        {technologies.map((tech, i) => (
          <Route
            exact
            path={tech.projPath}
            key={i}
            render={() => (
              <Make name={tech.projectheading} resources={tech.ApplyContent} />
            )}
          />
        ))}
        <Route exact path="/techLang" component={TechLang} />
        <Route exact path="/Languages" component={Frameworks} />
        <Route exact path="/Tech" component={Tech} />
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
