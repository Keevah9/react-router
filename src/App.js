import React,{ useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'; 
import Home from "./Pages/HomePage";
import About from "./Pages/About";
import Products from "./Pages/Products";
import ErrorPage from "./Pages/ErrorPage";
import LandingPage from "./Pages/LandingPage";
import SingleProduct from "./Pages/SingleProduct";
import Dashboard from './Pages/Dashboard'
import Login from "./Pages/Login";
import ProtectedRoute from "./Pages/ProtectedRoute";
import SharedProducts from "./Pages/SharedProducts";
function App() {
  const [user,setUser] = useState(null)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* nested routes */}
          <Route index element={<LandingPage />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<SharedProducts />}>
            <Route index element={<Products />} />
            <Route path=":productIds" element={<SingleProduct />} />
          </Route>

          <Route path="login" element={<Login setUser={setUser} />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
