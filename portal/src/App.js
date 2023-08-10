import { Routes, Route } from 'react-router-dom';
import login from './pages/login';
import signup from './pages/signup';
import  student  from './pages/student';
import  teacher  from './pages/teacher';
import parent from './pages/parent';
import home from './pages/home';
function App() {
  return (
    <Routes>
      <Route path="/login" Component={login} />
      <Route path="/signup" Component={signup} />
      <Route path="/student" Component={student} />
      <Route path="/teacher" Component={teacher} />
      <Route path="/parent" Component={parent} />
      <Route path="/" Component={home} />
    </Routes>
      
   
  );
}

export default App;
