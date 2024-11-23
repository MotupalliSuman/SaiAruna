
import './App.scss';
import Header from './components/header/Header';
import About from './containers/about/About';
import Banner from './containers/banner/Banner';

function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <About/>
    </div>
  );
}

export default App;
