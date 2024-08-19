import React from "react";

const Guncelle=()=>{
    return<div className="_div">
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">barkod </label>
    <input type="r" class="form-control" id="exampleInputEmail1" />
     
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">isim</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">fiyat</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">adet</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
   
  <button type="submit" class="btn btn-primary">güncelle</button>
</form>
    </div>
}
export default Guncelle;