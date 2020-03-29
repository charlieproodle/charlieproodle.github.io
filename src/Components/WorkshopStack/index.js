import React from 'react';
import { DiJavascript1, DiReact } from "react-icons/di";
import python_icon from "../../Images/python.png";
import django_icon from "../../Images/django.png"
import styles from "../../Themes";

const WorkshopProject = () => {
    return (
      <div>
        <DiReact style={{ ...styles.devicon, ...styles.reactIcon }} />
        <img src={python_icon} style={styles.devicon} alt={"Not found :("} />
        <DiJavascript1 style={{ ...styles.devicon, ...styles.jsIcon }} />
        <img src={django_icon} style={styles.devicon} alt={"Not found :("} />
      </div>
    );
  };

export default WorkshopProject;