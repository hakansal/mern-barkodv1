import "./giris.css";
import React, { useState } from "react";

 
const Giris = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
 

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  

    const data = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:3001/giris", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
       
        
        
        setUsername("");
        setPassword("");
        setWelcomeMessage(`Hoşgeldiniz `);
        localStorage.setItem('token', result.token); 
        
      } else {
        
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="_div">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Kullanıcı Adı</label>
          <input 
            type="text" 
            className="form-control" 
            id="exampleInputEmail1" 
            value={username} 
            onChange={handleUserChange} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Şifre</label>
          <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1" 
            value={password} 
            onChange={handlePasswordChange} 
          />
        </div>
        <button type="submit" className="btn btn-primary">Giriş</button>
      </form>

      
      {welcomeMessage && <div className="alert alert-success mt-3">{welcomeMessage}</div>}
    </div>
  );
};

export default Giris;
