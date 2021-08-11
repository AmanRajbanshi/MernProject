

import React, {useState} from 'react'
//import "../TabMenu/tab.css";
import HotelRoom from "./HotelRoom";

const Rooms = () => {

    const [rooms, setRooms] = useState(HotelRoom);
    
    const filterRooms = (categItem) => {
        const UpdatedRoom = HotelRoom.filter((curElem) => {
            return curElem.category === categItem;
        });

        setRooms(UpdatedRoom);
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order Your Favourite Rooms</h1>
            <hr />
            
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    <button className="btn btn-warning" onClick={() => filterRooms('standardroom')}>Standard Room</button>
                    <button className="btn btn-warning" onClick={() => filterRooms('deluxeroom')}>Deluxe Room</button>
                    <button className="btn btn-warning" onClick={() => filterRooms('twinroom')}>Twin Room</button>
                    <button className="btn btn-warning" onClick={() => filterRooms('miniroom')}>Mini Room</button>
                    <button className="btn btn-warning" onClick={() => setRooms(HotelRoom)}>All</button>
                </div>
            </div>

            {/* my main items section  */}
            <div className="menu-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            
                            {
                                rooms.map((elem) => {
                                    const { id, name, image, price } = elem;

                                    return (
                                    
                                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 sm-4 my-5" key ={id}>
                                            <div className="row Item-inside">
                                                {/* for images */}
                                                <div className="col-12 col-md-12 col-lg-4 img-div">
                                                    <img src={image} alt={name} className="img-fluid"/>
                                                </div>

                                                {/* menu items description */}
                                                <div className="col-12 col-md-12 col-lg-8">
                                                    <div className="main-title pt-4 pb-3 d-flex">
                                                        <h1>{name}</h1>
                                                        
                                                       {/* <div> <p>{description }</p></div> */}
                                                    </div>
                                                    <div className="menu-price-book">
                                                        <div className="price-book-divide d-flex justify-content-between ">
                                                            <h2>Price : {price}</h2>
                                                            
                                                                <button className="btn btn-primary">Order Now</button>
                                                            
                                                        </div>
                                                        <p>*Prices may vary on selected date.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                        }

                             
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rooms