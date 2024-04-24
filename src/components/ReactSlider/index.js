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
        image: "https://idhblogstaticcontent.s3.amazonaws.com/media/reportImages/State_of_Markets-07-February-2024.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVLJELYUXPFZG6Q6E%2F20240424%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240424T112921Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=2361dd34fabaa440c5aef6a1eb40ce8ff4d644c7902d257858124518a54f68cd",
        description: "The market capitalisation of Indian stocks crossed US$4.5 trillion in January to a fresh record high. The Indian equity market is now the 5 biggest market in the"
    },
    {
      id: 2,
      name: "The Central Capex Surge",
      image: "https://idhblogstaticcontent.s3.amazonaws.com/media/post_image/CG_Capex_Data_Page_3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVLJELYUXPFZG6Q6E%2F20240424%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240424T112921Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=9b1ef46a0043073b8ef6c6337a414b55be408bb11f7407b42f80afbb693161db",
      description: "The last few years have seen a very substantial step up in capital expenditure by the Central government"

      
  },
  {
    id: 3,
    name: "Direct Taxes and Business Cycle",
    image: "https://idhblogstaticcontent.s3.amazonaws.com/media/post_image/DirectTaxes_20240124_Page_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVLJELYUXPFZG6Q6E%2F20240424%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240424T112921Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=d4b6407aca91a3e0a13c7a11d7e77be146b847268a4e35cd6d8b36662e44ca1d",
    description: "The share of direct taxes in total tax collections of the Central government is likely to rise to 58% in FY24"
},
{
  id: 4,
  name: "Banking Monitor",
  image: "https://idhblogstaticcontent.s3.amazonaws.com/media/reportImages/Banking.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVLJELYUXPFZG6Q6E%2F20240424%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240424T112921Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=add9684d9afe75f918181d22c7fae291b4c669a12cbe698230e2b1063187b4ca",
  description: "Credit growth has remained broadly stable in recent weeks at just over 15% YoY. Deposit growth has also remained stable at ~12%. However, with credit growth"
},
{
  id: 5,
  name: "Mutual Funds",
  image: "https://idhblogstaticcontent.s3.amazonaws.com/media/reportImages/Inflation.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVLJELYUXPFZG6Q6E%2F20240424%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240424T112921Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=581f0977b6a3a779e58363e23514e905a3bea660839c0104aca553312f250fc8",
  description: "The calendar year 2023 was a strong year for the MF Industry. Total net inflows stood at ₹2.7 trillion, the second highest ever. The highest being in 2016 when"
},
{
  id:6,
  name: "The rise and fall of ULIPs",
  image: "https://idhblogstaticcontent.s3.amazonaws.com/media/post_image/ULIPs_202303_Page_2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVLJELYUXPFZG6Q6E%2F20240424%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240424T112921Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=58b6a28b27fcdeaa36d38bf64601fb984d2e012017bc1a881a135119f3be0417",
  description: "The rise and fall of ULIPs is an interesting trend in the insurance sector in the last 15 years"
},
{
        id: 7,
        name: "Industrial optimism at decade high...",
        image: "https://idhblogstaticcontent.s3.amazonaws.com/media/post_image/RBI_IOS_20240408_Page_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVLJELYUXPFZG6Q6E%2F20240424%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240424T112921Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=740d109e7a117c1bc134cd50873263385fcb005b9277e4f0439d1699aaa3e953",
        description: "The results from the RBI's Industrial Outlook survey suggests there is broad based optimism about the economy"
    },
    {
      id: 8,
      name: "Fiscal Matters",
      image: "https://idhblogstaticcontent.s3.amazonaws.com/media/reportImages/FiscalMatters.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVLJELYUXPFZG6Q6E%2F20240424%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240424T112921Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=ef10efe7af35d8dd49fc28a8f3b1a822e32a7cf54e73ca8b376827c791e7be4c",
      description: "With 11 months of the year gone by, in aggregate, the government finances are likely to see very modest, at best, fiscal consolidation. Aggregate fiscal deficit has"
  },
  {
    id: 9,
    name: "Services exports continue to outperform Goods exports",
    image: "https://idhblogstaticcontent.s3.amazonaws.com/media/post_image/EXIM_20240418_Page_3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVLJELYUXPFZG6Q6E%2F20240424%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240424T112921Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=0cc0f2ad832b96eadd6068e5e53fe1b507e992415f692dabe97d54ef4b296fc2",
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
