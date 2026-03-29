import { Badge } from "@mui/material";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import TransitionsModal from "../ContentModal/ContentModal";
import Star from "../../assets/star.png";
const SingleContent = ({
  info,
  id,
  media_type,
}) => {
  return (
    <TransitionsModal media_type={media_type} id={id}>
     <div className='movie_card'>
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            background: info.vote_average > 7
              ? "linear-gradient(135deg, #21d07a, #00b894)" // green (good)
              : info.vote_average > 5
              ? "linear-gradient(135deg, #fbc531, #e1a100)" // yellow (average)
              : "linear-gradient(135deg, #ff6b6b, #e84118)", // red (bad)
            color: "#fff",
            padding: "6px 10px",
            borderRadius: "20px",
            fontWeight: "bold",
            fontSize: "0.8rem",
            boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
            }}
          >
          {info.vote_average?.toFixed(1)}
        </div>
        <img
          src={info.poster_path ? `${img_300}${info.poster_path}` : unavailable}
            alt={info.title}
            className='movie_poster'
        />
          <div className='movie_details'>
              <h3 className='movie_details_heading'>
                  {info.title || info.name}
              </h3>
              <div className='align_center movie_date_rate'>
                  <p>{info.first_air_date || info.release_date}</p>
                  <p className='align_center'>
                      {info.vote_average}
                      <img
                        src={Star}
                        alt='rating icon'
                        className='card_emoji'
                      />
                  </p>
              </div>
              <p className='movie_description'>
                  {info.overview && info.overview.slice(0, 100) + "..."}
              </p>
          </div>
      </div>
    </TransitionsModal>
  );
};

export default SingleContent;
