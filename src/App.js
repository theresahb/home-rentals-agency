import './App.css';
import AddProperty from './components/AddProperty';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Properties from './components/Properties';
import Services from './components/Services';
import Testimonies from './components/Testimonies';

function App() {
  return (
    <div className="App flex flex-col">
      <Hero />
      <Features />
      <Properties />
      <Services />
      <AddProperty />
      <Testimonies />
      <Footer />
    </div>
  );
}

export default App;
