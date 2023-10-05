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
          <li>Home</li>
          <li>Projects</li>
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
