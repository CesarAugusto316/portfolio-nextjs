import { FC } from 'react';

// components
import { HeroSection, LatestWorkSection, NavBar, AboutSection, ContactsSection } from './_components';

// assets
import styles from './page.module.scss';


export const Home: FC = () => {
  return (
    <div className={styles.container}>
      <NavBar />

      <HeroSection />

      <LatestWorkSection />

      <AboutSection />

      <ContactsSection />
    </div>
  );
};

export default Home;
