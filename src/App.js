import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Aboutme from './components/Aboutme'
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Tecnologias from './components/Tecnologias';


function App() {
  return (
    <>
    <Header/>
    <Introduction/>
    <Aboutme/>
    <Tecnologias/>
    <Portfolio/>
    <ContactForm/>
    <Footer/>
    </>
  );
}

export default App;
