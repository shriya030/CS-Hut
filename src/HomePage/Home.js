import Banner from "./Banner";
import Aboutus from "./Aboutus";
import Footer from "./Footer";
import PropagateLoader from "react-spinners/PropagateLoader";
import React from "react";
import {useState,useEffect} from 'react' 



function Home() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);
if(loading){
  return(
    //Display Preloader
<div className="MyLoader">
      <PropagateLoader size={30} margin={1} color={"#66f0f1"} />
    </div>
  )
}
      return(
      //Display Content after preloader
      <div>
    <Banner />
    <Aboutus />
    <Footer />
  </div>
  )
}

export default Home;
