import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import GainTotalControlOfYourMoney from "../GainTotalControlOfYourMoney";
import KnowWhereYourMoneyGoes from "../KnowWhereYourMoneyGoes";
import PlanningAhead from "../PlanningAhead";

// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { getCookie } from "../../utils/StorageUtilites";

function HomeCarousel() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = getCookie();
  //   if (token) {
  //     navigate("/TodaysMenu");
  //   }
  // }, [navigate]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots: React.ReactElement) => (
      <div style={{ position: "absolute", top: "74%" }}>{dots}</div>
    ),
    dotsClass: "slick-dots custom-dots",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <GainTotalControlOfYourMoney />
        </div>
        <div>
          <KnowWhereYourMoneyGoes />
        </div>
        <div>
          <PlanningAhead />
        </div>
      </Slider>
    </div>
  );
}

export default HomeCarousel;
