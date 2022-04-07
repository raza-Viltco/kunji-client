import React from "react";

import { APP_LOGO } from "../../constants/AssetsConstants";
import "./AuthView.css";

const AuthView = ({ heading, subject, children }) => {
  return (
    <div className="col-md-12 auth_page">
      <div className="row">


        <div className="col-sm-3"></div>
        <div className="col-sm-6 text-center">

          <div className="col-sm-12  backcolor-auth mt-4">
          <div className="col-sm-12 mt-4">
          <img src={APP_LOGO} alt="logo-img" className="img-fluid mt-4" style={{width:"10%"}} />
          </div>
          <div className="col-sm-12">
            <div className="auth_form">
              {/* <h3 className="auth_form__heading">{heading}</h3>
              <p className="auth_form__subject">{subject}</p> */}
              {children}
            </div>
          </div>
          </div>
        </div>
        <div className="col-sm-3"></div>



        {/* <div className="col-lg-6 mb-2">
          <div className="col-sm-12 logo_wrapper">
            <img src={APP_LOGO} alt="logo-img" className="img-fluid logo_img" />
          </div>
        </div> */}



        {/* <div className="col-lg-6 auth_page__right">
          <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-10 offset-1">
            <div className="auth_form">
              <h3 className="auth_form__heading">{heading}</h3>
              <p className="auth_form__subject">{subject}</p>
              {children}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AuthView;
