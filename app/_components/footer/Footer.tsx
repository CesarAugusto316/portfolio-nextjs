import { FC } from 'react';
import styles from './footer.module.scss';


export const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <p> Handcrafted by me &copy; 2023. All rights reserved.</p>
    </footer>
  );
};
