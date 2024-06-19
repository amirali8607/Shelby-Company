import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar';
import Create from './pages/Create/Create'
import Home from './pages/Home/Home'
import Recipe from './pages/Recipe/Recipe'
import Search from './pages/Searches/Searches'
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';

function App() {
  const { mode } = useTheme()
  return (
    <div className={`App ${mode}`}>
      
      <BrowserRouter>
        <Navbar />
        <ThemeSelector/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/search' element={<Search />} />
          <Route path='/details/:myId' element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
