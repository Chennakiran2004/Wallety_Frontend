// import { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./index.css";
// import GainTotalControlOfYourMoney from "../GainTotalControlOfYourMoney";
// import KnowWhereYourMoneyGoes from "../KnowWhereYourMoneyGoes";
// import PlanningAhead from "../PlanningAhead";

// // Custom Arrow Components
// const NextArrow = (props: any) => {
//   const { onClick, visible } = props;
//   return (
//     visible && (
//       <div className="slick-arrow slick-next" onClick={onClick}>
//         <img src="/Images/carouselfrontarrow.svg" alt="Next" />
//       </div>
//     )
//   );
// };

// const PrevArrow = (props: any) => {
//   const { onClick, visible } = props;
//   return (
//     visible && (
//       <div className="slick-arrow slick-prev" onClick={onClick}>
//         <img src="/Images/carouselbackarrow.svg" alt="Previous" />
//       </div>
//     )
//   );
// };

// function HomeCarousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     arrows: true,
//     autoplay: false,
//     autoplaySpeed: 2000,
//     nextArrow: <NextArrow visible={currentSlide < 2} />,
//     prevArrow: <PrevArrow visible={currentSlide === 1} />,
//     beforeChange: (oldIndex: number, newIndex: number) => {
//       setCurrentSlide(newIndex);
//     },
//     responsive: [
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//     appendDots: (dots: React.ReactElement) => (
//       <div style={{ position: "absolute", top: "74%" }}>{dots}</div>
//     ),
//     dotsClass: "slick-dots custom-dots",
//   };

//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <GainTotalControlOfYourMoney />
//         </div>
//         <div>
//           <KnowWhereYourMoneyGoes />
//         </div>
//         <div>
//           <PlanningAhead />
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default HomeCarousel;

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import GainTotalControlOfYourMoney from "../GainTotalControlOfYourMoney";
import KnowWhereYourMoneyGoes from "../KnowWhereYourMoneyGoes";
import PlanningAhead from "../PlanningAhead";

// Custom Arrow Components
const NextArrow = (props: any) => {
  const { onClick, visible } = props;
  return (
    visible && (
      <div className="slick-arrow slick-next" onClick={onClick}>
        <img
          src="/Images/carouselfrontarrow.svg"
          alt="Next"
          style={{ position: "absolute", top: "1500%", right: "70%" }}
        />
      </div>
    )
  );
};

const PrevArrow = (props: any) => {
  const { onClick, visible } = props;
  return (
    visible && (
      <div className="slick-arrow slick-prev" onClick={onClick}>
        <img
          src="/Images/carouselbackarrow.svg"
          alt="Previous"
          style={{ position: "absolute", top: "1500%" }}
        />
      </div>
    )
  );
};

function HomeCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow visible={currentSlide < 2} />,
    prevArrow: <PrevArrow visible={currentSlide === 1} />,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
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
      <div style={{ position: "absolute", bottom: "20%" }}>{dots}</div>
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
