import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Navigation from "./component/Navigation";
// import Section1 from "./component/Section1"



function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/navigation" element={<Navigation/>}/>
        {/* <Route path="/" element={<Section1/>}/> */}

      </Routes>
      </BrowserRouter>


    </div>
  )
}


export default App;