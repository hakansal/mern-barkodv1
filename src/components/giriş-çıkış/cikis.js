import React, { useEffect, useState } from "react";

const Cikis = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || "");

  useEffect(() => {
    // Bileşen yüklendiğinde token'ı temizliyoruz
    localStorage.removeItem('token');
    setToken("");  
  }, []); // Boş bağımlılık dizisi sadece bileşen ilk yüklendiğinde çalışır

  return (
    <div>
      <h1>Çıkış yaptınız</h1>
    </div>
  );
};

export default Cikis;
