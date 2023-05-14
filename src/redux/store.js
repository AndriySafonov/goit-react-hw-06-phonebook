import { configureStore } from '@reduxjs/toolkit'; // Создание Redux store
import { combineReducers } from 'redux'; // Комбинирование редьюсеров
import { persistStore, persistReducer } from 'redux-persist'; // Сохранение состояния между сессиями
import storage from 'redux-persist/lib/storage'; // Хранилище для сохранения состояния
import { contactsSlice } from './contsctsSlice'; // Срез контактов
import { filterSlice } from './filterSlice'; // Срез фильтра

// Конфигурация Redux Persist
const persistConfig = {
  key: 'root',// Ключ для доступа к сохраненному состоянию
  storage,// Хранилище для сохранения состояния
};

// Комбинирование нескольких редьюсеров в один
const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,// Редьюсер контактов
  filter: filterSlice.reducer,// Редьюсер фильтра
});

// Создаем персистентный редьюсер для сохранения состояния между сессиями
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Создаем магазин Redux с помощью настроенного персистентного редьюсера
export const store = configureStore({
  reducer: persistedReducer,
});

// Создаем персистор для сохранения состояния между сессиями
export const persistor = persistStore(store);