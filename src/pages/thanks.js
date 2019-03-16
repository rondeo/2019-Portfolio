import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

const Submisson = () => (
  <Layout>
    <h1>Thank you for your Submisson</h1>
    <p>
      Click <Link to="/">here</Link> to go back
    </p>
  </Layout>
);

export default Submisson;
