const isAuth = state => state.auth.token;
const getUserName = state => state.auth.user.email;

export default {isAuth, getUserName}