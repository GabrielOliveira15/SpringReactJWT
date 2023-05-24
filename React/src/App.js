import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import ListaPeca from './pages/peca/Lista';

function App() {

  const PrivateRoute = ({ children, redirectTo }) => {
    const isAuthenticated = localStorage.getItem("token");
    if(isAuthenticated !== null) {
      return isAuthenticated ? children : <Navigate to={redirectTo} />;
    }
    console.log("isAuth: ", isAuthenticated);
  };

  return (
     <>
     <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Login/>} /> 

        <Route path="/peca/lista" element={<PrivateRoute redirectTo="/">
          <ListaPeca />
        </PrivateRoute>} /> 
      </Routes>  
     </BrowserRouter>
     </>
     
  );
}

export default App;
