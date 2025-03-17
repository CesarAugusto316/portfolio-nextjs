'use client';

import { FC } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// assets / css
import styles from './animator.module.scss';
import 'swiper/css';


interface Props {
  icons: string[]
}

export const Animator: FC<Props> = ({ icons }) => {
  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={30}
        style={{ width: 200 }}
        speed={300}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2_400
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
