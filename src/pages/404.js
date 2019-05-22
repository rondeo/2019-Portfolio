import React from "react";
import logo from "../images/404.svg";

const notFound = () => (
    <div className="error">
        <h2>Oops, this page doesn’t exist</h2>
        <p>You may have mistyped the address or the page may have moved to a new address.</p>
        <img src={logo} alt=""/>
    </div>

);

export default notFound;
