import React, { useState } from "react";
import "./ekle.css";
const Satıs=()=>{
const [barkod,Setbarkod]=useState("");
const [list,Setlist]=useState("");
const handlebarkod=(e)=>{
 Setbarkod(e.target.value);
};
const submit=()=>{
    
};


const getir=async()=>{
    const token = localStorage.getItem('token');
   try {
    const response=await fetch("http://localhost:3001/satış",{method:"GET",
     headers:{
         "Content-Type": "application/json",
         "giris": "Bearer " + token,
     }
    });
    const result = await response.json();
    if (result && Array.isArray(result.stufs)) {
     Setlist(result.stufs); 
   } else {
     console.error("Expected 'stufs' array but got:", result);
     Setlist([]); 
   }
   } catch (error) {
    
   }
};

    return<div className="_div">
         <form>
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">barkod </label>
    <input onChange={handlebarkod} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <button onClick={submit} className="btn btn-primary"></button>
  </div>
        </form>

    </div>
};
export default Satıs;