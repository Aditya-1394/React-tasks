import React, { Component } from "react";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      errors: {},
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    let errors = {};
    let isValid = true;

    if (this.state.firstName.trim().length < 3) {
      errors.firstName = "FirstName should have atleast 3 chars";
      isValid = false;
    }

    if (this.state.lastName.trim().length < 1) {
      errors.lastName = "lastName should have atleast 1 char";
      isValid = false;
    }

    if (!this.state.email.includes("@")) {
      errors.email = "Email should contain @";
      isValid = false;
    }

    if (this.state.phone.length !== 10) {
      errors.phone = "Phn num should have 10 number";
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      alert("Form submitted successfully ✅");
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        errors: {},
      });
    }
  };

  render() {
    const { firstName, lastName, email, phone, errors } = this.state;

    return (
      <div style={{ width: "400px", margin: "20px auto", textAlign: "center" }}>
        <h2>ContactUs</h2>
        <form onSubmit={this.handleSubmit}>
          {/* First Name */}
          <input
            type="text"
            name="firstName"
            placeholder="Enter your firstName"
            value={firstName}
            onChange={this.handleChange}
            style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          />
          {errors.firstName ? (
            <div style={{ color: "red" }}>{errors.firstName}</div>
          ) : (
            firstName && <span style={{ color: "green" }}>✔</span>
          )}

          {/* Last Name */}
          <input
            type="text"
            name="lastName"
            placeholder="Enter your lastName"
            value={lastName}
            onChange={this.handleChange}
            style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          />
          {errors.lastName ? (
            <div style={{ color: "red" }}>{errors.lastName}</div>
          ) : (
            lastName && <span style={{ color: "green" }}>✔</span>
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={this.handleChange}
            style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          />
          {errors.email ? (
            <div style={{ color: "red" }}>{errors.email}</div>
          ) : (
            email && <span style={{ color: "green" }}>✔</span>
          )}

          {/* Phone */}
          <input
            type="number"
            name="phone"
            placeholder="Enter your Phone number"
            value={phone}
            onChange={this.handleChange}
            style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          />
          {errors.phone ? (
            <div style={{ color: "red" }}>{errors.phone}</div>
          ) : (
            phone && <span style={{ color: "green" }}>✔</span>
          )}

          <br />
          <button
            type="submit"
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactUs;
