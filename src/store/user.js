
const initialState = () => {
  return []
}


const userReducer = (state = initialState(), action) => {
  switch (action.type) {
    case "CONNECT_USER":
      return {
        email: action.user.data.email,
        uid: action.user.data.id,
        roles: action.user.data.roles,
        isLoggedIn: true
      };

    default:
      return state;
  }

};

export default userReducer;

