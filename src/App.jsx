import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import LanguagesSection from './components/LanguagesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection /> 
      <FeaturesSection /> 
      <LanguagesSection /> 
      <CallToActionSection /> 
      <TestimonialsSection /> 
      <Footer /> 
      {/* Footer */}
    </div>
  );
}

export default App;

