import React from "react";
import axios from "axios";
import { LinkedIn } from "react-linkedin-login-oauth2";
import useStyles from "../common/CommonUseStyles";
import { history } from "../App";

function LinkedInLogin() {
  const classes = useStyles();
  const handleSuccess = data => {
    axios
      .post("http://localhost:3003/getList", {
        grant_type: "authorization_code",
        code: data.code,
        redirect_uri: "https://localhost:3000/auth/linkedin/callback",
        client_id: "81x6qs4gsfa91h",
        client_secret: "Zo9dQxkEQE4SMkrI"
      })
      .then(value => {
        localStorage.setItem("LinkedInData", JSON.stringify(value.data));
        let localLinkedInData = localStorage.getItem("LinkedInData");
        history.push("/home", {
          linkedInData: JSON.parse(localLinkedInData)
        });
      })
      //   response.profileObj
      .catch(error => {});
  };

  const handleFailure = error => {};
  return (
    <div className="footerContent">
      <LinkedIn
        scope="r_emailaddress,r_liteprofile,w_member_social"
        clientId="81x6qs4gsfa91h"
        onFailure={handleFailure}
        onSuccess={handleSuccess}
        redirectUri="http://localhost:3000/linkedin"
        renderElement={({ onClick }) => (
          <>
            <button
              onClick={onClick}
              className={`${classes.commonBtn} linkedIn`}
            >
              <i className="fa fa-linkedin"></i>
              <span className={classes.socialName}> Login with LinkedIn</span>
            </button>
          </>
        )}
      />
    </div>
  );
}
export default LinkedInLogin;
