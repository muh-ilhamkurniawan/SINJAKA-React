import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();  // Hook untuk navigasi

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Selamat Datang di SINJAKA</h1>
      <p>Ini adalah halaman selamat datang aplikasi Anda.</p>
      <button onClick={() => navigate('/next-page')} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Halaman Berikut
      </button>
    </div>
  );
}

export default WelcomePage;
