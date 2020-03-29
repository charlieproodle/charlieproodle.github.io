import React, { Component } from 'react';
import python_icon from "../../Images/python.png";
import tensorflow_icon from "../../Images/tensorflow.png";
import keras_icon from "../../Images/keras.png";
import styles from "../../Themes";

const ResearchStack = () => {
    return (
      <div>
        <img src={python_icon} style={styles.devicon} alt={"Not found :("} />
        <img
            src={tensorflow_icon}
          style={styles.devicon}
          alt={"Not found :("}
        />
        <img src={keras_icon} style={styles.devicon} alt={"Not found :("} />
      </div>
    );
  };

export default ResearchStack;