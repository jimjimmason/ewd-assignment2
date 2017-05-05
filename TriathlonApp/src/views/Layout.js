import React from "react";
import Footer from "../utils/Footer";
import NavBar from "../utils/NavBar";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "5px"
    };
    return (
      <div>
        <NavBar location={location} />
        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-lg-12">
              {this.props.children}
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}
