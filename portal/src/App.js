import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import  Student  from './pages/student';
import  Teacher  from './pages/teacher';
import Parent from './pages/parent';
import Home from './pages/home';
import Navbar from './pages/navbar';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/login" Component={Login} />
      <Route path="/signup" Component={Signup} />
      <Route path="/student" Component={Student} />
      <Route path="/teacher" Component={Teacher} />
      <Route path="/parent" Component={Parent} />
      <Route path="/" Component={Home} />
    </Routes>
      </>
   
  );
}

export default App;
