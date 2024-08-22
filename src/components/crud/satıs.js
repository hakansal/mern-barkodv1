import React, { useState } from "react";
import "./ekle.css";

const Satıs = () => {
  const [barkod, setBarkod] = useState("");
  const [result, setResult] = useState(null); 
  const [message, setMessage] = useState("");

  const handleBarkod = (e) => {
    setBarkod(e.target.value);
  };

  const fetchBarkod = async (e) => {
    e.preventDefault();
    const data = { barkod };
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:3001/satis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "giris": "Bearer " + token,
        },
        body: JSON.stringify(data),
      });
      const resultt = await response.json();

      if (response.ok) {
        if (resultt.message === "y") {
          setMessage("Ürün kalmadı.");
          setResult(null);
        } else {
          setResult(resultt.message);  
          setMessage("Satış başarılı!");
        }
        setBarkod("");  
      } else {
        if (resultt.message === "Ürün bulunamadı") {
          setMessage("Ürün bulunamadı.");
        } else {
          setMessage("Satış gerçekleştirilemedi, lütfen tekrar deneyin.");
        }
        setResult(null);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Bir hata oluştu.");
    }
  };

  return (
    <div className="_div">
      <form onSubmit={fetchBarkod}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Barkod
          </label>
          <input
            onChange={handleBarkod}
            value={barkod}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <button type="submit" className="btn btn-primary">
            Satış
          </button>
        </div>
      </form>
      {result && typeof result === 'object' && (
        <div>
          <h1>Ürün Detayları</h1>
          <p><strong>İsim:</strong> {result.isim}</p>
          <p><strong>Barkod:</strong> {result.barkod}</p>
          <p><strong>Fiyat:</strong> {result.fiyat}</p>
          <p><strong>Adet:</strong> {result.adet}</p>
        </div>
      )}
      {message && <div className="alert alert-success mt-3">{message}</div>}
    </div>
  );
};

export default Satıs;
