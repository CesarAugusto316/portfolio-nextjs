import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ProjectCard } from './projectCard/ProjectCard';
import styles from './latestWorkSection.module.scss';
// assets
import larnUImg0 from '@/assets/projects/larnu0.png';
import quizifyImg0 from '@/assets/projects/quizify.png';
import ecomerceImg1 from '@/assets/projects/Screenshot (65).png';
import vlgLandingPage from '@/assets/projects/vlg-landing-page.png';
import vlgLandingDashboard from '@/assets/projects/vlg-dashboard.png';
import dotsImg from '@/assets/puntos.png';


export type Project = {
  images?: StaticImageData[],
  image?: StaticImageData,
  title: string,
  description: string,
  repoUrl: string,
  repoUrl2?: string,
  liveUrl: string,
  fileUrl?: string,
  id: number
}

const PROJECTS: Project[] = [
  {
    image: vlgLandingDashboard,
    title: 'VLG Dashboard',
    description: 'Our unique approach seamlessly combines data, design, and technology to empower individuals to master languages effectively by simulating real-life conversations',
    repoUrl: 'https://gitlab.com/larnu-group/larnu-web-app',
    repoUrl2: 'sss',
    liveUrl: 'https://admin-qa.victorialine.com/',
    id: 2
  },
  {
    image: vlgLandingPage,
    title: 'VLG Landing Page',
    description: 'Our unique approach seamlessly combines data, design, and technology to empower individuals to master languages effectively by simulating real-life conversations',
    repoUrl: 'https://gitlab.com/victoria-line-group/landing-page',
    liveUrl: 'https://www.victorialine.com/',
    fileUrl: '/code/vlg-landing-page.zip',
    id: 1
  },
  {
    image: larnUImg0,
    title: 'LarnU',
    description: 'Our unique approach seamlessly combines data, design, and technology to empower individuals to master languages effectively by simulating real-life conversations',
    repoUrl: 'https://gitlab.com/larnu-group/larnu-web-app',
    liveUrl: 'https://dev.larnu.app/',
    id: 3
  },
  {
    image: quizifyImg0,
    title: 'Quizify',
    description: 'Quizify revolutionizes the learning experience with its proven methodology enhanced by gamification, allowing you to master any subject with ease.',
    repoUrl: 'https://gitlab.com/quizify/quiz-gpt/web',
    liveUrl: 'https://quizify.com/',
    id: 4
  },
  {
    image: ecomerceImg1,
    title: 'E-commerce App',
    description: 'With Modern design, animations, using a CMS, all advanced cart functionalities, and most importantly the complete integration with Stripe',
    repoUrl: 'https://github.com/CesarAugusto316/ecommerce-next-sanity',
    liveUrl: 'https://ecommerce-next-sanity-sigma.vercel.app/',
    id: 5
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
