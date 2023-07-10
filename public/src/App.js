import React from "react";
import { BrowserRouter, Routes,Route} from "react-router-dom"
import "./App.css";
import Home from "./pages/Home";
import NetflixShow from "./pages/NetflixShow";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";




function App() {
  return (
    <BrowserRouter>

    <div className="App">
      <ScrollToTop/>
      <switch>
        <Routes>
      <Route path="/" Component={Home} />
      <Route path= "/netflix-show" Component={NetflixShow}/>
      </Routes>
      </switch>
      <Footer />
</div>

    
    </BrowserRouter>
  );
}


export default App;
