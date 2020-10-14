import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import LandingItem from "./LandingItem.component";

const useStyles = makeStyles({
  Landing: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    MsOverflowStyle: "none",
    scrollbarWidth: "none",
  },
});

function Landing() {
  const classes = useStyles();
  const [initialItems, setInitialItems] = useState([
    {
      item: "rooms",
      path: "/rooms",
      image: "/assets/categoryImages/rooms.jpg",
    },
    {
      item: "fashion",
      path: "/fashion",
      image: "/assets/categoryImages/fashion.jpg",
    },
    {
      item: "sporting goods",
      path: "/sporting-goods",
      image: "/assets/categoryImages/sporting.jpg",
    },
    {
      item: "housing",
      path: "/housing",
      image: "/assets/categoryImages/housing.jpg",
    },
    {
      item: "men",
      path: "/men",
      image: "/assets/categoryImages/men.jpg",
    },
    {
      item: "women",
      path: "/women",
      image: "/assets/categoryImages/women.jpg",
    },
    {
      item: "bags",
      path: "/bags",
      image: "/assets/categoryImages/bags.jpg",
    },
    {
      item: "kids",
      path: "/kids",
      image: "/assets/categoryImages/kids.jpg",
    },
    {
      item: "Jewelry",
      path: "/Jewelry",
      image: "/assets/categoryImages/jewelry.jpg",
    },
    {
      item: "Watches",
      path: "/Watches",
      image: "/assets/categoryImages/watches.jpg",
    },
    {
      item: "clothing",
      path: "/clothing",
      image: "/assets/categoryImages/clothing.jpg",
    },
    {
      item: "makeup",
      path: "/makeup",
      image: "/assets/categoryImages/makeup.jpg",
    },
    {
      item: "headphones",
      path: "/headphones",
      image: "/assets/categoryImages/headphones.jpg",
    },
    {
      item: "all-categories",
      path: "/all-categories",
      image:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
  ]);
  return (
    <div className={classes.Landing}>
      {initialItems.map((item) => (
        <LandingItem {...item} />
      ))}
    </div>
  );
}

export default Landing;
