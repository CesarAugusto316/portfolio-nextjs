import { FC } from 'react';
import Image from 'next/image';

// assets
import styles from './page.module.scss';
import heroPatternImg from '../public/assets/hero-pattern.svg';
// import computerImg from '../public/assets/palette.gif';


export const Home: FC = () => {
  return (
    <div className={styles.container}>

      <nav className={styles.navBar}>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </nav>


      <header className={styles.heroSection}>
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

              {/* What truly sets me apart is my critical thinking
              skills. I have a knack for dissecting complex problems,
              analyzing them from multiple angles, and arriving at
              elegant, efficient solutions. This ability not only
              streamlines my development processes but also ensures
              that every project I touch delights users with a
              well crafted design. */}
            </p>

            <button className={styles.button}>
              Lets work together
            </button>
          </section>
        </div>

        <div className={styles.col2}>

          <div className={styles.figures}>

            <div className={styles.square}></div>
            <div className={styles.circle}></div>

            <svg className={styles.pentagon} width="23rem" height="23.4rem" stroke={'var(--secondary-100)'} strokeWidth="0.4" fill={'white'} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.2296 4.95843L42.8601 18.7012C43.5405 19.2316 43.8041 20.1385 43.5141 20.951L36.4739 40.6724C36.1897 41.4685 35.4357 42 34.5903 42H13.4097C12.5643 42 11.8103 41.4685 11.5261 40.6724L4.48593 20.951C4.19588 20.1385 4.45953 19.2315 5.13995 18.7012L22.7704 4.95843C23.4933 4.39496 24.5067 4.39496 25.2296 4.95843Z">
              </path>
            </svg>

          </div>

          <div className={styles.dots}></div>
        </div>
      </header>


      <section className={styles.projects}>
        <h2>Latest Work</h2>
      </section>
    </div>
  );
};

export default Home;
