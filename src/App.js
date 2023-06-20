import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Aboutme from './components/Aboutme'

function App() {
  return (
    <>
    <Header/>
    <Introduction/>
    <div className='section-cont'>
      <h2 className='section-title'>Sobre mí</h2>
    </div>
    <Aboutme/>
    </>
  );
}

export default App;
