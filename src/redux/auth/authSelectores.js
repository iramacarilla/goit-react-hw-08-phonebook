

const isAuth = state => state.auth.token;
const getUserName = state => state.auth.email;

export default {isAuth, getUserName}