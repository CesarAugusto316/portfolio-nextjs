import { FC } from 'react';
import styles from './latestWorkSection.module.scss';
import larnUImg from '@/assets/projects/larnu_desktop_01.png';
import Image from 'next/image';


export const LatestWorkSection: FC = () => {
  return (
    <section id="projects" className={styles.container}>

      <div>
        <h2>Latest Work</h2>

        <div>
          <Image src={larnUImg} alt="icon" />
        </div>
      </div>

    </section>
  );
};
