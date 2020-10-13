import React, { Component } from "react";
import "./CreateAccount.css";
class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.name,
    });
  }
  render() {
    return (
      <div className="contact" id="contact">
        {/* <h1>Contact</h1>
        <hr /> */}
        <div className="contactContainer">
          <form>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="cPassword"
              placeholder="Confirm Password"
              onChange={this.handleChange}
            />
            {/* <textarea
              name="info"
              placeholder="Type Here..."
              onChange={this.handleChange}
            /> */}
            <button>Submit</button>
          </form>
            <div className="createAccountImg">
                <figure className="createAccountImgPicWrap">
                    <img src="images/img-12.jpg" alt="Travel" />
                </figure>
            </div>
        </div>
      </div>
    );
  }
}

export default CreateAccount;