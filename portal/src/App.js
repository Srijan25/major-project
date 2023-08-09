import { Routes, Route } from 'react-router-dom';
import login from './pages/login';
import signup from './pages/signup';
import  student  from './pages/student';
import  teacher  from './pages/teacher';
import parent from './pages/parent';
function App() {
  return (
    <Routes>
      <Route path="/login" Component={login} />
      <Route path="/signup" Component={signup} />
      <Route path="/student" Component={student} />
      <Route path="/teacher" Component={teacher} />
      <Route path="/parent" Component={parent} />
    </Routes>
      
   
  );
}

export default App;
