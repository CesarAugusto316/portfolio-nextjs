import { FC } from 'react';
import styles from './testimonialsSection.module.scss';


export const TestimonialsSection: FC = () => {
  return (
    <div id="testimonials" className={styles.container}>

      <div className={styles.main}>
        <h2>Testimonials</h2>

        <div>
          <p>People I&apos;ve worked with have said some nice things...</p>

        </div>
      </div>
    </div>
  );
};
