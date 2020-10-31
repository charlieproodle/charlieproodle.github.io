import React from "react"
import Layout from "../components/layout"
import Particles from "../components/Particles"
import classes from './styles.module.css';
import { IoLogoLinkedin, IoLogoTwitter, IoLogoGithub } from "react-icons/io"

const IndexPage = () => (
  <Layout>
    <Particles />
    <div className={classes.container}>
      <div className={classes.detailText}>
        <p className={classes.name}>Charlie Day</p>
        <p>Software Engineer @ <a href="https://www.workshop.ws">workshop.ws</a></p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            className={classes.icon}
            onClick={() =>
              (window.location =
                "https://www.linkedin.com/in/charlie-day-537585131/")
            }
          >
            <IoLogoLinkedin className={classes.linkedinIcon} />
          </div>
          <div
            className={classes.icon}
            onClick={() =>
              (window.location = "https://twitter.com/charlie446179")
            }
          >
            <IoLogoTwitter className={classes.twitterIcon} />
          </div>
          <div
            className={classes.icon}
            onClick={() => (window.location = "https://github.com/charliemday")}
          >
            <IoLogoGithub className={classes.githubIcon} />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
