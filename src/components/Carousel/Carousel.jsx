import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { img_300, noPicture } from "../../config/config";
const Carousel = ({ id, media_type }) => {
  const [credits, setCredits] = useState([]);

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}`
    );
    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits();
  }, [id, media_type]);

  return (
    <Swiper
      spaceBetween={10}
      modules={[Autoplay]}
      loop={true}
      breakpoints={{
        0: { slidesPerView: 3 },
        640: { slidesPerView: 5 },
        1024: { slidesPerView: 7 },
      }}
      autoplay={{
        delay: 500,
        disableOnInteraction: false
      }}
    >
      {credits.map((c) => (
        <SwiperSlide key={c.id}>
          <div style={{ textAlign: "center" }}>
            <img
              src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
              alt={c?.name}
              style={{
                width: "100%",
                borderRadius: "10px",
              }}
            />
            <p style={{ color: "white", fontSize: "0.8rem" }}>
              {c.name}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;