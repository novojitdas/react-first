import "./App.css";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });
  const [submit, setSubmit] = useState(false);
  const [popup, setPopup] = useState(false);
  const handleNameValues = (event) => {
    setValues({ ...values, name: event.target.value });
  };

  const handlePhoneNumberValues = (event) => {
    setValues({ ...values, phoneNumber: event.target.value });
  };

  const handleEmailValues = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const submitted = (event) => {
    event.preventDefault();
    if (values.name && values.phoneNumber && values.email) {
      setPopup(true);
    }
    setSubmit(true);
  };

  return (
    <div className="App">
      <h1 id="headline">USER REGISTRATION FORM</h1>
      <div className="form-container">
        {popup ? <div className="success">Registration Successful!</div> : null}
        <form className="form" onSubmit={submitted}>
          <input
            id="name"
            className="form-input"
            type="text"
            placeholder="Enter Your Name"
            onChange={handleNameValues}
          ></input>
          {submit && !values.name ? (
            <span className="error">*Enter First Name</span>
          ) : null}
          <input
            id="phone"
            className="form-input"
            type="text"
            placeholder="Phone Number Starts With +880.."
            onChange={handlePhoneNumberValues}
          ></input>
          {submit && !values.phoneNumber ? (
            <span className="error">*Enter Phone Number</span>
          ) : null}
          <input
            id="email"
            className="form-input"
            type="email"
            placeholder="Enter Your Email"
            onChange={handleEmailValues}
          ></input>
          {submit && !values.email ? (
            <span className="error">*Enter Email</span>
          ) : null}
          <button id="submit-btn" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
