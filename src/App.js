import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="*" element={<div style={{padding: 40}}>We’ll be back soon.</div>} />
        </Routes>

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Navigate to={`/services/${DEFAULT_SERVICE_SLUG}`} replace />} />
          <Route path="/services/:slug" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </Router>
    </div>
  );
}

export default App;
