'use client';

import { FC, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
// assets
import styles from './animator.module.scss';


interface Props {
  icons: string[]
}

export const Animator: FC<Props> = ({ icons }) => {

  return (
    <div className={styles.container}>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3_000
        }}>
        {icons.map((icon, i) => (
          <SwiperSlide key={i} className={styles.swiperSlide}>
            <Image className={styles.icon} src={icon} alt="tech-icon" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
