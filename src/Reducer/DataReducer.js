export const DataReducer = (state, action) => {
  switch (action.type) {
    case "NEW_STATUS":
      return {
        ...state,
        bookData: state.bookData.map((el) =>
          el.title === action.payload.title
            ? { ...el, status: action.payload.newStatus }
            : el
        )
      };
    default:
      return {
        state
      };
  }
};
