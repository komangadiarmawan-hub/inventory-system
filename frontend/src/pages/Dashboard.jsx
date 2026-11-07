import { Link, useNavigate } from 'react-router-dom';
export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard Inventory System</h1>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/products" style={{ marginRight: '15px' }}>Kelola Produk</Link>
        <button 
          onClick={handleLogout} 
          style={{ padding: '5px 10px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Logout
        </button>
      </nav>
      <p>Selamat datang di sistem manajemen inventaris!</p>
    </div>
  );
}