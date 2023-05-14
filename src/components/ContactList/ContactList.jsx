import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contsctsSlice';
import { selectorContscts, selectorFilter } from '../../redux/selectors';

export function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(selectorFilter);
  const contacts = useSelector(selectorContscts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

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
