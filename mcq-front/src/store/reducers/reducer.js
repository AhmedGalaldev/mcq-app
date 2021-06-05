import { ADD_QUESTIONS, ADD_STUDENT } from "../actions/action";
const initialState = {
  questions: [],
  student: null,
};

const reducer = (state = initialState, action) => {
  //   let questions = [...state.questions];
  switch (action.type) {
    case ADD_QUESTIONS:
      return {
        ...state,
        questions: [...action.payload],
      };
    case ADD_STUDENT:
      return {
        ...state,
        student: { ...action.payload },
      };
    default:
      return state;
  }
};

export default reducer;
