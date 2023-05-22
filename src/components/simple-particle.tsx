import React, { useCallback } from "react";
import { HTMLAttributes } from "react";
import { FunctionComponent } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ISourceOptions } from "tsparticles-engine";
import { useAtom } from "jotai";
import { darkThemeAtom } from "../constants/dark-theme-atom";

function getParticleOptions(darkTheme: boolean): ISourceOptions {
  return {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 700,
        },
        max: 40,
      },
      color: {
        value: darkTheme ? "#FFFFFF" : "#000000",
      },
      shape: {
        type: "circle",
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.4,
        random: false,
        anim: {
          enable: false,
          speed: 0.1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: {
          min: 4,
          max: 14,
        },
        random: true,
      },
      line_linked: {
        enable: false,
        distance: 80,
        color: darkTheme ? "#FFFFFF" : "#000000",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: {
          min: 0.3,
          max: 2.2,
        },
        direction: "top",
        random: true,
        straight: true,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        onDiv: {
          selectors: ["#intro-card"],
          enable: true,
          mode: "repulse",
          type: "circle"
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          duration: 4,
          opacity: 0.8,
        },
        // repulse: {
          //   random: {
          //     enable: false,
          //     minimumValue: 0
          //   },
          //   value: 0,
          //   enabled: false,
          //   distance: 1,
          //   duration: 1,
          //   factor: 1,
          //   speed: 1
          // },
        push: {
          particles_nb: 4,
          quantity: 1,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    background: {
      color: {
        value: "#0284c7",
      },
      opacity: 0,
    },
    retina_detect: true,
  };
}

const SimpleParticle: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const [enabled, _] = useAtom(darkThemeAtom);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={getParticleOptions(enabled)}
      canvasClassName="z-neg-10"
      className="z-neg-10"
    />
  );
};

export default SimpleParticle;
