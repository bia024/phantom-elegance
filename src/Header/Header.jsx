import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <div className="box-header">
        <h2 className="principal-title">PHANTOM</h2>
        <p>LUXURY REDEFINED</p>
      </div>
      <nav>
        <ul className="menu-header">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="">Vehicle</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <button className="sign-out">Sign Out</button>
      </nav>
    </header>
  );
}
