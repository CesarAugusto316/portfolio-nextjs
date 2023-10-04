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
            <div className={styles.pentagon}></div>
          </div>

          {/* <Image className={styles.img} src={computerImg} alt="gif" /> */}
          <div className={styles.dots}></div>
          <div className={styles.blueBlock}></div>
        </div>
      </header>


      <section className={styles.projects}>
        <h2>Latest Work</h2>
      </section>
    </div>
  );
};

export default Home;
