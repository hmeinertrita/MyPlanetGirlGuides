/* eslint-disable import/prefer-default-export */

// import { SET_RUNTIME_VARIABLE } from '../constants';

/*eslint-disable */

export const selectUser = name => {
  console.log('User login submitted - their name is:', name);
  return {
    type: 'USER_NAME',
    payload: name,
  };
};

/*eslint-enable */
