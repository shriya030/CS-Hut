import './App.css';
import NavBar from './HomePage/NavBar';
import Banner from './HomePage/Banner';
import Aboutus from './HomePage/Aboutus';
import Footer from './HomePage/Footer';


function App() {
  return (
    <div className="App">
      {/* <Alert variant='secondary'>This is a alert</Alert>
      <Button>classic</Button> */} 
      <NavBar />
      <Banner />
      <Aboutus />
      <Footer />
    </div>
  );
}

export default App;
