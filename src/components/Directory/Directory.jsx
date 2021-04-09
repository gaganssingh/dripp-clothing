import React, { Component } from "react";
import MenuItem from "../MenuItem/MenuItem";

import "./Directory.scss";

class Directory extends Component {
  state = {
    sections: [
      {
        id: 1,
        title: "hats",
        imageUrl:
          "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?cs=srgb&dl=pexels-marcus-murphy-1878821.jpg&fm=jpg",
        linkUrl: "shop/hats",
      },
      {
        id: 2,
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        linkUrl: "shop/jackets",
      },
      {
        id: 3,
        title: "sneakers",
        imageUrl:
          "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        linkUrl: "shop/sneakers",
      },
      {
        id: 4,
        title: "womens",
        imageUrl:
          "https://images.pexels.com/photos/2522683/pexels-photo-2522683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        size: "large",
        linkUrl: "shop/womens",
      },
      {
        id: 5,
        title: "mens",
        imageUrl:
          "https://images.pexels.com/photos/242829/pexels-photo-242829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        size: "large",
        linkUrl: "shop/mens",
      },
    ],
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
