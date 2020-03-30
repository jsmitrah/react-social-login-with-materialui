import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import InputField from '../form/InputField';
import { compose } from 'recompose';
import Container from '../Container';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { isEmail, isEmpty } from '../form/Validation';

function SignUp(props) {
    const signIn = formProps => {};
    return (
        <>
            <div className="signInback">
                <div className="flex-center">
                    <div className="avatarBtn flex-center">
                        <PersonAddIcon />
                    </div>
                </div>
                <div className="headerAlign">
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                </div>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Field required name="fName" component={InputField} label="First Name" validate={isEmpty} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field required name="lName" component={InputField} label="LastName" validate={isEmpty} />
                        </Grid>
                        <Grid item xs={12}>
                            <Field required name="email" component={InputField} label="Email" validate={isEmail} />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                required
                                name="pwd"
                                component={InputField}
                                label="Password"
                                type="password"
                                validate={isEmpty}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                required
                                name="fPwd"
                                component={InputField}
                                label="Confirm Password"
                                type="password"
                                validate={isEmpty}
                            />
                        </Grid>
                    </Grid>

                    <div className="flex-center">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="bg"
                            onClick={props.handleSubmit(signIn)}
                        >
                            Sign Up
                        </Button>
                    </div>

                    <div className="signUpFooter">
                        <Link to={'./'} className="sginInfromUp">
                            {' '}
                            If you have an account already? Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
const enhance = compose(
    Container,
    reduxForm({ form: 'signUP' })
);

export default enhance(SignUp);
