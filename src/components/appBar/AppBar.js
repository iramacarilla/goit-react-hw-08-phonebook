import React from "react";
import authSelectores from "../../redux/auth/authSelectores";
import Navigation from "../navigation/Navigation";
import UserMenu from "../userMenu/UserMenu";
import { connect } from "react-redux";

const AppBar = ({ isAuth }) => {
  return (
    <div className="appBar">
      <Navigation />
      {isAuth && <UserMenu />}
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: authSelectores.isAuth(state),
});

export default connect(mapStateToProps)(AppBar);
