import { FC } from 'react';
import styles from './contactSection.module.scss';


export const ContactsSection: FC = () => {
  return (
    <div id="contacts" className={styles.container}>

      <div className={styles.main}>
        <h2>Contacts</h2>
      </div>
    </div>
  );
};
