
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Createpost from "./component/Createpost";
import Navigation from "./component/Navigation";
import Home from "./component/Home";
// import Section1 from "./component/Section1"



function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/navigation" element={<Navigation/>}/>
        <Route path="/createpost" element={<Createpost/>}/>
       
        {/* <Route path="/" element={<Section1/>}/> */}

      </Routes>
      </BrowserRouter>


    </div>
  )
}


export default App;