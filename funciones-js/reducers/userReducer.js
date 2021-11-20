const user = {
  name: "",
  age: 25
};

export const userReducer = action => {
  switch (action.type) {
    case "UPDATE":
      return {
        ...user,
        name: action.payload.name,
        age: action.payload.age
      };

    case "CREATE":
      return {
        name: "Crear"
      };

    case "DELETE":
      return {
        name: "Borrar"
      };

    default:
      return user;
  }
};
