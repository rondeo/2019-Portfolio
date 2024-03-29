import React from "react";
import PropTypes from "prop-types";
import SEO from "./SEO/SEO";
import "../assets/scss/main.scss";

const Layout = ({ children, location }) => {
  let content;

  if (location && location.pathname === "/") {
    content = <div>{children}</div>;
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    );
  }

  return (
    <div>
      <SEO/>
      {content}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
