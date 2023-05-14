import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectorFilter } from '../../redux/selectors';

export function Filter() {
  const filter = useSelector(selectorFilter);// получаем текущее значение фильтра из store с помощью useSelector
  const dispatch = useDispatch();// создаем функцию для dispatch действий в store

  // Создаем функцию handleChange, которая будет вызываться при изменении значения input
  const handleChange = event => {
    const value = event.target.value;// получаем значение input
    dispatch(setFilter(value));// диспатчим действие setFilter с новым значением фильтра
  };

  return (
    <label className={css.name}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        onChange={handleChange} // привязываем функцию handleChange к событию onChange элемента input
        value={filter}// устанавливаем текущее значение фильтра в качестве значения элемента input
      />
    </label>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
};