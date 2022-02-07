import { BrowserRouter,Routes,Route}  from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
const App = () => {
  return(
   <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/"element={<Home/>}></Route>
          <Route exact path="/About"element={<About/>}></Route>
          <Route exact path="/Contact"element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;