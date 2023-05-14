import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({// Создаем slice с именем "filter"
  name: 'filter',
  initialState: '', // Изначальное состояние slice
  reducers: {// Описываем reducers - функции, которые изменяют состояние slice
    setFilter: (state, action) => {
      return action.payload;
    },
  },
});

// Экспортируем setFilter функцию, чтобы другие части приложения могли использовать этот action creator
export const { setFilter } = filterSlice.actions;