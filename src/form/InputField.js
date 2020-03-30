import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';
import HelpOutline from '@material-ui/icons/HelpOutline';
import _uniqueId from 'lodash/uniqueId';
import _noop from 'lodash/noop';

const propTypes = {
    meta: PropTypes.object.isRequired,
    input: PropTypes.object.isRequired
};

function InputField({
    meta: { touched, error, warning },
    input: { ...inputProps },
    required,
    classes,
    helperText,
    endText,
    startText,
    tooltipText = '',
    showCount,
    value,
    placeholder,
    showLabel = true,
    ...props
}) {
    let autoComplete = props.type === 'password' ? 'new-password' : 'off';
    let uniqueId = props.id || _uniqueId('InputField');

    return (
        <Fragment>
            <form noValidate autoComplete="off">
                <TextField
                    id={uniqueId}
                    // InputLabelProps={{ shrink: true }}
                    helperText={touched && error ? error : helperText}
                    error={!!(touched && error)}
                    autoComplete={autoComplete}
                    InputProps={{
                        startAdornment: startText && <InputAdornment position="start">{startText}</InputAdornment>,
                        endAdornment: endText && <InputAdornment position="end">{endText}</InputAdornment>
                    }}
                    onInput={
                        props.maxLength
                            ? e => (e.target.value = e.target.value.toString().slice(0, props.maxLength))
                            : _noop()
                    }
                    {...inputProps}
                    {...props}
                    value={inputProps.value}
                    label={
                        showLabel && (
                            <Fragment>
                                <span className={tooltipText && 'bottom-10'}>{props.label}</span>
                                {required && <span className="align-top"> *</span>}
                                {tooltipText ? (
                                    <Tooltip
                                        id={uniqueId}
                                        title={<div dangerouslySetInnerHTML={{ __html: tooltipText }} />}
                                    >
                                        <HelpOutline className="bottom-5 ml-2" color="action" />
                                    </Tooltip>
                                ) : null}
                            </Fragment>
                        )
                    }
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    placeholder={placeholder}
                />
                {showCount ? (
                    <Typography variant="caption">
                        {props.maxLength - inputProps.value.length} characters remaining.
                    </Typography>
                ) : null}
            </form>
        </Fragment>
    );
}

InputField.propTypes = propTypes;

export default InputField;
