import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Rockets from './components/pages/Rockets';
import Mission from './components/pages/Mission';
import Profile from './components/pages/Profile';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/components/pages/Mission" element={<Mission />} />
          <Route path="/components/pages/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
