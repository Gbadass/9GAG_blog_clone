import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Navigation from "./component/Navigation";



function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/navigation" element={<Navigation/>}/>

      </Routes>
      </BrowserRouter>


    </div>
  )
}


export default App;