import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NextPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();  // Hook untuk navigasi

  // Fetch data dari backend saat komponen dimount
  useEffect(() => {
    axios.get('http://localhost:3001/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Data dari SQL</h1>
      <table border="1" style={{ margin: 'auto', borderCollapse: 'collapse', width: '80%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Tujuan</th>
            {/* Tambahkan kolom lain sesuai data yang tersedia */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nama}</td>
              <td>{item.tujuan}</td>
              {/* Tambahkan data lain sesuai struktur tabel */}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate('/')} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Halaman Sebelumnya
      </button>
    </div>
  );
};

export default NextPage;
