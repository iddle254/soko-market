import React, { useState } from "react";
import "./landing.styles.css";

import LandingItem from "./LandingItem.component";

function Landing() {
  const [initialItems, setInitialItems] = useState([
    {
      item: "makeup",
      path: "/makeup",
      image:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      item: "headphones",
      path: "/headphones",
      image:
        "https://images.unsplash.com/photo-1503300961747-204cbbdaeb51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      item: "rooms",
      path: "/rooms",
      image:
        "https://images.unsplash.com/photo-1561024172-0ae2ebd65018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      item: "fashion",
      path: "/fashion",
      image:
        "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      item: "community",
      path: "/community",
      image:
        "https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      item: "housing",
      path: "/housing",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      item: "photography",
      path: "/photography",
      image:
        "https://images.unsplash.com/photo-1533102412356-cd8b0799505c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      item: "tickets",
      path: "/tickets",
      image:
        "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      item: "all-categories",
      path: "/all-categories",
      image:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
  ]);
  return (
    <div className="landing">
      {initialItems.map((item) => (
        <LandingItem {...item} />
      ))}
    </div>
  );
}

export default Landing;
