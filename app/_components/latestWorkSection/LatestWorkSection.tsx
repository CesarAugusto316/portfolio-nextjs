import Image from 'next/image';

// assets
import { FC } from 'react';
import larnUImg1 from '@/assets/projects/larnu_desktop_01.png';
import larnUImg2 from '@/assets/projects/larnu_desktop_02.png';
import larnUImg3 from '@/assets/projects/larnu_desktop_03.png';
import larnUImg4 from '@/assets/projects/larnu_desktop_04.png';
import larnUImg5 from '@/assets/projects/larnu_desktop_05.png';
import quizifyImg1 from '@/assets/projects/Screenshot (64).png';
import quizifyImg2 from '@/assets/projects/Screenshot (63).png';
import quizifyImg3 from '@/assets/projects/Screenshot (54).png';
import quizifyImg4 from '@/assets/projects/Screenshot (55).png';
import quizifyImg5 from '@/assets/projects/Screenshot (56).png';
import quizifyImg6 from '@/assets/projects/Screenshot (57).png';
import styles from './latestWorkSection.module.scss';



const PROJECTS = [
  {
    images: [larnUImg1, larnUImg2, larnUImg3, larnUImg4, larnUImg5],
    title: 'LarnU Web App',
    description: 'Bla Bla Bla Bla Bla Bla',
    repoUrl: '',
    liveUrl: '',
    id: 1
  },
  {
    images: [quizifyImg1, quizifyImg2, quizifyImg3, quizifyImg4, quizifyImg5, quizifyImg6],
    title: 'Quizify Web App',
    description: 'Bla Bla Bla Bla Bla Bla',
    repoUrl: '',
    liveUrl: '',
    id: 2
  },
];

export const LatestWorkSection: FC = () => {
  return (
    <section id="projects" className={styles.container}>

      <div className={styles.main}>
        <h2>Latest Work</h2>

        <div className={styles.projectsContainer}>
          {PROJECTS.map(project => (
            <div
              className={styles.project}
              key={project.id}
            >
              <Image className={styles.img} src={project.images[0]} alt="icon" />

              <div className={styles.body}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
