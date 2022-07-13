import './App.css';
import  SignIn  from './component/SignIn'
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import SignUp from './component/SignUp';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./configs/firebaseConfig";

function App() {
  initializeApp(firebaseConfig);
  return (
      <BrowserRouter>
    <div className="App">
  <Routes>
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/" element={<SignIn/>} />
  </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
