import React from "react";
import './App.css';
function Footer(){
    const currentyear = new Date().getFullYear();
    return(
        <footer>
            <div class="waves">
  <div class="footer wave" id="wave1"></div> 
  <div class="footer wave" id="wave2"></div>
 </div>
            <p>Copyright © GRE TESTING PORTAL {currentyear}</p>
        </footer>
    );
           
}
export default Footer;