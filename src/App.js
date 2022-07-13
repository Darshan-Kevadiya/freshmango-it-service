import './App.css';
import  SignIn  from './component/SignIn'
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import SignUp from './component/SignUp';
import Dashboard from './component/Dashboard';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./configs/firebaseConfig";
import { UserAuthContextProvider } from './context/UserAuthContext';


// function ProtectedRoute ({path, exact , Component}) {
//   if(localStorage.getItem('')){
//       return <Route exact={exact} path={path} component={Component} />
//   }
//   else{
//       // return <Route path='/signin'  element={<SignIn />}/>
//   }
// }

function App() {
  initializeApp(firebaseConfig);
  return (
    <div className="App">
    <UserAuthContextProvider>
  <Routes>
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    localStorage.getItem('islogin')&&<Route exact path="/dashboard" element={<Dashboard />} />
    <Route path="/" element={<SignIn/>} />
  </Routes>
  </UserAuthContextProvider>
    </div>

  );
}

export default App;
