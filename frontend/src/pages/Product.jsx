import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Product() {
    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        const token = localStorage.getItem('token');
        axios.get('http://127.0.0.1:8000/api/products', {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            const resData = response.data;
            let productData = [];
            if (Array.isArray(resData)) {
                productData = resData;
            } else if (resData && Array.isArray(resData.data)) {
                productData = resData.data;
            }
            
            setProducts(productData.slice(0, 5));
        })
        .catch(error => {
            console.error("Gagal mengambil data produk:", error);
        });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const getProductImage = (name) => {
        if (name.includes('Tas Ransel')) {
            return "public/images/tas.jpg";
        } else if (name.includes('Jas Almamater')) {
            return "public/images/almamaterundiksha.jpg";
        } else if (name.includes('Tumbler')) {
            return "public/images/tumbler.jpg";
        } else if (name.includes('Buku Catatan')) {
            return "public/images/buku.jpg";
        } else if (name.includes('Kalkulator')) {
            return "public/images/kalkulator.jpg";
        }
    };

    return (
        <div style={{ padding: '20px', color: '#fff', backgroundColor: '#121212', minHeight: '100vh' }}>
            <h2 style={{ textAlign: 'center' }}>Daftar Produk Inventaris</h2>
            <p style={{ textAlign: 'center' }}>
                <a href="/dashboard" style={{ color: '#61dafb' }}>Kembali ke Dashboard</a>
            </p>
            <table border="1" style={{ width: '100%', textAlign: 'center', borderCollapse: 'collapse', borderColor: '#444' }}>
                <thead>
                    <tr style={{ backgroundColor: '#222' }}>
                        <th style={{ padding: '10px', textAlign: 'center' }}>ID</th>
                        <th style={{ padding: '10px', textAlign: 'center' }}>Gambar</th>
                        <th style={{ padding: '10px', textAlign: 'center' }}>Nama Produk</th>
                        <th style={{ padding: '10px', textAlign: 'center' }}>Stok</th>
                        <th style={{ padding: '10px', textAlign: 'center' }}>Harga Satuan</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.length > 0 ? (
                        products.map((product, index) => (
                            <tr key={product.id || index}>
                                {}
                                <td style={{ padding: '10px', verticalAlign: 'middle' }}>{index + 1}</td>
                                <td style={{ padding: '10px', verticalAlign: 'middle' }}>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <img 
                                            src={getProductImage(product.name)} 
                                            alt={product.name} 
                                            width="50" 
                                            height="50" 
                                            style={{ objectFit: 'cover', borderRadius: '4px' }} 
                                        />
                                    </div>
                                </td>
                                <td style={{ padding: '10px', verticalAlign: 'middle' }}>{product.name}</td>
                                <td style={{ padding: '10px', verticalAlign: 'middle' }}>{product.stock}</td>
                                <td style={{ padding: '10px', verticalAlign: 'middle' }}>Rp {Number(product.unit_price || 0).toLocaleString('id-ID')}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" style={{ textAlign: 'center', padding: '20px' }}>Belum ada data produk.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}