import React, { Component } from 'react';
import redux_icon from "../../Images/redux.png";
import {
    DiReact,
    DiGithubBadge,
    DiAndroid,
  } from "react-icons/di";
import styles from "../../Themes";


const ProodleStack = props => {
    return (
      <div>
        <DiReact style={{...styles.devicon, ...styles.reactIcon}} />
        <img src={redux_icon} style={styles.devicon} alt={"Not found :("} />
        <DiGithubBadge style={styles.devicon} />
        <DiAndroid style={{...styles.devicon, ...styles.androidIcon}} />
      </div>
    );
  };

  

export default ProodleStack