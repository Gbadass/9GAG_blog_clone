
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Createpost from "./component/Createpost";
import Navigation from "./component/Navigation";
import Home from "./component/Home";
import Landingpage from "./component/Landingpage";
import Landingpagenavbar from "./component/Landingpagenavbar";
import Profile from "./component/Profile";
import Singlepostpage from "./component/Singlepostpage";
import { ChakraProvider } from '@chakra-ui/react'



function App(){
  return(
    <div>
      <ChakraProvider>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/navigation" element={<Navigation/>}/>
        <Route path="/createpost" element={<Createpost/>}/>
        <Route path="/landingpage" element={<Landingpage/>}/>
        <Route path="/landingpagenavbar" element={<Landingpagenavbar/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/singlepostpage/:postId" element={<Singlepostpage/>}/>
       
        {/* <Route path="/" element={<Section1/>}/> */}

      </Routes>
      </BrowserRouter>
      </ChakraProvider>


    </div>
  )
}


export default App;