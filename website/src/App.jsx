import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import './App.css';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import Technology from './pages/Technology';
import Industries from './pages/Industries';
import Blogs from './pages/Blogs';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

// Detail Pages
import ServiceDetail from './pages/ServiceDetail';
import ProductDetail from './pages/ProductDetail';
import TechDetail from './pages/TechDetail';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scroll to top helper component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/technology/:id" element={<TechDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;
