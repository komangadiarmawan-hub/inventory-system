import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/products" element={<Product />} /> 
            </Routes>
        </Router>
    );
}