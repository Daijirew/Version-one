import React from "react";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { TypeAnimation} from "react-type-animation";
import Tilt from "react-parallax-tilt";
import { SiTrilium } from "react-icons/si";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_content}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hello,This is me.</p>
            <h3 className={styles.text_2}>Poomrapee Patum</h3>
            <p className={styles.text_3}>
              <span>I am a </span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "full-stack",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Web developer.",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
</p>
            <p className={styles.text_4}>
              I'm a computer science student at Univercity of Phayao.
            </p>
            <ul className={styles.hero_social}>
              <li>
                <a href="https://github.com/Daijirew">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/daijirew/">
                  <FaFacebookF />
                </a>
              </li>
            </ul>    
          </div>

          <div>
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
              <div className={styles.hero_image}></div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;