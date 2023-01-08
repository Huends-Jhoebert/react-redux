const isLoginReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
      return !state;
    default:
      return false;
  }
};

export default isLoginReducer;
