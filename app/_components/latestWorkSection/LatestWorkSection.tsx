import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ProjectCard } from './projectCard/ProjectCard';

// assets
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
import ecomerceImg1 from '@/assets/projects/Screenshot (65).png';
import ecomerceImg2 from '@/assets/projects/Screenshot (66).png';
import ecomerceImg3 from '@/assets/projects/Screenshot (67).png';
import ecomerceImg4 from '@/assets/projects/Screenshot (68).png';
import ecomerceImg5 from '@/assets/projects/Screenshot (69).png';
import dotsImg from '@/assets/puntos.png';
import styles from './latestWorkSection.module.scss';


export type Project = {
  images: StaticImageData[],
  title: string,
  description: string,
  repoUrl: string,
  liveUrl: string,
  id: number
}

const PROJECTS: Project[] = [
  {
    images: [larnUImg1, larnUImg2, larnUImg3, larnUImg4, larnUImg5],
    title: 'LarnU',
    description: 'Our unique approach seamlessly combines data, design, and technology to empower individuals to master languages effectively by simulating real-life conversations',
    repoUrl: 'https://gitlab.com/larnu-group/larnu-web-app',
    liveUrl: 'https://dev.larnu.app/',
    id: 1
  },
  {
    images: [quizifyImg1, quizifyImg2, quizifyImg3, quizifyImg4, quizifyImg5, quizifyImg6],
    title: 'Quizify',
    description: 'Quizify revolutionizes the learning experience with its proven methodology enhanced by gamification, allowing you to master any subject with ease.',
    repoUrl: 'https://gitlab.com/quizify/quiz-gpt/web',
    liveUrl: 'https://quizify.com/',
    id: 2
  },
  {
    images: [ecomerceImg1, ecomerceImg2, ecomerceImg3, ecomerceImg4, ecomerceImg5],
    title: 'E-commerce App',
    description: 'With Modern design, animations, using a CMS, all advanced cart functionalities, and most importantly the complete integration with Stripe',
    repoUrl: 'https://github.com/CesarAugusto316/ecommerce-next-sanity',
    liveUrl: 'https://ecommerce-next-sanity-sigma.vercel.app/',
    id: 3
  },
];


export const LatestWorkSection: FC = () => {
  return (
    <section id="projects" className={styles.container}>

      <div className={styles.main}>
        <Image className={styles.dotsLeft} src={dotsImg} alt="dots" />
        <h2>Latest Work</h2>

        <div className={styles.projectsContainer}>
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <Image className={styles.dotsRight} src={dotsImg} alt="dots" />
      </div>
    </section>
  );
};
