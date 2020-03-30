import React from 'react';
import Facebook from 'react-facebook-login/dist/facebook-login-render-props';
import useStyles from '../common/CommonUseStyles';
import { history } from "../App";

function FacebookLogin(props) {
    const classes = useStyles();
    const responseFacebook = response => {
            history.push("/home", { facebookData: response });
    };
    return (
        <div className="footerContent">
            <Facebook
                appId="179737796073264"
                // autoLoad
                callback={responseFacebook}
                render={renderProps => (
                    <>
                        <button onClick={renderProps.onClick} className={`${classes.commonBtn} facebook`}>
                                 <i className="fa fa-facebook"></i>
                            <span className={classes.socialName}> Login with Facebook</span>
                        </button>
                    </>
                )}
            />
        </div>
    );
}
export default FacebookLogin;
