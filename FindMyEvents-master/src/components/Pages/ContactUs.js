import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contacts extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3>
              <strong>Our Location</strong>
            </h3>
          </div>

          <div className="row">
            <div className="col-md-7">
              <br></br>
              <h6>FindMyMovies Office, Pune, India</h6>
            </div>
            <div className="col-md-5">
              <h4>
                <strong>Contact us</strong>
              </h4>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <textarea
                  className="form-control"
                  cols="30"
                  rows="3"
                  placeholder="Message"
                />
                <Link className="btn btn-outline-primary text-uppercase mt-1" to="/">
                  <i className="fa fa-paper-plane-o" aria-hidden="true" />
                  <i className="fab fa-telegram-plan" />
                  &nbsp;Send
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contacts;
