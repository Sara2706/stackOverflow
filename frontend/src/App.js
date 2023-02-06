import './App.scss'
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import AddQuestion from "./pages/AddQuestion/addQuestion";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import Single from "./pages/Single/single";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';


function App() {
  const {user} = useContext(AuthContext) ;
  console.log(user)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />}/>
        <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register />}/>
        <Route path="/addquestion" element={user ? <AddQuestion /> : <Navigate replace to="/login" />}/>
        <Route path="/question/:id" element={user ? <Single /> : <Navigate replace to="/login" />}/>
      </Routes>
    </Router>
  );
}

export default App;
