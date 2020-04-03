import React from "react";
import { compose } from "recompose";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Field, reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import InputField from "../form/InputField";
import CheckBox from "../form/CheckBox";
import Container from "../Container";
import { history } from "../App";
import { isEmail, isEmpty } from "../form/Validation";
import Notification from "../form/Notification";
import useStyles from "../common/CommonUseStyles";
import FaceBookLogin from "../socialNetworks/FacebookLogin";
import GoogleLogin from "../socialNetworks/GoogleLogin";
import LinkedInLogin from "../socialNetworks/LinkedInLogin";
function SignIn(props) {
  const [commonData, setCommonData] = React.useState([]);

  const onSignUp = () => {
    history.push("/signUp");
  };
  const onPassword = () => {
    history.push("/forgotpwd");
  };
  const onSubmmit = formProps => {
    if (
      formProps.email === "admin@gmail.com" &&
      formProps.password === "admin"
    ) {
      history.push("/home", { emailLogin: formProps.email });
    } else {
      var commonData = [
        { type: "error", msg: "Incorrect username or password", open: true }
      ];
      setCommonData(commonData);
    }
  };
  const classes = useStyles();
  return (
    <div>
      <div className="commonSpace">
        <div className="flex-center">
          <div className="avatarBtn flex-center">
            <LockOutlinedIcon />
          </div>
        </div>
        <div className="headerAlign">
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
        </div>
        <div>
          <div className="col-md-4 leftSpace">
            <Field
              required
              name="email"
              component={InputField}
              label="Email Address"
              validate={isEmail}
            />
          </div>
          <div className="col-md-4 leftSpace">
            <Field
              name="password"
              type="password"
              component={InputField}
              label="Password"
              required
              validate={isEmpty}
            />
          </div>
        </div>

        <Field name="remainder" component={CheckBox} label={"Remember me"} />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="signInSpace"
          onClick={props.handleSubmit(onSubmmit)}
        >
          Sign In
        </Button>

        <Grid container className="miniSpace">
          <Grid item xs onClick={onPassword} className="cursorPointer">
            Forgot password?
          </Grid>
          <Grid item onClick={onSignUp} className="cursorPointer">
            {"Don't have an account? Sign Up"}
          </Grid>
        </Grid>

        <div className="text-center signInSpace">
          <span className="socialSpace">Or signIn using</span>
          <div className="divTop"></div>
        </div>
        <div className={classes.socialCover}>
          <FaceBookLogin />
          <GoogleLogin />
          <LinkedInLogin />
        </div>
      </div>
      {commonData.length ? <Notification commonData={commonData} /> : ""}
    </div>
  );
}
const enhance = compose(
  Container,
  reduxForm({ form: "signIn" })
);

export default enhance(SignIn);
