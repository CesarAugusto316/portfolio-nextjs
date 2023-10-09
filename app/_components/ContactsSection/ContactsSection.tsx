'use client';
import { FC } from 'react';
import styles from './contactSection.module.scss';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import contactsIcon from '@/assets/icons/contacts.png';


const contactSchemma = Yup.object({
  name: Yup.string().required(),
  message: Yup.string().required(),
  email: Yup.string().email().required()
});

const initialValues = { message: '', name: '', email: '' };


export const ContactsSection: FC = () => {
  return (
    <div id="contacts" className={styles.container}>

      <div className={styles.main}>
        <h2 style={{ marginBottom: '8rem' }}>Start a conversation</h2>

        <div style={{ display: 'flex', gap: '12rem' }}>

          <div className={styles.contactLinks}>

            <Image className={styles.contactsIcon} src={contactsIcon} alt="contacts-icon" />
            <h3>Contact me</h3>
            <ul>
              <li>
                <a href="https://github.com/CesarAugusto316" target="_blank">
                  <FontAwesomeIcon fontSize={27} icon={faGithub} />
                  <span>github.com/CesarAugusto316</span>
                </a>
              </li>
              <li>
                <a href="https://gitlab.com/CesarAugusto316" target="_blank">
                  <FontAwesomeIcon fontSize={27} icon={faGitlab} />
                  <span>gitlab.com/CesarAugusto316</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/c%C3%A9sar-rivera316/" target="_blank">
                  <FontAwesomeIcon fontSize={27} icon={faLinkedin} />
                  <span>linkedin.com/in/césar-rivera316</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/CesarAugusto316" target="_blank">
                  <FontAwesomeIcon fontSize={27} icon={faAt} />
                  <span>riveramirandac@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          <Formik
            validationSchema={contactSchemma}
            initialValues={initialValues}
            onSubmit={
              (values) => console.log(values)
            }>
            {() => (
              <Form className={styles.form}>
                <ul>
                  <li>
                    <label htmlFor="name">Your Name</label>
                    <Field name="name" id="name" />
                  </li>
                  <li>
                    <label htmlFor="email">Your Email</label>
                    <Field name="email" id="email" />
                  </li>
                  <li>
                    <label htmlFor="message">Your Message</label>
                    <Field as="textarea" name="message" id="message" />
                  </li>
                  <li>
                    <button type="submit">Send</button>
                  </li>
                </ul>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
