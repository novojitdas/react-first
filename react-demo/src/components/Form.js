import { useState } from "react";

export const Form = () => {
  {
    /*Use States*/
  }
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [info, setInfo] = useState("");

  {
    /*Form Submit Handler*/
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`username is ${username}\nCountry is ${country}\nInfo: ${info}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/*Username*/}
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      {/*dropdown for country*/}
      <div>
        <label>Country:</label>
        <select
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
          <option>Select a country</option>
          <option>Bangladesh</option>
          <option>India</option>
          <option>USA</option>
        </select>
      </div>
      {/* textbox area for description */}
      <div>
        <label>Write the info of about your country</label>
        <textarea
          value={info}
          onChange={(event) => setInfo(event.target.value)}
          placeholder="Enter your country info"
          rows={5}
          cols={30}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
