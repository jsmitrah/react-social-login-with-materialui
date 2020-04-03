import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Notification = props => {
  const [open, setOpen] = useState(false);
  const Alert = props => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      className="snackBarBtm"
      onClose={handleClose}
    >
      <Alert severity={props.commonData[0].type} onClose={handleClose}>
        {props.commonData[0].msg}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
