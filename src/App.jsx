import Experties from "./components/Experties/Experties";
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import css from './styles/App.module.scss'
import People from "./components/People/people"
import Footer from "./components/Footer/Footer";
const App = () => {
  
 return <div className={`bg-primary ${css.container}`}>

 <Header/>
  <Hero/>
  <Experties/>
  <Works/>
  <Portfolio/>
  <People/>
  <Footer />
 </div>;
};

export default App;
