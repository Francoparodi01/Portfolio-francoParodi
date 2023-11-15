import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Aboutme from './components/Aboutme'
import Portfolio from './components/Portfolio';
import VisibleComponents from './components/VisibleComponents';
import 'swiper/css';


function App() {
  return (
    <>
  <VisibleComponents>
    <Header/>
    <Introduction/>
    <Aboutme/>
    <Portfolio/>
    </VisibleComponents>
    </>
  );
}

export default App;
