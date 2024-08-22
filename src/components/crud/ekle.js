import React, { useEffect, useState } from "react";
import "./ekle.css";
const Ekle = () => {
  const [barkod, Setbarkod] = useState("");
  const [isim, Setisim] = useState("");
  const [fiyat, Setfiyat] = useState("");
  const [adet, Setadet] = useState("");
  const [ Message, setMessage] = useState("");

  const handlebarkod = (e) => {
    Setbarkod(e.target.value);
  };
  const handleisim = (e) => {
    Setisim(e.target.value);
  }
  const handlefiyat = (e) => {
    Setfiyat(e.target.value);
  }
  const handleadet = (e) => {
    Setadet(e.target.value);
  }

  const handlesubmit = async (e) => {
    const token = localStorage.getItem('token');

   
    e.preventDefault();
    const data = {
      barkod: barkod,
      isim: isim,
      fiyat: fiyat,
      adet: adet
    }

    try {

      const response = await fetch("http://localhost:3001/ekle", { method: "POST",
         headers: { "Content-Type": "application/json", 
          "giris": "Bearer " + token,
         },
         body: JSON.stringify(data) });
         if(response.ok){
           
          setMessage("kayıt yapıldı");
          Setadet("");
          Setbarkod("");
          Setfiyat("");
          Setisim("");
         }
         else{
          setMessage("hata")
          Setadet("");
          Setbarkod("");
          Setfiyat("");
          Setisim("");
         }
    } catch (error) {
      
    }
  };
  

  return <div className="_div">
    <form onSubmit={handlesubmit}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">barkod </label>
        <input onChange={handlebarkod} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">isim</label>
        <input  onChange={handleisim}type="text" class="form-control" id="exampleInputPassword1" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">fiyat</label>
        <input onChange={handlefiyat} type="text" class="form-control" id="exampleInputPassword1" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">adet</label>
        <input onChange={handleadet} type="text" class="form-control" id="exampleInputPassword1" />
      </div>

      <button type="submit" class="btn btn-primary">ekle</button>
    </form>
    { Message && <div className="alert alert-success mt-3">{Message}</div>}
  </div>
}
export default Ekle;