import { FC } from 'react';

// components
import { HeroSection, LatestWorkSection } from './_components';

// assets
import styles from './page.module.scss';


export const Home: FC = () => {
  return (
    <div className={styles.container}>

      <nav className={styles.navBar}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </nav>

      <HeroSection />

      <LatestWorkSection />
    </div>
  );
};

export default Home;
