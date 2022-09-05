
import './App.css';
import {Route, Routes} from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Reg from './components/Reg/Reg';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/reg' element={<Reg />}/>
      </Routes>
    </div>
  );
}

export default App;
