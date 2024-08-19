import React, { useState, useEffect } from "react";

const Listele = () => {
  const [list, setlist] = useState([]);

  useEffect(() => {
    const fetchlist = async () => {
      try {
        const token = localStorage.getItem('token'); // Token'ı localStorage'dan alıyoruz

        const response = await fetch("http://localhost:3001/listele", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "giris": "Bearer " + token,
          },
        });
        
        const result = await response.json();
        
        
        if (result && Array.isArray(result.stufs)) {
          setlist(result.stufs); 
        } else {
          console.error("Expected 'stufs' array but got:", result);
          setlist([]); 
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchlist();
  }, []);

  return (
    <div>
      <h1>ÜRÜN LİSTESİ</h1>
      <ul>
        {list.map((item) => (
          <li key={item._id}>
            <strong>{item.isim}</strong>: {item.fiyat} TL (Adet: {item.adet})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listele;
