import React, { useState } from 'react'
import axios from 'axios';
const Reservation = () => {
const [name,setName] = useState(" ");
const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");         //name email phoneNumber adults childs NoofNights NoofRooms RoomTypes Address message
  const [adults, setAdults] = useState("");
  const [childs, setChilds] = useState("");
  const [noofNights, setNoofNights] = useState("");
  const [noofRooms, setNoofRooms] = useState("");
  const [roomTypes, setRoomTypes] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email,password);
    try {
      const { data } = await axios.post("http://localhost:5000/reservation", {
       
      name,
      email,
      phoneNumber,
      adults,
      childs,
      noofNights,
      noofRooms,
      roomTypes,
      address,
      message
      });
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
     setError(error.response.data.message);
    }
    setName("");
    setEmail("");
    setphoneNumber("");
    setAdults("");
    setChilds("");
    setNoofNights("");
    setNoofRooms("");
    setRoomTypes("");
    setAddress("");
    setMessage("");
  };


    return (
        <>
            <form>
        
            <h2> {error !== "" ? error : ""} </h2>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="name"
            className="form-control"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">phone</label>
          <input
            type="phone"
            className="form-control"
            name="phone"
            placeholder="phone"
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Adults</label>
          <input
            type="name"
            className="form-control"
            name="adults"
            placeholder="Adults"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Childs</label>
          <input
            type="childs"
            className="form-control"
            name="childs"
            placeholder="Childs"
            value={childs}
            onChange={(e) => setChilds(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">NoofNights</label>
          <input
            type="NoofNights"
            className="form-control"
            name="NoofNights"
            placeholder="NoofNights"
            value={noofNights}
            onChange={(e) => setNoofNights(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">NoofRooms</label>
          <input
            type="NoofRooms"
            className="form-control"
            name="NoofRooms"
            placeholder="NoofRooms"
            value={noofRooms}
            onChange={(e) => setNoofRooms(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">RoomTypes</label>
          <input
            type="RoomTypes"
            className="form-control"
            name="RoomTypes"
            placeholder="RoomTypes"
            value={roomTypes}
            onChange={(e) => setRoomTypes(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Address</label>
          <input
            type="address"
            className="form-control"
            name="address"
            placeholder="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Message</label>
          <input
            type="message"
            className="form-control"
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
    )
}

export default Reservation
