import React from "react";
import python_icon from "../../Images/python.png";
import {
    DiReact,
    DiJavascript1,
  } from "react-icons/di";
import styles from "../../Themes";


const PersonalProject = props => {
    return (
      <div>
        <DiReact style={{ ...styles.devicon, ...styles.reactIcon }} />
        <img src={python_icon} style={styles.devicon} alt={"Not found :("} />
        <DiJavascript1 style={{ ...styles.devicon, ...styles.jsIcon }} />
      </div>
    );
  };

export default PersonalProject;