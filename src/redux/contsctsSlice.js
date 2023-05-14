import { createSlice, nanoid } from '@reduxjs/toolkit';

// Начальное состояние (state) для store
const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// Создание Redux slice (части состояния) с именем "contactsSlice"
export const contactsSlice = createSlice({
  name: 'contscts',// Уникальное имя slice
  initialState: initialState,// Начальное состояние slice
  reducers: {
    // Обработчик (reducer) для добавления нового контакта в состояние store.
    addContact: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      // Функция для подготовки данных перед вызовом reducer.
      // Генерирует уникальный идентификатор с помощью nanoid(),
      // и возвращает объект с id, name и number, который станет частью payload для addContact.
      prepare: ({ name, number }) => {
        const id = nanoid();
        return { payload: { id, name, number } };
      },
    },

    // Обработчик (reducer) для удаления контакта из состояния store.
    deleteContact: {
      reducer: (state, action) => {
        const id = action.payload;
        return state.filter(contact => contact.id !== id);
      },
    },
  },
});

// Экспортируем действия (actions), которые могут быть вызваны в других частях приложения,
// для добавления и удаления контактов. Действия генерируются автоматически на основе
// reducers, указанных в createSlice().
export const { addContact, deleteContact } = contactsSlice.actions;