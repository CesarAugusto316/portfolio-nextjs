'use client';

import { FC } from 'react';
import Image from 'next/image';
import { Project } from '../LatestWorkSection';
// assets
import styles from './projectCard.module.scss';
import rocketIcon from '@/assets/icons/rocket.svg';
import githubIcon from '@/assets/icons/github.svg';
import downloadIcon from '@/assets/icons/download-solid.svg';


interface Props {
  project: Project
}
export const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <div className={styles.project}>
      <Image className={styles.img} src={project.image ?? ''} alt="icon" />

      <div className={styles.body}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div>
          <div className={styles.buttons}>
            <a href={project.repoUrl} target="_blank">
              <span>Repo</span>
              <Image height={23} className={styles.icon} src={githubIcon} alt="github-icon" />
            </a>
            <a href={project.liveUrl} target="_blank">
              <span>Visit</span>
              <Image height={23} className={styles.icon} src={rocketIcon} alt="github-icon" />
            </a>
          </div>
          <div className={styles.buttons}>
            <a href={''} target="_blank">
              <span>Download Code</span>
              <Image height={23} className={styles.icon} src={downloadIcon} alt="github-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
