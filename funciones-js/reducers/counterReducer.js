const counter = {
  value: 0
};

export const counterReducer = action => {
  switch (action.type) {
    case "ADD":
      return {
        value: counter.value + 1
      };

    default:
      return counter;
  }
};
