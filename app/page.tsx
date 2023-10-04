import Image from 'next/image';
import styles from './page.module.scss';
import { FC } from 'react';


export const Home: FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.heroSection}>
        <div className={styles.col1}>

          <section>
            <h1>
              Cesar Rivera <br />
              <span>Full-Stack</span> <br />
              <span>Web Developer</span>
            </h1>

            <p>
              My name is César Rivera from Ecuador.
              I came into Software Development looking
              for personal growth. But I quickly realized
              that Software is very challenging and exiting so
              I created this space where I can share with the
              world the projects I &apos; am currently working on.
            </p>

            <button className={styles.button}>
              Lets work together
            </button>
          </section>
        </div>

        <div className={styles.col2}>
          <div className={styles.dots}></div>
          <div className={styles.blueBlock}></div>
        </div>
      </header>
    </div>
  );
};

export default Home;
