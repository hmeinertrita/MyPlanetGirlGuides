export default function username(state = {}, action) {
  switch (action.type) {
    case 'USER_NAME':
      return {
        ...state,
        user_name: action.payload,
      };
    default:
      return state;
  }
}
