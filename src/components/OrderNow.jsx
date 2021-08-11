import React,{useState} from 'react'
import axios from 'axios';
const OrderNow = () => {
    const [name,setName] = useState(" ");
const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");        
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [road, setRoad] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/orderNow", {
       
      name,
      email,
      phoneNumber,
      province,
      city,
      road

      });
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
     setError(error.response.data.message);
    }
    setName("");
    setEmail("");
    setphoneNumber("");
    setProvince("");
    setCity("");
    setRoad("");

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
      <label htmlFor="exampleInputPassword1">Province</label>
      <input
        type="province"
        className="form-control"
        name="province"
        placeholder="Province"
        value={province}
        onChange={(e) => setProvince(e.target.value)}
      />
    </div>

    <div className="form-group">
      <label htmlFor="exampleInputPassword1">City</label>
      <input
        type="city"
        className="form-control"
        name="city"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </div>

    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Road</label>
      <input
        type="road"
        className="form-control"
        name="Road"
        placeholder="road"
        value={road}
        onChange={(e) => setRoad(e.target.value)}
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

export default OrderNow






// const history = useHistory();
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [phoneNumber, setPhoneNumber] = useState();
//   const [province, setProvince] = useState();
//   const [city, setCity] = useState();
//   const [road, setRoad] = useState();
//   const [items, setItems] = useState(Menu);
// const [error, setError] = useState();
//   const filterItem = (categItem) => {
//     const updatedItems = Menu.filter((curElem) => {
//       return curElem.category === categItem;
//     });
  
  

//    const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           const { data } = await axios.post("http://localhost:5000/orderNow", {
//            name,
//            email,
//             phoneNumber,
//             province,
//             city,
//             road
//           });
//           console.log(data);
//         } catch (error) {
//           console.log(error.response.data.message);
//           setError(error.response.data.message);
//         }
//         setName("");
//         setEmail("");
//         setPhoneNumber("");
//         setProvince("");
//         setCity("");
//         setRoad("");
//         setItems(updatedItems);

//         history.push('/orderNow')
//     }
