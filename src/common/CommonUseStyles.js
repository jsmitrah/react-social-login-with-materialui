import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  commonBtn: {
    width: "45px",
    height: "45px",
    borderRadius: "25px",
    border: "none !important",

    [theme.breakpoints.up("sm")]: {
      height: "40px !important",
      width: "230px !important",
      border: "none !important",
      color: "white !important",
      fontSize: "14px !important",
      borderRadius: "20px !important",
      cursor: "pointer !important"
    }
  },
  socialName: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "inline !important"
    }
  },

  googleImg: {
    height: "26px",
    width: "26px",
    marginBottom: "4px",
    marginLeft: "3px",
    borderRadius: "12px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "30px !important"
    }
  },

  socialCover: {
    display: "flex",
    justifyContent: "center",
    margin: "10px 10px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "30px !important",
      display: "flex  !important",
      flexDirection: "column  !important",
      alignItems: "center  !important",
      fontSize: "15px !important"
    }
  }
}));

export default useStyles;
