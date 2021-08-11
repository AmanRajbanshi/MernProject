import React from "react";
import "../style/liveScore.css";
const livescorecard = () => {
  return (
    <>
     <div className="container">
         <div className="row">
             <div className="col-md-7 col-sm-12">
             <div className=" news">
        <div className="row">
          <div className="col-md-2 col-sm-3">
            <img
              className="footbalgame"
              src="https://w7.pngwing.com/pngs/904/939/png-transparent-football-team-logo-association-football-manager-sport-football-game-team-grass-thumbnail.png"
              alt="fotball"
            />
          </div>
          <div className="col-md-8 col-sm-9">
            <h6 className="title">Real Madrid vs Barcelona,2021</h6>
            <h5 className="sub-title">
              PSG Messi with a message for Real Madrid
            </h5>
            <h6 className="sub-sub-title">Real Madrid vs Barcelona,2021</h6>
            <h6 className="time"> 5 hrs ago</h6>
          </div>
        </div>
      </div>

             </div>
         </div>
     </div>
          </>
  );
};

export default livescorecard;
