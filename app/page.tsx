import Image from 'next/image';
import styles from './page.module.scss';
import { FC } from 'react';


export const Home: FC = () => {
  return (
    <div className={styles.container}>
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
