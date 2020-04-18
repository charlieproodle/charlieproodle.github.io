import React, { Component } from "react";
import medium from "Images/medium.png";

const articleIcons = {
  medium: medium,
};

class Article extends Component {
  state = {};
  render() {
    const { name, link, icon } = this.props;
    return (
      <div
        style={styles.articleContainer}
        onClick={() => (window.location = link)}
      >
        <div>{name}</div>
        <img src={articleIcons[icon]} style={styles.img} alt={"Not found :("} />
      </div>
    );
  }
}

const styles = {
  img: {
    height: 40,
    width: 40,
    borderRadius: 5,
  },
  articleContainer: {
    border: "solid 2px lightgray",
    padding: 20,
    width: "50%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    cursor: "pointer",
    marginBottom: 25,
  },
};

export default Article;
