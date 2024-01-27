import React, { useState, useEffect } from 'react';

function verify(){
    const [verifyCode, setVerifyCode] = useState([]);
    useEffect(() =>{
        const fetchData = async () => {
          try {
            const response = await fetch("https://localhost:7063/User/Verify");
            const data = await response.json();
            setVerifyCode(data);
          }catch(error){
            console.log("error fetching blogs", error);
          }
        };
        fetchData();
      }, []);
  
}