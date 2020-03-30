import React from "react";
import Google from "react-google-login";
import useStyles from "../common/CommonUseStyles";
import { history } from "../App";

function GoogleLogin(props) {
  const classes = useStyles();
  const responseGoogle = response => {
    history.push("/home", { googleData: response.profileObj });
  };
  return (
    <div className="footerContent">
      <Google
        clientId="772007161902-amdhd49pmqecbjqbvn8o5l215nla05vr.apps.googleusercontent.com"
        buttonText="Signin with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        className="googleClr"
        render={renderProps => (
          <>
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className={`${classes.commonBtn} google`}
            >
              <i className="fa fa-google"></i>
              <span className={`${classes.socialName} googleContent`}>
                {" "}
                Login with Google
              </span>
            </button>
          </>
        )}
      />
    </div>
  );
}
export default GoogleLogin;
