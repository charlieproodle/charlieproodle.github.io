import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { IoIosRocket } from "react-icons/io";

const Showcase = props => {
  const { classes, icon, text, link, stack, color } = props;

  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <img src={icon} alt={"Not found"} className={classes.iconImg} />
      </div>
      <div className={classes.text}>{text}</div>
      <div className={classes.stack}>{stack}</div>
      <div className={classes.link} onClick={() => window.location = link}>
          See project <IoIosRocket style={{color: color, marginLeft: "5%", fontSize:20}}/>
        </div>
    </div>
  );
};

export default withStyles(styles)(Showcase);
