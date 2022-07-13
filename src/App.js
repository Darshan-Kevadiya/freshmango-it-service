import './App.css';
import  SignIn  from './component/SignIn'
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import SignUp from './component/SignUp';

function App() {
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
