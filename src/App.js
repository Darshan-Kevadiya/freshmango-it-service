import './App.css';
import  SignIn  from './component/SignIn'
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import SignUp from './component/SignUp';
import Dashboard from './component/Dashboard';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./configs/firebaseConfig";
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './component/ProtectedRoute';

function App() {
  initializeApp(firebaseConfig);
  return (
    <div className="App">
    <UserAuthContextProvider>
  <Routes>
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route exact path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    <Route path="*" element={<SignIn/>} />
  </Routes>
  </UserAuthContextProvider>
    </div>

  );
}

export default App;
