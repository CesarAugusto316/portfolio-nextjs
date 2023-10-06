import { FC } from 'react';
import styles from './navBar.module.scss';


export const NavBar: FC = () => {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>
    </nav>
  );
};
