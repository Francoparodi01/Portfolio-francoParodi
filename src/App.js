import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Aboutme from './components/Aboutme'
import Portfolio from './components/Portfolio';
import VisibleComponents from './components/VisibleComponents';
import Tecnologias from './components/Tecnologías'
import 'swiper/css';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


function App() {
  return (
    <>
  <VisibleComponents>
    <Header/>
    <Introduction/>
    <Aboutme/>
    <Tecnologias/>
    <Portfolio/>
    <ContactForm/>
    <Footer/>
    </VisibleComponents>
    </>
  );
}

export default App;
