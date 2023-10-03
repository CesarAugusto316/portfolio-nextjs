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
              Full-Stack <br />
              Web Developer
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae repellat
              assumenda harum, et commodi, placeat molestias
              suscipit doloremque voluptatum distinctio rem ea necessitatibus?
            </p>

            <button>Lets work together</button>
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
