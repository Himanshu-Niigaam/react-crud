import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Photos from "./Photos";
import Album from "./Album";
import Posts from "./Posts";
import { withRouter } from "react-router-dom";

const Nav = () => (
  <div>
    <div className="float-left">
      <Link to="/photos">Photos</Link>
    </div>
    <div className="float-left ml20">
      <Link to="/album">Album</Link>
    </div>
    <div className="float-left ml20">
      <Link to="/posts">Posts</Link>
    </div>
  </div>
);

class Dashboard extends Component {
  constructor() {
    var storage = JSON.parse(sessionStorage.getItem("userData"));
    super();
    this.state = {
      name: "React",
      user: storage,
    };
  }

  // Logout method
  logout() {
    window.sessionStorage.removeItem("userData");
    this.props.history.push("/login");
  }

  // HTML section starts from here
  render() {
    return (
      <Router>
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-4">Logo</div>

            <div class="col-md-4">
              <h3>Welcome, {this.state.user[0].name}</h3>
            </div>

            <div
              class="col-md-4 text-right cursor-pointer"
              onClick={() => {
                this.logout();
              }}
            >
              Logout
            </div>
            <Nav />
          </div>

          <Route exact path="/photos" component={Photos} />
          <Route path="/album" component={Album} />
          <Route path="/posts" component={Posts} />
        </div>
      </Router>
    );
  }
}
export default withRouter(Dashboard);
