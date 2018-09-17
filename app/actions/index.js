export const addTodo = text => ({
  type: 'ADD_TODO',
  text,
});

export const getUser = () => ({
  type: 'USER_FETCH_REQUESTED',
});
