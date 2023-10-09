import { FC } from 'react';
import styles from './navBar.module.scss';
import { faCode, faHandHoldingHeart, faHouse, faMoon, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const NavBar: FC = () => {
  return (
    <nav className={styles.navBar}>

      <button>CR</button>

      <ul>
        <li>
          <a href="#home">
            <FontAwesomeIcon height={18} icon={faHouse} />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#projects">
            <FontAwesomeIcon height={18} icon={faCode} />
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a href="#testimonials">
            <FontAwesomeIcon height={18} icon={faHandHoldingHeart} />
            <span>Testimonials</span>
          </a>
        </li>
        <li>
          <a href="#contacts">
            <FontAwesomeIcon height={18} icon={faPaperPlane} />
            <span>Contacts</span>
          </a>
        </li>
      </ul>

      <button>
        <FontAwesomeIcon fontSize={25} height={25} width={25} icon={faMoon} />
      </button>
    </nav>
  );
};
