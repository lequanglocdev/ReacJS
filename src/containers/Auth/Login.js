import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";
import "../Auth/login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "lequangloc",
      password: "loc123456",
    };
  }


  hanleOnChangeInput =(event) =>{
    this.setState({
        username:event.target.value
    })
    console.log(event.target.value)
  }

  render() {

    return (
      <div className="login-background">
        <div className="login-container ">
          <div className="login-content row">
            <div className=" col-12 text-center login-lable">Login</div>
            <div className="col-12 ">
              
                <div className="form-group form-input">
                  <label>Username</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control name"
                    value={this.state.username}
                    onChange={(event) => this.hanleOnChangeInput(event)}
                  />
                </div>
                <div className="form-group form-input">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control name"
                    name="password"
                    value={this.state.password}
                    placeholder="Enter your password"
                  />
                </div>
             
            </div>
            <div className="col-12 mt-3 text-center btn">
              <button className="col-10">Log in</button>
            </div>
            <div className="col-12  text-center orSign">
              <p>Or sign in width</p>
              <div className="icon">
                <i className="fab fa-facebook "></i>
                <i className="fab fa-google-plus-g "></i>
                <i className="fab fa-twitter twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
