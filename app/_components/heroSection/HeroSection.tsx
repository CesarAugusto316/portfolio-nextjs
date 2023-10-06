import { FC } from 'react';
import styles from './heroSection.module.scss';
import { Figures } from './figures/Figures';
import Image from 'next/image';
import heroPatternImg from '../../../public/assets/hero-pattern.svg';


export const HeroSection: FC = () => {
  return (
    <header id="home" className={styles.heroSection}>
      <Image src={heroPatternImg} alt="hero-img" className={styles.heroPattern} />

      <div className={styles.col1}>
        <section>
          <h1>
            César Rivera <br />
            <span>Full-Stack</span> <br />
            <span>Web Developer</span>
          </h1>

          <p>
            I came into Software Development looking
            for personal growth. But I quickly realized
            that Software is very challenging and exiting. So
            I created this space where I can share with the
            world the projects I &apos; am currently working on.
          </p>

          <button className={styles.button}>
            Lets work together
          </button>
        </section>
      </div>

      <div className={styles.col2}>
        <Figures />
      </div>

      <div className={styles.dots} />
    </header>
  );
};
