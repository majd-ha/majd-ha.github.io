import React, { useEffect, useState } from "react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import blogimage3 from "../assets/blogappimg3.png";
// import ratingImage from "../assets/ratingpro.png";
// import simpleblog from "../assets/simpleblog.png";
// import smallshop from "../assets/smallshop.png";
import ProCard from "../components/ProCard";
export default function Experience() {
  const [cardDetails, setCardDetails] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      const res = await fetch("http://127.0.0.1:3001/");
      if (res.ok) {
        const data = await res.json();
        setCardDetails(data.projects);
      }
    };
    getProjects();
  }, []);
  // const cardDetails = [
  //   {
  //     id: 0,
  //     title: "Rating System",
  //     img: ratingImage,
  //     completed: false,
  //     url: "https://ratingsystemai.onrender.com/",
  //     desc: "fuzzy logic , built with flask as backend",
  //   },
  //   {
  //     id: 1,
  //     title: "Blog App",
  //     img: blogimage3,
  //     completed: true,
  //     url: "https://blog-react-new.onrender.com/",
  //     desc: " MERN & JWt auth",
  //   },

  //   {
  //     id: 2,
  //     title: "simple Blog",
  //     img: simpleblog,
  //     completed: true,
  //     url: "https://majdblog.onrender.com/",
  //     desc: "React & Node with Json server",
  //   },
  //   {
  //     id: 3,
  //     title: "small shop",
  //     img: smallshop,
  //     completed: true,
  //     url: "https://simpleshop.onrender.com/",
  //     desc: "React & Free Api",
  //   },
  // ];
  return (
    <div className="w-desk max-h-screen" id="portfolio">
      <h1 className="heading">Portfolio</h1>
      <div className="flex flex-wrap mt-5 max-sm:block">
        <Swiper
          style={{ height: "fit-content", width: "100%" }}
          className="max-md:w-[80%] "
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={50}
          coverflowEffect={{
            depth: 100,
            rotate: 20,
            stretch: 0,
            modifier: 2.5,
          }}
          loop={false}
          speed={700}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            type: "bullets",
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        >
          {cardDetails.map((pro) => {
            return (
              <SwiperSlide
                className="h-fit w-[50%] max-sm:w-[100%] select-none my-2"
                key={pro._id}
              >
                <ProCard
                  title={pro.name}
                  imgsrc={pro.img}
                  link={pro.link}
                  desc={pro.description}
                  completed={!pro.dev}
                />
              </SwiperSlide>
            );
          })}
          <div className="swiper-pagination my-2"></div>
        </Swiper>
      </div>
    </div>
  );
}
