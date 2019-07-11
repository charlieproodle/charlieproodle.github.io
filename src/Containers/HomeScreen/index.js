import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Showcase from "../../Components/Showcase";
import { proodle, gan_project, signup_project } from "../../Text/info";
import { IoLogoLinkedin } from "react-icons/io";
import {
  DiReact,
  DiGithubBadge,
  DiAndroid,
  DiPython,
  DiGoogleCloudPlatform,
  DiJavascript1,
  DiJavascript,
  DiCode
} from "react-icons/di";

const ProodleStack = props => {
  const { classes } = props;
  return (
    <div>
      <DiReact className={classes.devicon + " " + classes.reactIcon} />
      <DiGithubBadge className={classes.devicon} />
      <DiAndroid className={classes.devicon + " " + classes.androidIcon} />
    </div>
  );
};

const ResearchStack = props => {
  const { classes } = props;
  return (
    <div>
      <DiPython className={classes.devicon} />
      <DiGoogleCloudPlatform className={classes.devicon} />
    </div>
  );
};

const PersonalProject = props => {
  const { classes } = props;
  return (
    <div>
      <DiReact className={classes.devicon + " " + classes.reactIcon} />
      <DiPython className={classes.devicon} />
      <DiJavascript className={classes.devicon + " " + classes.jsIcon} />
      <DiJavascript1 className={classes.devicon + " " + classes.jsIcon} />
    </div>
  );
};

class HomeScreen extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.mainContainer}>
          <DiCode className={classes.backgroundIcon2} />
          <div className={classes.header}>
            <div className={classes.detail}>
              <img
                src={
                  "https://media.licdn.com/dms/image/C4D03AQG9wDJSmplr8g/profile-displayphoto-shrink_200_200/0?e=1568246400&v=beta&t=NzgTiOqBe9iFk6_EAzVf1e-eFMq8cimt9tgKNl3BIJc"
                }
                alt={"Not found"}
                className={classes.profilePicture}
              />
              <div className={classes.detailText}>
                <p className={classes.name}>Charlie Day</p>
                <div>
                  <p className={classes.subtext}>
                    Postgraduate Computer Science Student
                  </p>
                  <p className={classes.subtext}>University of Nottingham</p>
                </div>
                <div
                  className={classes.linkedin}
                  onClick={() =>
                    (window.location =
                      "https://www.linkedin.com/in/charlie-day-537585131/")
                  }
                >
                  <IoLogoLinkedin className={classes.linkedinIcon} />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.projectContainer}>
            <h2 className={classes.subtitle}>Current Projects</h2>
            <div className={classes.projects}>
              <Showcase
                icon={
                  "https://blogs.nottingham.ac.uk/ingenuitylab/files/2017/10/Logo-with-white-background.png"
                }
                text={proodle}
                stack={<ProodleStack classes={classes} />}
                link={"https://proodlesolutions.com/"}
                color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
              />
              <Showcase
                icon={
                  "https://github.com/charlieproodle/SimpleGAN/raw/master/MNIST_GAN/images/generated_plot_e090.png"
                }
                text={gan_project}
                stack={<ResearchStack classes={classes} />}
                link={
                  "https://github.com/charlieproodle/General-Adversarial-Networks"
                }
                color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
              />
              <Showcase
                icon={
                  "https://github.com/charlieproodle/signup/blob/master/Images/Screenshot%202019-07-10%20at%2002.02.38.png?raw=true"
                }
                stack={<PersonalProject classes={classes} />}
                text={signup_project}
                link={"https://github.com/charlieproodle/signup"}
                color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
              />
            </div>
          </div>
        </div>
        <div className={classes.footer} />
      </>
    );
  }
}

export default withStyles(styles)(HomeScreen);
