import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../assets/bag-1.svg";
import Img2 from "../assets/bag-2.svg";
import Img3 from "../assets/bag-3.svg";
import Img4 from "../assets/bag-4.svg";
import Img5 from "../assets/bag-5.svg";

const AssociateCarousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        className: "slider",
        responsive: [
            {
              breakpoint: 1024,
              settings: { slidesToShow: 4}
            },
            {
              breakpoint: 600,
              settings: { slidesToShow: 3}
            },
            {
              breakpoint: 480,
              settings: { slidesToShow: 2}
            }
          ]
    };

    return(
        <>
            <Slider {...settings}>
                {
                    Idata.map((val,index)=>{
                        return(
                            <Images
                                key = {index}
                                imgsrc = {val.imgsrc}
                            />
                        );
                    })
                }
            </Slider>
        </>
    );
}

const Images = (props) => {
    return(
        <>
            <div className="d-flex my-5">
                <img src={props.imgsrc} className="mx-auto m-5" alt="Clients List"/>
            </div>
        </>
    );
}

const Idata = [
    {imgsrc:Img1},
    {imgsrc:Img2},
    {imgsrc:Img3},
    {imgsrc:Img4},
    {imgsrc:Img5},
];

export default AssociateCarousel;