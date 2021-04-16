import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import MaskPage from "./components/pages/MaskPage";
import Parallax from "./components/Parallax";
import SliderPage from "./components/pages/SliderPage";
import Technic from "./components/pages/Technic";


function App() {
  return (
    <>
      <Home/>
      <Parallax videoUrl={"/images/exterior.mp4"} maskUrl={"/images/exterior.png"}/>
      <SliderPage type={'right'}/>
      <Parallax videoUrl={"/images/video.mp4"} maskUrl={"/images/design.png"}/>
      <SliderPage type={'left'}/>
      
      <Technic/>
      <SliderPage type={'bottom'}/>
      <Footer/>
      
    </>
  );
}

export default App;
