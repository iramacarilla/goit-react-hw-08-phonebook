import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import authSelectores from "../../redux/auth/authSelectores";

const Home = ({ isAuth }) => {
  return (
    <div className="homePage">
      <p className="homeText">
        Here you can create your own phonebook. Add new contacts and keep in
        touch with your loved ones
      </p>
      {!isAuth && <Link to="/register">Sign Up</Link>}
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: authSelectores.isAuth(state),
});
export default connect(mapStateToProps)(Home);
