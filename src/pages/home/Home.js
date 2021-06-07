import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import authSelectores from "../../redux/auth/authSelectores";

const Home = ({ isAuth }) => {
  return (
    <div className="homePage">
      <p className="homeText">
        Here you can create your own phonebook. Add new contacts and be in touch
        with your keep in touch with your loved ones
        {!isAuth && <Link to="/register">sing up</Link>}
      </p>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: authSelectores.isAuth(state),
});
export default connect(mapStateToProps)(Home);
