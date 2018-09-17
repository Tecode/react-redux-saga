export const todos = (state = [], action) => {
  switch (action.type) {
    /* istanbul ignore next */
    case 'ADD_TODO':
      console.log(state, '------');
      return [...state, 1];
    case 'USER_FETCH_REQUESTED':
      console.log('发起请求');
      return state;
    case 'USER_FETCH_SUCCEEDED':
      console.log(action.message, 'saga------success');
      return state;
    default:
      return state;
  }
};
