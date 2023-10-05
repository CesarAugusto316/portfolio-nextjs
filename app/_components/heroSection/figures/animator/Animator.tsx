'use client';

import { FC, useEffect } from 'react';
import styles from './animator.module.scss';
import Image from 'next/image';


interface Props {
  icons: string[]
}

export const Animator: FC<Props> = ({ icons }) => {

  useEffect(() => {
    console.log(icons);
  }, [icons]);

  return (
    <div className={styles.container}>
      {icons.map((icon, i) => (
        <Image className={styles.icon} key={i} src={icon} alt="tech-icon" />
      ))}
    </div>
  );
};
