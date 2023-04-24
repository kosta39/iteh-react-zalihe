import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Filter from './page/Filter';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
