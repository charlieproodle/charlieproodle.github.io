import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { IoLogoLinkedin, IoLogoTwitter, IoLogoGithub } from "react-icons/io";
import { GiSoapExperiment } from "react-icons/gi";
import { FaWpforms } from "react-icons/fa";
import bannerPicture from "Images/banner.jpeg";
import twitterPic from "Images/profile_picture.jpg";
import Spinner from "react-bootstrap/Spinner";

import Article from "Components/Article";
import Project from "Components/Project";

class HomeScreen extends Component {
  state = {
    type: "projects",
    projects: {},
    articles: {},
  };

  async componentDidMount() {
    await fetch(
      "https://raw.githubusercontent.com/charliemday/restapi/master/db.json"
    )
      .then((response) => response.json())
      .then((res) => {
        this.setState({ projects: res });
      })
      .catch((e) => console.log(e));

    await fetch(
      "https://raw.githubusercontent.com/charliemday/restapi/master/articles.json"
    )
      .then((response) => response.json())
      .then((res) => {
        this.setState({ articles: res });
      })
      .catch((e) => console.log(e));
  }

  renderProjects = () => {
    const { projects } = this.state;

    if (Object.values(projects).length === 0)
      return <Spinner animation="border"/>;

    return projects.map(({ title, icon, text, stack, link }, key) => (
      <Project
        title={title}
        key={key}
        icon={icon}
        text={text}
        stack={stack}
        link={link}
      />
    ));
  };

  renderArticles = () => {
    const { articles } = this.state;


    if (Object.values(articles).length === 0)
      return <Spinner animation="border" />;

    return articles.map(({ name, link, icon }, key) => (
      <Article key={key} name={name} link={link} icon={icon} />
    ));
  };

  render() {
    const { classes } = this.props;
    const { type } = this.state;
    return (
      <>
      <Spinner animation="border" />
        {/* <img
          src={bannerPicture}
          alt={"Not Found"}
          className={classes.bannerProfile}
        /> */}
        <div className={classes.mainContainer}>
          <div className={classes.header}>
            <div className={classes.detail}>
              <img
                src={twitterPic}
                alt={"Not found"}
                className={classes.profilePicture}
              />
              <div className={classes.detailText}>
                <p className={classes.name}>Charlie Day</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    className={classes.linkedin}
                    onClick={() =>
                      (window.location =
                        "https://www.linkedin.com/in/charlie-day-537585131/")
                    }
                  >
                    <IoLogoLinkedin className={classes.linkedinIcon} />
                  </div>
                  <div
                    className={classes.linkedin}
                    onClick={() =>
                      (window.location = "https://twitter.com/charlie446179")
                    }
                  >
                    <IoLogoTwitter className={classes.twitterIcon} />
                  </div>
                  <div
                    className={classes.linkedin}
                    onClick={() =>
                      (window.location = "https://github.com/charliemday")
                    }
                  >
                    <IoLogoGithub className={classes.githubIcon} />
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.seperator} />
          </div>
          <div className={classes.projectContainer}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h2
                className={
                  type === "projects"
                    ? classes.selectedSubtitle
                    : classes.subtitle
                }
                onClick={() =>
                  this.setState({
                    type: "projects",
                  })
                }
              >
                Projects <GiSoapExperiment />
              </h2>
              <h2
                className={
                  type === "articles"
                    ? classes.selectedSubtitle
                    : classes.subtitle
                }
                onClick={() => this.setState({ type: "articles" })}
              >
                Articles <FaWpforms />
              </h2>
            </div>

            {this.state.type === "projects" ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: 20,
                  flexWrap: "wrap",
                }}
              >
                {this.renderProjects()}
              </div>
            ) : null}

            {this.state.type === "articles" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 20,
                }}
              >
                {this.renderArticles()}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(HomeScreen);
