import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Showcase from "../../Components/Showcase";
import { IoLogoLinkedin, IoLogoTwitter, IoLogoGithub } from "react-icons/io";
import { GiSoapExperiment } from "react-icons/gi";
import { FaWpforms } from "react-icons/fa";
import bannerPicture from "../../Images/banner.jpeg";
import twitterPic from "../../Images/profile_picture.jpg";

import Article from "../../Components/Article";

import showcaseData from "../../Data/showcase";
import articleData from "../../Data/articles";

class HomeScreen extends Component {

  state = {
    type: "projects"
  }

  render() {
    const { classes } = this.props;
    const { type } = this.state;
    return (
      <>
        <img src={bannerPicture} alt={"Not Found"} className={classes.bannerProfile} />
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
                <div>
                  <p className={classes.subtext}>charliemday31@gmail.com</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                    (window.location =
                      "https://twitter.com/charlie446179")
                  }
                >
                  <IoLogoTwitter className={classes.twitterIcon} />
                </div>
                <div
                  className={classes.linkedin}
                  onClick={() =>
                    (window.location =
                      "https://github.com/charliemday")
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
            <div style={{ display: "flex", justifyContent: "center"}}>
            <h2 className={
              type === "projects" ? 
                classes.selectedSubtitle : 
                  classes.subtitle} onClick={() => this.setState({ 
              type: "projects"
            })}>Projects <GiSoapExperiment/></h2>
            <h2 
              className={type === "articles" ? classes.selectedSubtitle : classes.subtitle}
              onClick={() => this.setState({ type: "articles" })}
              >Articles <FaWpforms /></h2>
            </div>
            <div className={classes.projects}>
              { this.state.type === "projects" &&
                showcaseData.map(
                ({ icon, text, stack, link }) => {
                  const StackComp = stack;
                  return (
                    <Showcase 
                      icon={icon}
                      text={text}
                      stack={<StackComp />}
                      link={link}
                      color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
                    />
                  )
                }
                )
              }
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center", marginBottom: 100 }}>
              {
                this.state.type === "articles" &&

                articleData.map(
                  ({ name, link, icon }) => {
                    return (
                      <Article name={name} link={link} icon={icon}/>
                    )
                  }
                )
              }
              </div>
          </div>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(HomeScreen);
