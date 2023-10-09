import { FC } from 'react';
import styles from './footer.module.scss';


export const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <p> Handcrafted by me &copy; Inc. All rights reserved.</p>
    </footer>
  );
};
