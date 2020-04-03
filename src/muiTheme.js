import { createMuiTheme } from "@material-ui/core/styles";

let theme = createMuiTheme();

theme.overrides = {
  MuiOutlinedInput: {
    notchedOutline: {
      border: "1px solid black",
      borderRadius: "28px"
    },
    root: {
      borderRadius: "25px"
    }
  },
  MuiButton: {
    root: {
      width: "max-content"
    }
  },
  MuiAppBar: {
    colorPrimary: {
      backgroundColor: "blueviolet"
    },
    root: {
      minWidth: "100%"
    }
  },
  muiPaper: {
    root: {
      marginTop: "65px"
    }
  },
  MuiSnackbar: {
    root: {
      bottom: "0px"
    },
    anchorOriginBottomCenter: {
      bottom: "0px"
    }
  },
  MuiDrawer: {
    paper: {
      top: "64px"
    }
  },
  MuiFormControlLabel: {
    root: {
      marginLeft: 0
    }
  },
  MuiFormLabel: {
    root: {
      color: "black"
    }
  }
};

export default theme;
