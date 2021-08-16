import React from "react";
import "../style/newNews.css";

import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ShareIcon from "@material-ui/icons/Share";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
const NewNewsCard = () => {
  return (
    <>
      <div className="container mb-3">
        <div className="row">
          <div className="col-md-2 col-sm-12">
            <iframe
              className="video"
              width="187"
              height="160"
              src="https://www.youtube.com/embed/RNSCIOt9tvc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-md-10 col-sm-12  side-topic">
            <h6 className="madrid-title1">Real Madrid vs Barcelona,2021</h6>
            <h5 className=" madrid-title2">
              PSG Messi with a message for Real Madrid
            </h5>
            <h6 className="madrid-title1">
              Messi and Ronaldo playing in same game,2021
              <a className="atag" href="https://www.w3schools.com">
                ...Read More
              </a>
            </h6>
            <h6 className="madrid-title3"> 5 hrs ago</h6>
            <div className="container secondContainer   ">
              <button type="submit" className="likebtn">
                <ThumbUpAltOutlinedIcon style={{ color: "blue" }} />
                Like
              </button>
              <button type="submit" className="likebtn">
                <ChatBubbleOutlineOutlinedIcon />
                comment
              </button>
              <button type="submit" className="likebtn">
                <ShareIcon style={{ color: "blue" }} />
                share
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewNewsCard;
