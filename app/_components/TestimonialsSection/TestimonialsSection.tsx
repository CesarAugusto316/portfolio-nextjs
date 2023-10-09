import { FC } from 'react';
import joseImg from '@/assets/icons/jose.jpeg';
import jorgeImg from '@/assets/icons/jorge.jpeg';
import styles from './testimonialsSection.module.scss';
import Image from 'next/image';


const testimonials = [
  {
    id: 1,
    author: 'José Zúñiga Henríquez',
    company: '👽 𝗟𝗮𝗿𝗻𝗨 𝗔𝗽𝗽 - Aprende inglés conversando',
    description: 'Cesar helps us create our products quickly, which is not easy to come by. Releasing a new feature can be a challenge, but when you need fewer iterations to reach your goal, it makes a huge difference!',
    image: joseImg
  },
  {
    id: 2,
    author: 'Jorge Alonso',
    company: '👽 𝗟𝗮𝗿𝗻𝗨 𝗔𝗽𝗽 - Aprende inglés conversando',
    description: 'At Quizify and LarnU, César consistently met tight deadlines while delivering polished UI implementations that precisely matched specifications and delighted users.',
    image: jorgeImg
  }
];


export const TestimonialsSection: FC = () => {
  return (
    <div id="testimonials" className={styles.container}>

      <div className={styles.main}>
        <div>
          <h2 style={{ marginBottom: '0.6rem' }}>Some people who trust me</h2>
          <h3>People I&apos;ve worked with have said some nice things...</h3>
        </div>

        <div className={styles.testimonialsContainer}>
          {testimonials.map(testimonial => (
            <div className={styles.testimonialCard} key={testimonial.id}>
              <Image className={styles.avatar} src={testimonial.image} alt={testimonial.author} />

              <p>&quot;{testimonial.description}&quot;</p>

              <div className={styles.info}>
                <h4>{testimonial.author}</h4>
                <h5>{testimonial.company}</h5>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
