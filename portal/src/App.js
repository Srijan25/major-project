import { Routes, Route } from 'react-router-dom';
import login from './pages/login';
import signup from './pages/signup';

function App() {
  return (
    <Routes>
      <Route path="/login" Component={login} />
      <Route path="/signup" Component={signup} />
    </Routes>
      
   
  );
}

export default App;
