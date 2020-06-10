import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExploreItem from "./ExploreItem";
import { Container, Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
  item: {
    width:'100%'
  },
}));
function ExploreList() {
  var classes = useStyles();
  var arr = [
    {
      image: "https://cf.shopee.vn/file/8cf37debf504a6435320b378f1dbcf6d",
      favB: 100,
      chatB:20
    },
    {
      image: "https://tanoshiishop.com/wp-content/uploads/2020/03/O1CN01Zqalva1YZThP4tzVj_2269763073.png",
      favB:100,
      chatB:10
    },
    {
      image: "https://file.hstatic.net/1000124630/file/73170497_109245630511699_7453082724711006208_n_2846f04d928f498fba1050fe4bb266f5_grande.png",
      favB:400,
      chatB:47
    },
    {
      image: "https://file.hstatic.net/1000124630/file/73170497_109245630511699_7453082724711006208_n_2846f04d928f498fba1050fe4bb266f5_grande.png",
      favB:263,
      chatB:70
    },
    {
      image: "https://otakustore.vn/image/catalog/2019/11/gene-studio-god-of-skypiea-enel-1-6-scale-resin-statue.jpg",
      favB: 400,
      chatB:20
    },
    {
      image: "https://file.hstatic.net/1000124630/file/73170497_109245630511699_7453082724711006208_n_2846f04d928f498fba1050fe4bb266f5_grande.png",
      favB:900,
      chatB:200
    },
  ];
  return (
      <Container className={classes.root}>
        <Grid container spacing={3} >
          {arr.map((element, key) => {
            return (
              <Grid item xs={12} sm={4} className={classes.item} key={key}>
                <ExploreItem image={element.image} favB={element.favB} chatB={element.chatB}  />
              </Grid>
            )
          })}
        </Grid>
      </Container>
  );
}

export default ExploreList;
