import React, { useState } from "react";
//import { useHistory } from "react-router-dom";
import axios from "axios";
import Menu from "./Menu";

const GalleryReact = () => {
  //const history = useHistory();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [province, setProvince] = useState();
  const [city, setCity] = useState();
  const [road, setRoad] = useState();
  //const [error, setError] = useState();
  const [items, setItems] = useState(Menu);

  function filterItem  (categItem)  {
     Menu.filter((curElem) => {
      return curElem.category === categItem;
    });
  }
console.log(filterItem('breakfast'));

    const handleClick = async (e) => {
      e.preventDefault();
      // console.log(email,password);
      try {
        const { data } = await axios.post("http://localhost:5000/orderNow", {
          name,
          email,
          phoneNumber,
          province,
          city,
          road,
        });
        console.log(data);
      } catch (error) {
        console.log(error.response.data.message);
        // setError(error.response.data.message);
      }
      setName("");
      setEmail("");
      setPhoneNumber("");
      setProvince("");
      setCity("");
      setRoad("");
      setItems(filterItem);

     // history.push("/orderNow");
    };
  
  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        Order Your Favourite Dish
      </h1>
      <hr />

      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button
            className="btn btn-warning"
            onClick={() => filterItem("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("lunch")}
          >
            Lunch
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("evening")}
          >
            Evening
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("dinner")}
          >
            Dinner
          </button>
          <button className="btn btn-warning" onClick={() => setItems(Menu)}>
            All
          </button>
        </div>
      </div>

      {/* my main items section  */}
      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((elem) => {
                const { name, image, price } = elem;

                return (
                  <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                    <div className="row Item-inside">
                      {/* for images */}
                      <div className="col-12 col-md-12 col-lg-4 img-div">
                        <img src={image} alt={name} className="img-fluid" />
                      </div>

                      {/* menu items description */}
                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-title pt-4 pb-3 d-flex">
                          <h1>{name}</h1>

                          {/* <p>{description }</p> */}
                        </div>
                        <div className="menu-price-book">
                          <div className="price-book-divide d-flex justify-content-between ">
                            <h2>Price : {price}</h2>

                            <button
                              onClick={handleClick}
                              type="submit"
                              className="btn btn-primary"
                            >
                              Order Now
                            </button>
                          </div>
                          <p>*Prices may vary on selected date.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryReact;







