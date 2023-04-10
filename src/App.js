 

import About from "pages/About/about";
import Home from "pages/Home/home";
import Menu from "pages/Menu/menu";
import Blog from "pages/blog/Blog";
import Contact from "pages/contact/Contact";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  return (
    <>
    
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contact" element={<Contact />} />





      </Routes>
    </Router>
    </>
  );
}

export default App
