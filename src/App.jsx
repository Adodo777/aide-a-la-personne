import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Prestations from './pages/Prestations';
import Tarifs from './pages/Tarifs';
import Avis from './pages/Avis';
import Liens from './pages/Liens';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prestations" element={<Prestations />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/avis" element={<Avis />} />
            <Route path="/liens" element={<Liens />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

