import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Parallax from "./components/Parallax";
import SliderPage from "./components/pages/SliderPage";
import Technic from "./components/pages/Technic";
import {isMobile} from 'react-device-detect'
import TextPage from "./components/pages/TextPage";
import ConfigPage from "./components/pages/ConfigPage";

function App() {

  



  return (
    <>
      <Home/>
      <ConfigPage />
      <Parallax videoUrl={"/images/exterior.mp4"} type={'exterior'}
      maskUrl={isMobile? "/images/iPhone 11 Pro Max - 2.png" : "/images/exterior.png"} />
      <TextPage content={textPages} number={0}/>
      <SliderPage items={exteriorItems} type={'right'}/>
      <Parallax videoUrl={"/images/video.mp4"} type={'interior'}
      maskUrl={isMobile? "/images/iPhone 11 Pro Max - 1.png" : "/images/design.png"} />
      <TextPage content={textPages} number={1}/>
      <SliderPage items={interiorItems} type={'left'}/>
      <Parallax videoUrl={"/images/video.mp4"} noblur/>
      <Technic id="technic" />
      <SliderPage items={prefItems} type={'bottom'}/>
      <Footer/>
      
    </>
  );
}

const exteriorItems =[
  { title:'Выразительные акценты',
    image:'/images/ext_slide1.webp',
    text:'Оптимизированные аэродинамические формы становятся функциональными деталями. От интеллектуальных воздухозаборников в передней части до колесных арок с эффектным воздушным потоком и впечатляющего заднего диффузора.' },
  { title:'Яркое заявление',
    image:'/images/ext_slide2.jpg',
    text:'Опциональные светодиодные фары Matrix с лазерным лучом Audi являются неотъемлемой частью языка прогрессивного дизайна. Яркая световая подпись в виде синего X-элемента лазерного фонаря Audi является безошибочным заявлением.' },
  { title:'Анимированная полоса огней',
    image:'/images/ext_slide3.webp',
    text:'Анимированная полоса огней проходит по всей ширине кормы и ограничена отдельными клиновидными сегментами светодиодов на внешних краях реальных осветительных устройств.' },
];
const interiorItems =[
  { title:'Мультимедиа система:',
    image:'/images/int_slide1.webp',
    text:'Перемещайтесь, общайтесь, информируйте или наслаждайтесь обширным предложением информационно-развлекательной системы. С захватывающей концепцией управления.' },
  { title:'Современный автомобиль:',
    image:'/images/int_slide2.jpg',
    text:'Дизайнеры сделали ставку на последовательное использование ресурсосберегающих материалов. Пример: салон полностью без кожи. ' },
  { title:'Увлекательная концепция управления:',
    image:'/images/int_slide3.webp',
    text:'Функциональный центр расположен спереди, явно ориентированный на водителя, обрамленный центральной консолью и кабиной с удобным сенсорным экраном.' },
  { title:'Задний ряд сидений:',
    image:'/images/int_slide4.webp',
    text:'Ярко выраженные крайние задние сиденья с дополнительным центральным сиденьем подчеркивают спортивный характер.' },
];
const prefItems =[
  { title:'Быстрая зарядка',
    image:'/images/pref_slide1.jpg',
    text:'Audi e-tron GT quattro также демонстрирует свои характеристики при зарядке: на зарядных станциях на 800 вольт и мощностью до 270 кВт - в стандартной комплектации. Энергию можно зарядить на следующие 100 км примерно за 5 минут. Примерно через 22,5 минуты аккумулятор уже снова заряжается с 5% до примерно 80%.' },
  { title:'Зарядка дома',
    image:'/images/pref_slide2.jpg',
    text:'Audi e-tron GT quattro в стандартной комплектации может заряжаться максимальной мощностью до 11 кВт переменного тока. Для более быстрой зарядки дома мощностью 22 кВт требуется дополнительная система зарядки e-tron, подключаемая вместе с дополнительным бортовым зарядным устройством до 22 кВт (переменного тока).' },
  { title:'Зарядка в пути: ',
    image:'/images/pref_slide3.jpg',
    text:' В 26 странах Европы для зарядки на ходу доступно более 200 000 пунктов зарядки. ' },
];
const textPages=[
  {
    title:'Основные данные: четыре двери, пять мест.',
    text:'Audi e-tron GT quattro2 демонстрирует современный прогресс. Он сочетает в себе спортивность, качество и комфорт одновременно. Спортивные передние сиденья Plus со встроенными подголовниками обеспечивают хорошую боковую поддержку благодаря выраженным боковым валикам сидений при поворотах и ​​при спортивном вождении.'
  },
  {
    title:'Новые технологии quattro',
    text:'Полностью регулируемый привод quattro в сочетании с системой электропривода обеспечивает интеллектуальное распределение мощности между отдельными колесами. Если есть хорошее сцепление с дорогой, в первую очередь приводится передний мост.'
  },
]

export default App;
