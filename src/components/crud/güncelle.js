import React, { useState } from "react";

const Guncelle = () => {

  const [barkod, setbarkod] = useState("");
  const [isim, setisim] = useState("");
  const [fiyat, setfiyat] = useState("");
  const [adet, setadet] = useState("");
  const [message, setmessage] = useState("");
  const handlebarkod = (e) => {
    setbarkod(e.target.value);
  }

  const handleisim = (e) => {
    setisim(e.target.value);
  }

  const handlefiyat = (e) => {
    setfiyat(e.target.value);
  }

  const handleadet = (e) => {
    setadet(e.target.value);
  }

  const handelsubmit = async (e) => {
    e.preventDefault();
    const data = {
      barkod: barkod,
      isim: isim,
      fiyat: fiyat,
      adet: adet
    }
    const token = localStorage.getItem('token');

   try {
     const response = await fetch("http://localhost:3001/guncelle", {
       method: "PUT",
       headers: {
         "Content-Type": "application/json",
         "giris": "Bearer " + token,
       },
       body: JSON.stringify(data)
     });
     setmessage("güncellendi");
     setadet("");
     setbarkod("");
     setfiyat("");
     setisim("");
      
   } catch (error) {
    console.error("Fetch error:", error);
   }

    
  };

  return (
    <div className="_div">
      <form onSubmit={handelsubmit}>
        <div className="mb-3">
          <label htmlFor="barkod" className="form-label">Barkod</label>
          <input onChange={handlebarkod} type="text" className="form-control" id="barkod" />
        </div>
        <div className="mb-3">
          <label htmlFor="isim" className="form-label">İsim</label>
          <input onChange={handleisim} type="text" className="form-control" id="isim" />
        </div>
        <div className="mb-3">
          <label htmlFor="fiyat" className="form-label">Fiyat</label>
          <input onChange={handlefiyat} type="text" className="form-control" id="fiyat" />
        </div>
        <div className="mb-3">
          <label htmlFor="adet" className="form-label">Adet</label>
          <input onChange={handleadet} type="text" className="form-control" id="adet" />
        </div>
        <button type="submit" className="btn btn-primary">Güncelle</button>
      </form>
      {message && <div className="alert alert-success mt-3">{message}</div>}
    </div>
  );
}

export default Guncelle;
