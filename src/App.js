import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ComingSoon from './component/ComingSoon';
import About from './component/About';
import Blog from './component/Blog'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
