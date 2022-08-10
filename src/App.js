// import logo from './logo.svg';
import './App.css';

import Home from './components/pages/Home';
import Display from './components/pages/Display';
import Petition from './components/pages/Petition';
import Browse from './components/pages/Browse';
import MyPetitions from './components/pages/MyPetitons';


import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/display' element={<Display/>} />
      <Route path='/petition' element={<Petition/>} />
      <Route path='/browse' element={<Browse/>} />
      <Route path='/mypetitions' element={<MyPetitions/>} />
      
    </Routes>
    </>
  );
}

export default App;