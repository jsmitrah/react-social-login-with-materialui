import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  imageContainer: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      width: "70% !important",
      backgroundColor: "beige !important",
      height: "657px !important",
      display: "inline !important"
    }
  },
  formContainer: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30% !important",
      backgroundColor: "white !important",
      height: "657px !important"
    }
  }
}));
const Container = WrappedComponent => {
  function Layout(props) {
    const classes = useStyles();
    return (
      <div>
        <div className="d-flex">
          <div className={classes.imageContainer}>
            <img
              alt="no logo"
              src={
                props.match.path === "/signUp"
                  ? "https://1.bp.blogspot.com/-pSbhr5Y8iSQ/UuSCSRzI1yI/AAAAAAAAHg4/8y0jcLsUUog/s1600/0_9b0ab_3cbad71e_orig.jpg"
                  : props.match.path === "/forgotpwd"
                  ? "https://wallpapercave.com/wp/wp2767312.jpg"
                  : "https://img2.goodfon.com/wallpaper/big/c/45/ryzhiy-kot-kokteyl-apelsin.jpg"
              }
              style={{
                width: "100%",
                height: "657px"
              }}
            />
          </div>
          <div className={classes.formContainer}>
            <WrappedComponent {...props} />
          </div>
        </div>
      </div>
    );
  }
  return Layout;
};

export default Container;
