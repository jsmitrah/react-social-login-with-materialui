import React from 'react';
import { compose } from 'recompose';
import { Field, reduxForm } from 'redux-form';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { Link } from 'react-router-dom';

import Container from '../Container';
import InputField from '../form/InputField';
import { isEmail } from '../form/Validation';

function ForgotPwd(props) {
    const sendMail = formProps => {};
    return (
        <>
            <div className="pwdContainer">
                <div className="headerAlign paddingSpc">
                    <div className="flex-center">
                        <div className="avatarBtn flex-center forgotBtn">
                            <MoodBadIcon />
                        </div>
                    </div>
                    <Typography component="h1" variant="h5" className="forgotPwd">
                        Forgot Password?
                    </Typography>
                </div>
                <div className="headerAlign">
                    <Typography variant="h5" className="forgotPwdContent">
                        Enter your email address and we will send you a link to reset your password
                    </Typography>
                </div>
                <div className="col-md-4 leftSpace commonSpace">
                    <Field
                        required
                        name="email"
                        component={InputField}
                        label="Email Address"
                        placeholder="Enter Email Address"
                        validate={isEmail}
                        InputProps={{ startAdornment: <EmailIcon /> }}
                    />
                </div>
                <div className="flex-center">
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="forgotBtn"
                        onClick={props.handleSubmit(sendMail)}
                    >
                        Send
                    </Button>
                </div>
                <div className="footerTxt">
                    <Link to={'./'} className="textDecoration">
                        {' '}
                        Back to Login
                    </Link>
                </div>
            </div>
        </>
    );
}

const enhance = compose(
    Container,
    reduxForm({ form: 'forgotPwd' })
);

export default enhance(ForgotPwd);
