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
    image:'/images/ext_slide1.webp',
    text:'Aerodynamisch optimierte Formen werden zu funktionalen Details. Von den intelligenten Lufteinlässen in der Front über die luftdurchströmten Radhäuser bis hin zu dem prägnanten Heckdiffusor.' },
  { title:'Leuchtendes Statement',
    image:'/images/ext_slide2.jpg',
    text:'Die optionalen Matrix LED-Scheinwerfer mit Audi Laserlicht sind elementarer Bestandteil einer progressiven Designsprache. Ein unverwechselbares Statement ist die markante Lichtsignatur mit dem blauen X-Element des Audi Laserlichts.' },
  { title:'Animiertes Leuchtenband',
    image:'/images/ext_slide3.webp',
    text:'Über die gesamte Breite des Hecks verläuft ein animiertes Leuchtenband, das an den Außenkanten, in den eigentlichen Leuchteinheiten, von einzelnen keilförmigen LED-Segmenten begrenzt wird.' },
];
const interiorItems =[
  { title:'Digitalisierung maßgeschneidert:',
    image:'/images/int_slide1.webp',
    text:'Navigieren, kommunizieren, informieren oder das umfangreiche Infotainment-Angebot genießen. Mit einem Bedienkonzept, das fasziniert.' },
  { title:'Die automobile Moderne:',
    image:'/images/int_slide2.jpg',
    text:'Die Designer haben sich für den konsequenten Einsatz ressourcenschonender Materialien entschieden. Ein Beispiel: komplett lederfreies Interieur. ' },
  { title:'Faszinierendes Bedienkonzept:',
    image:'/images/int_slide3.webp',
    text:'Das funktionale Zentrum befindet sich vorn, sichtbar auf den Fahrer fokussiert, eingerahmt von Mittelkonsole und Cockpit mit komfortablem Touchscreen.' },
  { title:'Hintere Sitzreihe:',
    image:'/images/int_slide4.webp',
    text:'Die ausgeprägten äußeren Fondsitze mit einer zusätzlichen, mittigen Sitzmöglichkeit unterstreichen den sportlichen Charakter.' },
];
const prefItems =[
  { title:'Schnelles Laden',
    image:'/images/pref_slide1.jpg',
    text:'Seine Performance zeigt der Audi e-tron GT quattro auch beim Laden: an 800-Volt-Ladesäulen mit bis zu 270 kW – serienmäßig. In ca. 5 Minuten kann Energie für die nächsten 100 km geladen werden. In ungefähr 22,5 Minuten ist die Batterie bereits wieder von 5 % zu ca. 80 % geladen.' },
  { title:'Laden zu Hause',
    image:'/images/pref_slide2.jpg',
    text:'Der Audi e-tron GT quattro kann serienmäßig mit bis zu 11 kW maximaler Wechselstrom-Ladeleistung (AC) geladen werden. Für das schnellere Laden mit 22 kW zu Hause ist das optionale e-tron Ladesystem connect in Verbindung mit dem optionalen On-board-Ladegerät bis 22 kW (AC) erforderlich.' },
  { title:'Laden unterwegs: ',
    image:'/images/pref_slide3.jpg',
    text:' bündelt einen Vertrag, eine Karte, einen Zugang – über Landesgrenzen hinweg. So stehen mehr als 200.000 Ladepunkte in 26 europäischen Ländern für das Laden unterwegs zur Verfügung. ' },
];

export default App;
