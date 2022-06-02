import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import PlayerControl from './components/PlayerControl'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="main-page" >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tim-kiem/tat-ca' element={<Search />} />
        </Routes>
      </div>
      <PlayerControl />
    </div>
  );
}

export default App;
