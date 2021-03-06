import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/footer";
import Nav from "../components/layout/nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "90px"
    };
    
    return (
      <div>

        <Nav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              {this.props.children}
            </div>
          </div>
        </div>
      <Footer/>
      </div>

    );
  }
}
