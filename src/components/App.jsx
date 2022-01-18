import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function handleChange(event) {
    const { value, name } = event.target;

    setContact((prevalue) => {
      switch (name) {
        case "fName":
          return {
            fName: value,
            lName: prevalue.lName,
            email: prevalue.email
          };

        case "lName":
          return {
            fName: prevalue.fName,
            lName: value,
            email: prevalue.email
          };
        case "email":
          return {
            fName: prevalue.fName,
            lName: prevalue.lName,
            email: value
          };

        default:
          break;
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
