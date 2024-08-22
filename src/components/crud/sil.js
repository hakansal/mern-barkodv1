import React, { useState } from "react";
import "./ekle.css";

const Sil = () => {
  const [barkod, setBarkod] = useState("");
  const [message, setMessage] = useState("");

  const handleBarkod = (e) => {
    setBarkod(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const data = {
      barkod: barkod,
    };

    try {
      const response = await fetch("http://localhost:3001/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "giris": "Bearer " + token,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage("Ürün silindi veya zaten silinmiş.");
        setBarkod(""); // Clear the input field
      } else if (response.status === 404) {
        setMessage("Ürün bulunamadı.");
      } else {
        setMessage("Silinemedi, lütfen tekrar deneyin.");
      }
    } catch (error) {
      setMessage("Silinemedi, lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="_div">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="barkodInput" className="form-label">Barkod</label>
          <input
            onChange={handleBarkod}
            type="text"
            className="form-control"
            id="barkodInput"
            value={barkod}
          />
          {message && (
            <div className="alert alert-success mt-3">
              {message}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Sil;
