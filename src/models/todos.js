import { queryTodos } from '../services/todos';

export default {
  namespace: 'todos',
  state: [],
  effects: {
    *fetchTodos(_, { call, put }) {
      const response = yield call(queryTodos);
      yield put({
        type: 'save',
        payload: response.data,
      });
    },
  },
  reducers: {
    delete(state, { payload: id }) {
      return state.filter(item => item._id !== id);
    },
    save(state, { payload: todos }) {
      return todos;
    },
    toggleComplete(state, { payload: id }) {
      return state.map(todo => (todo._id === id ? { ...todo, completed: !todo.completed } : todo));
    },
  },
};
