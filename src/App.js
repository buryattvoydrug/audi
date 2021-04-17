import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Parallax from "./components/Parallax";
import SliderPage from "./components/pages/SliderPage";
import Technic from "./components/pages/Technic";
import {isMobile} from 'react-device-detect'

function App() {
  return (
    <>
      <Home/>
      <Parallax videoUrl={"/images/exterior.mp4"} 
      maskUrl={isMobile? "/images/iPhone 11 Pro Max - 2.png" : "/images/exterior.png"} />
      <SliderPage items={exteriorItems} type={'right'}/>
      <Parallax videoUrl={"/images/video.mp4"}
      maskUrl={isMobile? "/images/iPhone 11 Pro Max - 1.png" : "/images/design.png"} />
      <SliderPage items={interiorItems} type={'left'}/>
      <Parallax videoUrl={"/images/video.mp4"} noblur/>
      <Technic/>
      <SliderPage items={prefItems} type={'bottom'}/>
      <Footer/>
      
    </>
  );
}

const exteriorItems =[
  { title:'Ausdrucksstarke Akzente',
    image:'/images/slider1.png',
    text:'Aerodynamisch optimierte Formen werden zu funktionalen Details. Von den intelligenten Lufteinlässen in der Front über die luftdurchströmten Radhäuser bis hin zu dem prägnanten Heckdiffusor.' },
  { title:22,
    image:'/images/slider1.png',
    text:'Das Design des Audi e-tron GT quattro ist die konsequente Verkörperung elektrischer Mobilität und unverwechselbarer Audi DNA.' },
  { title:32,
    image:'/images/slider1.png',
    text:'Das Design des Audi e-tron GT quattro ist die konsequente Verkörperung elektrischer Mobilität und unverwechselbarer Audi DNA.' },
];
const interiorItems =[
  { title:1,
    image:'/images/slider1.png',
    text:'Das Design des Audi e-tron GT quattro ist die konsequente Verkörperung elektrischer Mobilität und unverwechselbarer Audi DNA.' },
  { title:2,
    image:'/images/slider1.png',
    text:'Das Design des Audi e-tron GT quattro ist die konsequente Verkörperung elektrischer Mobilität und unverwechselbarer Audi DNA.' },
  { title:3,
    image:'/images/slider1.png',
    text:'Das Design des Audi e-tron GT quattro ist die konsequente Verkörperung elektrischer Mobilität und unverwechselbarer Audi DNA.' },
];
const prefItems =[
  { title:1,
    image:'/images/slider1.png',
    text:'Das Design des Audi e-tron GT quattro ist die konsequente Verkörperung elektrischer Mobilität und unverwechselbarer Audi DNA.' },
  { title:2,
    image:'/images/slider1.png',
    text:'Das Design des Audi e-tron GT quattro ist die konsequente Verkörperung elektrischer Mobilität und unverwechselbarer Audi DNA.' },
  { title:3,
    image:'/images/slider1.png',
    text:'Das Design des Audi e-tron GT quattro ist die konsequente Verkörperung elektrischer Mobilität und unverwechselbarer Audi DNA.' },
];

export default App;
