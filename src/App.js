import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import MaskPage from "./components/pages/MaskPage";
import Parallax from "./components/pages/Parallax";
import SliderPage from "./components/pages/SliderPage";
import Technic from "./components/pages/Technic";


function App() {
  return (
    <>
      <Home/>
      <Technic/> 
      <Footer/>
      <Parallax/>
      <SliderPage/>
      <MaskPage/>
      
    </>
  );
}

export default App;
