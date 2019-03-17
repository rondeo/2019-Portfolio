import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import logo from "../images/icon.png";

const Submission = () => (
  <Layout>
    <div className="thanks">
      <img src={logo} alt=""/>
      <h2>Thank you for your Submission</h2>
      <h4>I will be in contact with you shortly regarding your inquiry.</h4>
      <p>
        Click <Link to="/">here</Link> to go back
      </p>
    </div>
  </Layout>
);

export default Submission;
