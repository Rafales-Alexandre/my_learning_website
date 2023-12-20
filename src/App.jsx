import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import LanguagesSection from './components/LanguagesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CallToActionSection from './components/CallToActionSection';
import LanguagePage from './Pages/LanguagePage'; // Assume you will create this component
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <NavBar />
        <Routes> {/* Use 'Routes' instead of 'Switch' */}
          <Route path="/" element={
            <>
              <HeroSection />
              <FeaturesSection />
              <LanguagesSection />
              <TestimonialsSection />
              <CallToActionSection />
            </>
          } />
          <Route path="/languages" element={<LanguagePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

