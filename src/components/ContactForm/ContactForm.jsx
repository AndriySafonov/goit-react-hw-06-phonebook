import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

import { addContact } from '../../redux/contsctsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectorContscts } from '../../redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');// устанавливаем начальное значение name ''
  const [number, setNumber] = useState(''); // устанавливаем начальное значение number ''
  const dispatch = useDispatch();// получаем метод dispatch из хука useDispatch
  const contacts = useSelector(selectorContscts);// получаем список контактов из стейта через селектор selectorContscts

  // функция-обработчик события изменения значения в инпуте
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':// если изменение произошло в инпуте с именем name
        setName(value);// обновляем состояние name
        break;

      case 'number':// если изменение произошло в инпуте с именем number
        setNumber(value);// обновляем состояние number
        break;

      default:
        break;
    }
  };

  // функция-обработчик события отправки формы
  const handleSubmit = event => {
    event.preventDefault();

    const includeName = contacts.find(user => user.name === name);// проверяем, есть ли контакт с таким именем в списке
    if (includeName) {// если имя уже есть в списке контактов
      alert(`${name} is already in contacs`);// выводим сообщение об этом
      return;
    }

    dispatch(// если имя отсутствует в списке контактов, то добавляем новый контакт в стейт через экшн addContact
      addContact({
        name,
        number,
      })
    );
    setName('');// обнуляем состояние name
    setNumber('');// обнуляем состояние number
  };

  // возвращаем разметку формы и элементов управления вместе со стилями
  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <label className={css.item}>
        Name
        <input
          type="text"
          className={css.input}
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={css.item}>
        Number
        <input
          placeholder="000-00-00"
          type="tel"
          name="number"
          className={css.input}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button className={css.button}>Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};