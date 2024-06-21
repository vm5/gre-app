import React, { useState, useEffect } from "react";
import './App.css';

function Gettime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="clock">
      {time}
    </div>
  );
}

export default Gettime;
