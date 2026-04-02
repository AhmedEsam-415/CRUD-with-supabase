import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateBlog from './pages/CreateBlog';
import EditBlog from './pages/EditBlog';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/edit/:ID" element={<EditBlog />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
