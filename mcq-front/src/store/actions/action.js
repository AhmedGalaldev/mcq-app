export const ADD_QUESTIONS = "ADD_QUESTIONS";
export const ADD_STUDENT = "ADD_STUDENT";

export const setQuestions = (questions) => {
  return {
    type: ADD_QUESTIONS,
    payload: questions,
  };
};

export const setStudent = (student) => {
  return {
    type: ADD_STUDENT,
    payload: student,
  };
};
