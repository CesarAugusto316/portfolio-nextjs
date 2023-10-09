'use client';

import { FC } from 'react';
import Image from 'next/image';
import { Project } from '../LatestWorkSection';

// assets
import styles from './projectCard.module.scss';
import rocketIcon from '@/assets/icons/rocket.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import githubIcon from '@/assets/icons/github.svg';
// import { EffectFade, Autoplay } from 'swiper/modules';
// import 'swiper/css/effect-fade';


interface Props {
  project: Project
}

export const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <div className={styles.project}>

      <Swiper
        speed={500}
        effect="fade"
        className={styles.img}
        grabCursor={true}
        loop={true}
      >
        {project.images.map((img, i) => (
          <SwiperSlide key={i}>
            <Image className={styles.img} src={img} alt="icon" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.body}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className={styles.buttons}>
          {/* <a href={project.repoUrl} target="_blank">
            <span>Repo</span>
            <Image height={23} className={styles.icon} src={githubIcon} alt="github-icon" />
          </a> */}
          <a href={project.liveUrl} target="_blank">
            <span>Visit</span>
            <Image height={23} className={styles.icon} src={rocketIcon} alt="github-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
