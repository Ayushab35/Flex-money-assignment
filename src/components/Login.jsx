import React from 'react';
import '../styles/login.css';

export const Login = () => {
  return (
    <div className='outter-login'>
      <div className="login">
        <div className="container-login b-container" id="b-container">
          <form className="form" id="b-form" method="" action="">
            <h2 className="form_title title">Sign in to Website</h2>
            <div className="form__icons">
              <i className="bx bxl-facebook-circle"></i>
              <i className="bx bxl-instagram-alt"></i>
              <i className="bx bxl-twitter"></i>
            </div>
            <span className="form__span">or use your email account</span>
            <input className="form__input" type="email" placeholder="Email" />
            <input className="form__input" type="password" placeholder="Password" />
            <a className="form__link">Forgot your password?</a>
            <button className="form__button button submit">SIGN IN</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
