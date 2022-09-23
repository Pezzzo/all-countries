import { rootReduser } from './redusers/rootReduser';
import { applyMiddleware, createStore, EmptyObject } from 'redux';
import thunk from 'redux-thunk';

export const saveToLocalStorage = (state: EmptyObject) => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (error) {
    console.error(error);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const state = localStorage.getItem('state');
    return state ? JSON.parse(state) : undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const store = createStore(rootReduser, loadFromLocalStorage(), applyMiddleware(thunk));

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
