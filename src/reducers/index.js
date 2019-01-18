const initialState = {
  number: 0
};

const incrementReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT': {
      state.number += 1
      return { ...state }
    };
    default: return state;
  }
};
export default incrementReducer;