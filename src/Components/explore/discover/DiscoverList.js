import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DisCoverItem from './DiscoverItem';
import { Container, CssBaseline } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft:25,
    paddingRight:25,
  },

}));
export default function DiscoverList() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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
  var classes= useStyles();
  var arr=[
    {
      image: "https://imgs.viettelstore.vn/Images/Product/ProductArchive/561/52018/cach-goi-video-tren-instagram-1.png",
      title: "instagram",
      content: "Instagram recommended"

    },
    {
      image: "https://xuatkhaulaodong.com.vn/images/2018/01/03/3-top-10-truyen-manga-nhat-ban-hay-nhat-moi-thoi-dai-naruto-2.png",
      title: "naruto",
      content: "Instagram recommended"
    },
    {
      image: "https://nhatkiemphithien.vn/wp-content/uploads/2020/03/anh-one-piece-3d-dep-nhat-29.jpeg",
      title: "one piece",
      content: "Instagram recommended"

    },
    {
      image: "https://cuongtruyen.com/wp-content/uploads/2019/04/zoro-one-piece-1.jpg",
      title: "roronoa zoro",
      content: "Instagram recommended"

    },
    {
      image: "https://imgs.viettelstore.vn/Images/Product/ProductArchive/561/52018/cach-goi-video-tren-instagram-1.png",
      title: "instagram",
      content: "Instagram recommended"

    }
  ]
    return (
      <Container classtitle={classes.root}>
        <CssBaseline/>
        <Slider {...settings}>
          {
            arr.map((elment,key) =>{
              return(
                <DisCoverItem image={elment.image} title={elment.title} content={elment.content} key={key} />
              )
            })
          }
        </Slider>
        </Container>
    );
  }
