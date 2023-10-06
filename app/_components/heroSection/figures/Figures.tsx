import { FC } from 'react';
import styles from './figures.module.scss';
import { Animator } from './animator/Animator';

// assets
import jsIcon from '@/assets/logos/javascript-original.svg';
import reactIcon from '@/assets/logos/react-original-wordmark.svg';
import reduxIcon from '@/assets/logos/redux-original.svg';
import nodeIcon from '@/assets/logos/nodejs-original-wordmark.svg';
import jestIcon from '@/assets/logos/jestjsio-icon.svg';
import redisIcon from '@/assets/logos/redis-original-wordmark.svg';
import nestIcon from '@/assets/logos/nestjs-plain.svg';
import dockerIcon from '@/assets/logos/docker-original-wordmark.svg';
import postgresIcon from '@/assets/logos/postgresql-original-wordmark.svg';
import mongoIcon from '@/assets/logos/mongodb-original-wordmark.svg';
import nextIcon from '@/assets/logos/nextjs-icon.svg';
import expressIcon from '@/assets/logos/express-original-wordmark.svg';
import gitIcon from '@/assets/logos/git-scm-icon.svg';
import sassIcon from '@/assets/logos/sass-original.svg';
import tailwindIcon from '@/assets/logos/tailwindcss-icon.svg';
import tsIcon from '@/assets/logos/typescript-original.svg';


const frontEndIcons = [
  jsIcon, reactIcon, nodeIcon, reduxIcon, jestIcon
];
const backEndIcons = [
  nestIcon, dockerIcon, postgresIcon, mongoIcon, redisIcon
];
const othersIcons = [
  nextIcon, expressIcon, gitIcon, sassIcon, tailwindIcon, tsIcon
];

export const Figures: FC = () => {
  return (
    <div className={styles.container}>

      <div className={styles.square}>
        <Animator icons={frontEndIcons} />
      </div>

      <div className={styles.circle}>
        <Animator icons={backEndIcons} />
      </div>

      <div className={styles.pentagon}>
        <svg className={styles.animatorContainer} width="23rem" height="23.4rem" stroke={'var(--secondary-50)'} strokeWidth="1" fill={'white'} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.2296 4.95843L42.8601 18.7012C43.5405 19.2316 43.8041 20.1385 43.5141 20.951L36.4739 40.6724C36.1897 41.4685 35.4357 42 34.5903 42H13.4097C12.5643 42 11.8103 41.4685 11.5261 40.6724L4.48593 20.951C4.19588 20.1385 4.45953 19.2315 5.13995 18.7012L22.7704 4.95843C23.4933 4.39496 24.5067 4.39496 25.2296 4.95843Z">
          </path>
        </svg>

        <div className={styles.animatorContainer} style={{ marginTop: '0.5rem' }}>
          <Animator icons={othersIcons} />
        </div>
      </div>
    </div>
  );
};
