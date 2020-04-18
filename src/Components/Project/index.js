import React, { Component } from "react";
import styles from "./styles.module.scss";

import react from "Images/react.png";
import django from "Images/django.png";
import python from "Images/python.png";
import aws from "Images/aws.png";
import gitlab from "Images/gitlab.png";
import tensorflow from "Images/tensorflow.png";
import keras from "Images/keras.png";
import github from "Images/github.png";
import postgresql from "Images/postgresql.png";

const stackImages = {
  react: react,
  django: django,
  python: python,
  aws: aws,
  gitlab: gitlab,
  tensorflow: tensorflow,
  keras: keras,
  github: github,
  "react-native": react,
  postgresql: postgresql,
};

class Project extends Component {
  render() {
    const { title, icon, text, stack, link } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.iconContainer}>
          <img src={icon} alt={"Computer error!"} className={styles.icon} />
        </div>
        <div className={styles.text}>{text}</div>
        <div className={styles.stackContainer}>
          {stack.map((tech, key) => (
            <img
              key={key}
              src={stackImages[tech]}
              alt={"Not found"}
              className={styles.stackImage}
              title={tech}
            />
          ))}
        </div>
        <div className={styles.button} onClick={() => (window.location = link)}>
          See Project
        </div>
      </div>
    );
  }
}

export default Project;
