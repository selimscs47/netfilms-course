// redux/store.js
import { createStore } from 'redux';

const initialState = {
  currentPage: 0,
};

const rootReducer = (state = initialState, action) => {
  // State yönetimi için gerekli reducer'ları burada oluşturabilirsiniz.
  return state;
};

const store = createStore(rootReducer);

export default store;
