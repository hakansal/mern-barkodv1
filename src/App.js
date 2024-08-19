import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Giris from "./components/giriş-çıkış/giriş";
import Ekle from "./components/crud/ekle";
import Guncelle from "./components/crud/güncelle";
import Sil from "./components/crud/sil";
import Satıs from "./components/crud/satıs";
import Listele from "./components/crud/listele";
import Cikis from "./components/giriş-çıkış/cikis";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/giriş" element={<><Giris/></>} />
          <Route path="/çıkış" element={<><Cikis/></>} />
          <Route path="/satış" element={<><Satıs/></>} />
          <Route path="/ekle" element={<><Ekle/></>} />
          <Route path="/sil" element={<><Sil/></>} />
          <Route path="/güncelle" element={<><Guncelle/></>} />
          <Route path="/listele" element={<><Listele/></>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
