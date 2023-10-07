'use client';

import { FC } from 'react';
import Image from 'next/image';
import { Project } from '../LatestWorkSection';

// assets
import styles from './projectCard.module.scss';
import githubIcon from '@/assets/icons/github.svg';
import rocketIcon from '@/assets/icons/rocket.svg';


interface Props {
  project: Project
}

export const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <div
      className={styles.project}
    >
      <Image className={styles.img} src={project.images[0]} alt="icon" />

      <div className={styles.body}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className={styles.buttons}>
          <button>
            <span>Code</span>
            <Image height={26} className={styles.icon} src={githubIcon} alt="github-icon" />
          </button>
          <button>
            <span>Live</span>
            <Image height={26} className={styles.icon} src={rocketIcon} alt="github-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};
