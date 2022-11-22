import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
      <Router>
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route path='/registro' element={<SignUp />}/>
          <Route path='/entrar' element={<SignIn />}/> 
        </Routes>
      </Router>
  );
}

export default App;
