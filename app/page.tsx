import { FC } from 'react';

// components
import {
  HeroSection,
  LatestWorkSection,
  NavBar,
  TestimonialsSection,
  ContactsSection,
  Footer,
  AboutMeSection
} from './_components';

// assets
import styles from './page.module.scss';


export const Home: FC = () => {
  return (
    <div className={styles.container}>
      <NavBar />

      <HeroSection />

      <AboutMeSection />

      <LatestWorkSection />

      <TestimonialsSection />

      <ContactsSection />

      <Footer />
    </div>
  );
};

export default Home;
