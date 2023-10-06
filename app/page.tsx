import { FC } from 'react';

// components
import { HeroSection, LatestWorkSection, NavBar } from './_components';

// assets
import styles from './page.module.scss';


export const Home: FC = () => {
  return (
    <div className={styles.container}>
      <NavBar />

      <HeroSection />

      <LatestWorkSection />
    </div>
  );
};

export default Home;
