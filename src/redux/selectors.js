// получаем объект state из хранилища Redux и возвращаем свойство contacts, содержащее массив контактов.
export const selectorContscts = state => state.contacts;
// получаем объект state из хранилища Redux и возвращаем свойство filter, содержащее значение фильтра для поиска контактов.
export const selectorFilter = state => state.filter;