import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="antialiased text-slate-900 bg-white selection:bg-purple-100 selection:text-primary">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/use-cases/:id" element={<ProjectDetail />} />
          <Route path="*" element={<div className="p-20 text-4xl font-bold text-blue-600">404 - NO ROUTE MATCHED <br /> Current URL: {window.location.pathname}</div>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
