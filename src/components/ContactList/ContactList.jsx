import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contsctsSlice';
import { selectorContscts, selectorFilter } from '../../redux/selectors';

// Создаем компонент ContactList
export function ContactList() {
  // Получаем доступ к хранилищу Redux, используя хуки useDispatch и useSelector.
  const dispatch = useDispatch();
  const filter = useSelector(selectorFilter);
  const contacts = useSelector(selectorContscts);

  // Создаем функцию handleDeleteContact, которая удаляет контакт из хранилища.
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  // Фильтруем список контактов на основе значения фильтра, используя метод filter.
  const filterContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

   // Отображаем список контактов в виде списка элементов с кнопкой для удаления каждого контакта.
  return (
    <ul className={css.list}>
      {filterContacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p>
            {name}:{number}
          </p>
          <button
            className={css.button}
            type="button"
            onClick={() => handleDeleteContact(id)}
            value="delete"
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
