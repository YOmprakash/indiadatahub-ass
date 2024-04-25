import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowCircleLeft } from "react-icons/md";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import "./index.css";


const slideData = [
    {
        id: 1,
        name: "State of Markets",
        image: "https://i.postimg.cc/hjdMYGvc/State-of-Markets-07-February-2024.jpg",
        description: "The market capitalisation of Indian stocks crossed US$4.5 trillion in January to a fresh record high. The Indian equity market is now the 5 biggest market in the"
    },
    {
      id: 2,
      name: "The Central Capex Surge",
      image: "https://i.postimg.cc/RCTbxNGZ/CG-Capex-Data-Page-3.png",
      description: "The last few years have seen a very substantial step up in capital expenditure by the Central government"

      
  },
  {
    id: 3,
    name: "Direct Taxes and Business Cycle",
    image: "https://i.postimg.cc/3RzLnvZK/Direct-Taxes-20240124-Page-1.png",
    description: "The share of direct taxes in total tax collections of the Central government is likely to rise to 58% in FY24"
},
{
  id: 4,
  name: "Banking Monitor",
  image: "https://i.postimg.cc/RFxmJkxV/Banking.jpg",
  description: "Credit growth has remained broadly stable in recent weeks at just over 15% YoY. Deposit growth has also remained stable at ~12%. However, with credit growth"
},
{
  id: 5,
  name: "Mutual Funds",
  image: "https://i.postimg.cc/BQ2q55Cn/Mutual-Funds-12-February-2024.jpg",
  description: "The calendar year 2023 was a strong year for the MF Industry. Total net inflows stood at ₹2.7 trillion, the second highest ever. The highest being in 2016 when"
},
{
  id:6,
  name: "The rise and fall of ULIPs",
  image: "https://i.postimg.cc/XNpmdwbB/ULIPs-202303-Page-2.png",
  description: "The rise and fall of ULIPs is an interesting trend in the insurance sector in the last 15 years"
},
{
        id: 7,
        name: "Industrial optimism at decade high...",
        image: "https://i.postimg.cc/zGXcDW0f/RBI-IOS-20240408-Page-1.png",
        description: "The results from the RBI's Industrial Outlook survey suggests there is broad based optimism about the economy"
    },
    {
      id: 8,
      name: "Fiscal Matters",
      image: "https://i.postimg.cc/jq154Qnp/Fiscal-Matters.png",
      description: "With 11 months of the year gone by, in aggregate, the government finances are likely to see very modest, at best, fiscal consolidation. Aggregate fiscal deficit has"
  },
  {
    id: 9,
    name: "Services exports continue to outperform Goods exports",
    image: "https://i.postimg.cc/7YPFhpLD/EXIM-20240418-Page-3.png",
    description: "Merchandise exports declined 3% YoY in FY24. However, services exports are likely to have grown by 5.5%"
}
]
const ReactSlider  =() =>  {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <BiSolidRightArrowCircle className="arrow" color="#000" />,
  prevArrow: <MdArrowCircleLeft className="arrow" color="#000" />,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="slider-section">
    <div className="slide-container">
      <Slider {...settings}>
      {slideData.map((slide) => (
          <div key={slide.id} className="slide-card">
            <div className="slide-sub-card">
            <img src={slide.image} alt={slide.name} />
            <div className="slide-card-info">
            <h3>{slide.name}</h3>
            <p>{slide.description}</p>
            </div>
          </div>
          </div>
        ))}
         
      </Slider>
      <button type="button" className="view-more">View More</button>
    </div>
    </div>
  );
}

export default ReactSlider;
