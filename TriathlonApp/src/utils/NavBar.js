import React from "react";
import { Link } from "react-router";

export default class NavBar extends React.Component {

  render() {
    //var isAdministrator = false;
    return (
      <div className="container">
        <nav role="navigation" className="navbar navbar-inverse">

          <div className="navbar-header">
            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
          </div>
          <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
                <li className="active"><Link to="/"><span className="glyphicon glyphicon-home"></span> Thurles Triathlon Club</Link></li>
                <li><Link to="events">Events</Link></li>
                <li><Link to="reviews">Reviews</Link></li>
                <li><Link to="about">Contact Us</Link></li>
                {/*  in prepartion for Role based authentication  
                  { isAdministrator ?
                    <li><Link to="admin">Admin</Link></li>
                    : null
                  }
                */}
                <li><Link to="admin">Admin</Link></li>
            </ul>
            
          </div>

        </nav>
      </div>
    );
  }
}
