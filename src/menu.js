import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from './home';
import Contact from './contact';
import FAQs from './faq';
import Htest from './h.js';

function Menu() {
  return (
    <>
      <style>
        {`
          nav {
            background-color: silver;
            padding: 1rem;
          }
          
          nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            padding: 0;
            margin: 0;
          }
          
          nav ul li {
            margin: 0 1rem;
          }
          
          nav ul li a {
            text-decoration: none;
            color: #007bff;
            font-weight: bold;
          }
          
          nav ul li a:hover {
            text-decoration: underline;
          }
          
          nav ul li:not(:last-child)::after {
            content: '|';
            margin-left: 1rem;
            color: #007bff;
          }
        `}
      </style>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <a href="https://vm5.github.io/homeasia/" target="_blank" rel="noopener noreferrer">
              GRE Online Tests
            </a>
          </li>
          <li>
            <a href="https://vm5.github.io/contact/" target="_blank" rel="noopener noreferrer">
              Contact Us
            </a>
          </li>
          <li>
            <a href="https://vm5.github.io/faq/" target="_blank" rel="noopener noreferrer">
              FAQs
            </a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/h" element={<Htest />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQs />} />
      </Routes>
    </>
  );
}

export default Menu;
