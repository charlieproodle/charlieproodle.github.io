import React from "react";
import Particles from "react-tsparticles";

const CustomParticles = () => {
  return (
    <Particles
      id="tsparticles"
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: -1,
      }}
      options={{
        background: {
          color: {
            value: "#ffffff",
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#000000", // Red
          },
          links: {
            color: "#000000",
            distance: 150,
            enable: true,
            opacity: 0.25,
            width: 1,
          },
          collisions: {
            enable: true, // Enable particles to collide with one another
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3, // How fast they move
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.1,
          },
          shape: {
            type: "rectangle", // Shape of the points
          },
          size: {
            random: true,
            value: 10, // Size of the Points
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default CustomParticles;
