import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ProjectCard } from './projectCard/ProjectCard';
import styles from './latestWorkSection.module.scss';
// assets
// import larnUImg0 from '@/assets/projects/larnu0.png';
// import quizifyImg0 from '@/assets/projects/quizify.png';
import cortevaImag from '@/assets/projects/corteva.png';
import cometaImag from '@/assets/projects/cometa.png';
import ecomerceImg1 from '@/assets/projects/Screenshot (65).png';
import vlgLandingPage from '@/assets/projects/vlg-landing-page.png';
import vlgLandingDashboard from '@/assets/projects/vlg-dashboard.png';
import dotsImg from '@/assets/puntos.png';


export type Project = {
  images?: StaticImageData[],
  image?: StaticImageData,
  title: string,
  description: string,
  frontEndRepo?: string,
  backEndRepo?: string,
  liveUrl: string,
  fileUrl?: string,
  id: number
}

const PROJECTS: Project[] = [
  {
    image: vlgLandingDashboard,
    title: 'VLG Dashboard',
    description: 'comprehensive logistics solutions, specializing in  import and export of air, sea, and land cargo, delivering services with excellence, integrity, and commitment.',
    frontEndRepo: 'https://github.com/victoria-line-group/front-end-vlg',
    backEndRepo: 'https://github.com/victoria-line-group/core-nestjs',
    liveUrl: 'https://admin-qa.victorialine.com/',
    id: 2
  },
  {
    image: vlgLandingPage,
    title: 'VLG Landing Page',
    description: 'comprehensive logistics solutions, specializing in  import and export of air, sea, and land cargo, delivering services with excellence, integrity, and commitment.',
    frontEndRepo: 'https://github.com/CesarAugusto316/vlg-landing-page',
    liveUrl: 'https://www.victorialine.com/',
    id: 1
  },
  {
    image: cometaImag,
    title: 'Cometa',
    description: 'Cometa is a platform that provides the opportunity to engage in new and authentic experiences with like-minded individuals.',
    backEndRepo: 'https://github.com/cometa-dani/cometa-api-v2',
    liveUrl: 'https://4qkgc3d8fp.eu-west-3.awsapprunner.com/api/v1/world-cities',
    id: 9
  },
  {
    image: cortevaImag,
    title: 'Corteva Dashboard',
    description: 'Corteva Agriscience is a global pure-play agriculture company that combines industry-leading innovation, high-touch customer engagement and operational execution.',
    frontEndRepo: 'https://github.com/CortevaOrg/frontend',
    backEndRepo: 'https://github.com/CortevaOrg/backend-nestjs',
    liveUrl: 'https://corteva-app-dev.web.app/',
    id: 8
  },
  {
    image: ecomerceImg1,
    title: 'E-commerce App',
    description: 'With Modern design, animations, using a CMS, all advanced cart functionalities, and most importantly the complete integration with Stripe',
    frontEndRepo: 'https://github.com/CesarAugusto316/ecommerce-next-sanity',
    liveUrl: 'https://ecommerce-next-sanity-sigma.vercel.app/',
    id: 5
  },
  // {
  //   image: larnUImg0,
  //   title: 'LarnU',
  //   description: 'Our unique approach seamlessly combines data, design, and technology to empower individuals to master languages effectively by simulating real-life conversations',
  //   frontEndRepo: 'https://gitlab.com/larnu-group/larnu-web-app',
  //   liveUrl: 'https://dev.larnu.app/',
  //   id: 3
  // },
  // {
  //   image: quizifyImg0,
  //   title: 'Quizify',
  //   description: 'Quizify revolutionizes the learning experience with its proven methodology enhanced by gamification, allowing you to master any subject with ease.',
  //   frontEndRepo: 'https://gitlab.com/quizify/quiz-gpt/web',
  //   liveUrl: 'https://quizify.com/',
  //   id: 4
  // }
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
