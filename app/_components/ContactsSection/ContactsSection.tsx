'use client';
import { FC } from 'react';
import styles from './contactSection.module.scss';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';


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
        <h2>Start a conversation</h2>

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
  );
};
