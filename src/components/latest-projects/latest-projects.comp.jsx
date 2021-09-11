import React, { Component } from "react";
import "./latest-projects.styles.scss";
import LatestProjectItem from "./latest-project-item/latest-project-item.comp";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

import project1 from "../../assets/lee-author-screenshot.png";
import project2 from "../../assets/coffee-screenshot.png";
import project3 from "../../assets/belfast-branding-8.png";
import project4 from "../../assets/belfast-branding.png";
import Title from "../title/title.comp";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default class LatestProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 1,
          img: project1,
          title: "Website",
        },
        {
          id: 2,
          img: project2,
          title: "Website",
        },
        {
          id: 3,
          img: project3,
          title: "Web Design",
        },
        {
          id: 3,
          img: project4,
          title: "Branding",
        },
      ],
    };
  }
  render() {
    return (
      <div className="latest">
        <Title>
          <div className="latest__title">
            Recent Projects
          </div>
        </Title>
        <div className="latest__container">

          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
          >
            <div className="latest__projects">
              {this.state.projects.map(({ title, img, id }) => (
                <SwiperSlide>
                  <LatestProjectItem key={id} title={title} img={img} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    );
  }
}
