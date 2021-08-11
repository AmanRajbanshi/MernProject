import React, { useState } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';
const Contact = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email,password);
    try {
      const { data } = await axios.post("http://localhost:5000/contact", {
        email,
        password,
      });
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
    setEmail("");
    setPassword("");
    history.push('/reservation')
  };

  return (
    <>
      <form>
        <h2> {error !== "" ? error : ""} </h2>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Contact;
