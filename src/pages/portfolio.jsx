import React, { useState } from "react";
// import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
import imblog from "../assets/blogappimg3.png";
import imeasybank from "../assets/easyBank.png";
import imecommerce from "../assets/ecommerce.png";
import imTs from "../assets/eshop.png";
import imrps from "../assets/rps.jpg";
import imShope from "../assets/smallshop.png";
import imsvelte from "../assets/sveltech.png";
import ProjectCard from "../components/ProjectCard";
export default function Experience() {
  const [category, setcategory] = useState("all");
  const [datatoView, setdatatoView] = useState([]);
  const projects = [
    {
      id: 1,
      title: "Blog App - MERN",
      description:
        "full stack website , authentication and authorization , post and react to others posts , comment and more",
      url: "https://blog-react-new.onrender.com/",
      gitlink: "https://github.com/majd-ha/mern-app-demo",
      imsrc: imblog,
      technologies:
        "Node js , React , Express js , MongoDb , React libraries like (React Query , Redux )",
      completed: true,
    },
    {
      id: 2,
      title: "Online Shope",
      description:
        "View and explore shope products , Add to your Cart , and manage your list",
      url: "https://simpleshop.onrender.com/",
      gitlink: "https://github.com/majd-ha/smallshop",
      imsrc: imShope,
      technologies:
        " React , Free Api , React libraries like (React Query ,Redux toolkit )",
      completed: true,
    },
    {
      id: 3,
      title: "Easy Bank - Challenge",
      description:
        "Static Site no Api or Routing , It was a challenge built this site in one day",
      url: "https://easybankchallenge.vercel.app/",
      gitlink: "https://github.com/majd-ha/easybankchallenge",
      imsrc: imeasybank,
      technologies: " React , Tailwindcss",
      completed: true,
    },
    {
      id: 4,
      title: "Snap - Remote Work - Challenge",
      description:
        "Static Site no Api or Routing , It was a challenge to learn svelte and built this site in one day",
      url: "https://sveltechallenge.vercel.app/",
      gitlink: "https://github.com/majd-ha/sveltechallenge",
      imsrc: imsvelte,
      technologies: " Sveltekit , Tailwindcss , motion graphic",
      completed: true,
    },

    {
      id: 5,
      title: "Ts Online",
      description: "Recreation of online shop with typescript",
      url: "https://eshop-166f.onrender.com/",
      gitlink: "https://github.com/majd-ha/TsStore",
      imsrc: imTs,
      technologies:
        " React with Typescript, Free Api , React libraries like (React Query ,Redux toolkit )",
      completed: false,
    },

    {
      id: 6,
      title: "Rock Paper Scissors Game",
      description: "Simple Game , One day challenge",
      url: "https://rock-paper-scissors-one-eta.vercel.app/",
      gitlink: "https://github.com/majd-ha/RockPaperScissors",
      imsrc: imrps,
      technologies: " React , Tailwindcss",
      completed: true,
    },
    {
      id: 7,
      title: "E-commerce -Challenge",
      description: "Static site , One day challenge",
      url: "https://ecommercestatic.vercel.app/",
      gitlink: "https://github.com/majd-ha/ecommercestatic",
      imsrc: imecommerce,
      technologies: " React , Tailwindcss",
      completed: true,
    },
  ];
  // const base = "https://backenddashboard.onrender.com";
  // const base = "http://127.0.0.1:3001";
  // const [cardDetails, setCardDetails] = useState([]);
  // const [isLoading, setisLoading] = useState(false);
  // useEffect(() => {
  //   const getProjects = async () => {
  //     setisLoading(true);
  //     const res = await fetch(`${base}/`);
  //     if (res.ok) {
  //       const data = await res.json();
  //       setcardDetails(data.projects);
  //       setdatatoView(data.projects);
  //       setisLoading(false);
  //     }
  //   };
  //   getProjects();
  // }, []);
  // const categories = ["all", "laravel", "react"];
  // let temp = [];
  // useEffect(() => {
  //   setdatatoView(cardDetails);
  //   if (category !== "all") {
  //     temp = cardDetails.filter((el) => el.technologies.includes(category));
  //     setdatatoView(temp);
  //   } else {
  //     temp = cardDetails;
  //     setdatatoView(temp);
  //   }
  // }, [category]);

  const [cardDetails, setcardDetails] = useState([]);
  return (
    <div className="w-desk " id="portfolio">
      <h1 className="heading">Portfolio</h1>
      {/* <div className="flex items-center  text-white gap-1">
        {categories.map((cat) => {
          return (
            <p
              key={cat}
              className="flex-1 text-center btn capitalize rounded-xl text-red-500"
              onClick={() => setcategory(cat)}
            >
              {cat}
            </p>
          );
        })}
      </div> */}
      <div className="flex flex-wrap mt-5 items-stretch max-sm:block">
        {/* {isLoading
          ? categories.map((el) => {
              return <SkeletonCard key={el} />;
            })
          : datatoView.map((pro) => {
              return (
                <div
                  className=" py-5 w-[50%] max-sm:w-[100%] select-none my-2 "
                  key={pro.id}
                >
                  <ProjectCard
                    id={pro.id}
                    title={pro.name}
                    imgsrc={pro.img}
                    link={pro.link}
                    desc={pro.desc}
                    completed={pro.completed}
                    technologies={pro.technologies}
                  />
                </div>
              );
            })} */}
        {projects.map((pro) => {
          return (
            <div
              className=" py-5 w-[50%] max-sm:w-[100%] select-none my-2 "
              key={pro.id}
            >
              <ProjectCard
                id={pro.id}
                title={pro.title}
                imgsrc={pro.imsrc}
                gitlink={pro.gitlink}
                link={pro.url}
                desc={pro.description}
                completed={pro.completed}
                technologies={pro.technologies}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
