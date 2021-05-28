import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../assets/banner-1.svg";
import Img2 from "../assets/banner-2.svg";

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        className: "slider",
    };

    return(
        <>
            <Slider {...settings}>
                {
                    BannerSlideData.map((val,index)=>{
                        return(
                            <BannerSlide
                                key = {index}
                                imgsrc = {val.imgsrc}
                                heading = {val.heading}
                                content = {val.content}
                                class = {val.class}

                            />
                        );
                    })
                }
            </Slider>
        </>
    );
}

const BannerSlide = (props) => {
    return(
        <>
            <div className="row mx-auto">
                    <div className={`col-md-6 ${props.class}`}>
                        <img src={props.imgsrc} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 banner-text">
                        <h1>{props.heading}</h1>
                        <p>{props.content}</p>
                        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt tenetur unde asperiores pariatur! Iste accusamus molestias repellat iusto, numquam officiis incidunt necessitatibus debitis nulla earum cupiditate asperiores.</p> */}
                        <div className="get-app-btn">get app</div>
                    </div>
                </div>
        </>
    );
}

const BannerSlideData = [
    {
        imgsrc: Img1,
        heading: "heading",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt tenetur unde asperiores pariatur! Iste accusamus molestias repellat iusto, numquam officiis incidunt necessitatibus debitis nulla earum cupiditate asperiores.",
        class: "banner-1"
    },
    {
        imgsrc: Img2,
        heading: "heading",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt tenetur unde asperiores pariatur! Iste accusamus molestias repellat iusto, numquam officiis incidunt necessitatibus debitis nulla earum cupiditate asperiores.",
        class: "banner-2"
    },
];

export default Banner;