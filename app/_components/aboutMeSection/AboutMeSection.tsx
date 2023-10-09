import { FC } from 'react';
import styles from './aboutMeSection.module.scss';
import avatarImg from '@/assets/icons/my-avatar.png';
import Image from 'next/image';


export const AboutMeSection: FC = () => {
  return (
    <div className={styles.container}>

      <div className={styles.main}>
        <h2>Hi, I’m César.  Nice to meet you.</h2>

        <div className={styles.content}>
          <p>
            Since beginning my journey as a freelance designer over 2 years ago,
            I&apos;ve done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for both
            business and consumer use. I&apos;m quietly confident, naturally curious,
            and perpetually working on improving my chops one design problem at a time.
          </p>

          <Image className={styles.avatar} src={avatarImg} alt="my-avatar" />
        </div>
      </div>
    </div>
  );
};
