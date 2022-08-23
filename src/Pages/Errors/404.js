import React, { Component } from "react";

import Header from "../../Layouts/Header";

import Footer from "../../Layouts/Footer";

export class NotFound extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container px-4 px-lg-5">
          <h1 className="text-center">Page Not Found</h1>
        </div>
        <Footer />
      </>
    );
  }
}

export default NotFound;
