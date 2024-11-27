import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';

function App() {
  return (
    <div className='mt-10 p-10 font-sans'>

      <Routes>
        <Route path="/" element={<div>
          <NavBar />
          <Home />
        </div>} />
        
        <Route path='/pastes' element={
          <div>
            <NavBar />
            <Paste />
          </div>
        }
        />
        <Route path='/pastes/:id' element={<div>
          <NavBar/>
          <ViewPaste/>
        </div>} />
      </Routes>


    </div>
  );
}

export default App;
