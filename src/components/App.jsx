import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { useSelector } from 'react-redux';
import { selectorContscts } from '../redux/selectors';

export const App = () => {
  // Получаем список контактов из состояния приложения через хук useSelector
  const contacts = useSelector(selectorContscts);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {contacts.length > 0 && <ContactList />}
      </Section>
    </>
  );
};