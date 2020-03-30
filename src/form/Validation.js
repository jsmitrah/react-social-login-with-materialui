import validator from 'validator';
import _split from 'lodash/split';
import _map from 'lodash/map';
import _endsWith from 'lodash/endsWith';
import _toString from 'lodash/toString';
import _isEmpty from 'lodash/isEmpty';
import moment from 'moment';
export const MAX_EMAIL_LENGTH = 50;
export const MAX_FULL_NAME_LENGTH = 50;

const maxLength = (value, length) => value.length > length;

const ifEmpty = value => validator.isEmpty(value);

export const isEmpty = (value = '', allVal, props) => {
    let formVal = value;
    if (value === null || _isEmpty(value)) formVal = '';
    if (ifEmpty(formVal)) return 'Required';
};

export const isName = (fullName = '', allVal, props) => {
    let value = String(fullName);
    if (ifEmpty(value)) return 'Required';
    if (maxLength(value.trim(), MAX_FULL_NAME_LENGTH)) return `The maxim length of Name can be ${MAX_EMAIL_LENGTH}`;
};

export const isEmail = (email = '', allVal, props) => {
    if (ifEmpty(email)) return 'Required';
    if (!validator.isEmail(email)) return 'Email is not valid';
    if (maxLength(email, MAX_EMAIL_LENGTH)) return `The maxim length of email can be ${MAX_EMAIL_LENGTH}`;
};

export const confirmPassword = (confirmPassword = '', allVal, props) => {
    const { password = '', newPassword = '' } = allVal;
    if (ifEmpty(confirmPassword)) return 'Required';
    if (!ifEmpty(password) && !validator.equals(confirmPassword, password))
        return 'Password does not match the confirm password';
    if (!ifEmpty(newPassword) && !validator.equals(confirmPassword, newPassword))
        return 'Password does not match the confirm password';
};

export const isHexColor = (color = '', allVal, props) => {
    if (ifEmpty(color)) return 'Required';
    if (!validator.isHexColor(color)) return 'Hexa color is not valid';
};

export const isUrl = (urls = '', allVal, props) => {
    if (ifEmpty(urls)) return 'Required';
    if (!ifEmpty(urls)) {
        let error;
        let url = _split(urls, ',');
        _map(url, data => {
            if (!validator.isURL(data.trim())) {
                error = 'This is not the valid url';
            }
        });
        return error;
    }
};
export const isUrlNotRequired = (urls = '', allVal, props) => {
    if (!ifEmpty(urls)) {
        let error;
        let url = _split(urls, ',');
        _map(url, data => {
            if (!validator.isURL(data.trim())) {
                error = 'This is not the valid url';
            }
        });
        return error;
    }
};

export const isDate = (date = '', allVal, props) => {
    if (typeof date === 'object') {
        if (!date) return 'Required';
        else if (!moment(date).isValid()) return 'Date is not valid format';
    } else if (ifEmpty(date)) {
        return 'Required';
    }
};

export const isFileType = (value = '', allVal, props, name) => {
    let havingType = false;
    if (ifEmpty(value)) return '';
    else {
        _map(_split(name, '.'), val => {
            if (_endsWith(value, `.${val}`)) {
                havingType = true;
            }
        });
    }
    let error = !havingType ? 'Please select the mentioned file type only' : '';
    return error;
};

export const isNumeric = (number = '', allVal, props) => {
    if (ifEmpty(_toString(number))) return 'Required';
};

export const isGoogleField = (location = '', allVal, props) => {
    if (ifEmpty(_toString(location))) return props.t('validation:required');
};
export const checkEmail = (email = '', allVal, props) => {
    if (ifEmpty(email)) return;
    if (!validator.isEmail(email)) return 'Required';
};

export const multipleEmail = (emails = '', allVal, props) => {
    if (ifEmpty(emails)) return 'Required';
    if (!ifEmpty(emails)) {
        let error;
        let email = _split(emails, ',');
        _map(email, data => {
            if (!validator.isEmail(data.trim())) {
                error = 'Email is not valid';
            }
        });
        return error;
    }
};

export const checkMobile = (number = '', allVal, props) => {
    if (!ifEmpty(number)) {
        var phoneno = /^\d+$/;
        if (!number.match(phoneno)) return 'Not a valid Phone Number';
    }
};

export const US_Phone_Format = value => {
    if (!value) return '';
    else {
        const input = value.replace(/\D/g, '').substring(0, 10);

        const zip = input.substring(0, 3);
        const middle = input.substring(3, 6);
        const last = input.substring(6, 10);

        if (input.length > 6) {
            value = `-${zip}- ${middle} - ${last}`;
        } else if (input.length > 3) {
            value = `-${zip}- ${middle}`;
        } else if (input.length > 0) {
            value = `-${zip}`;
        }
        return value;
    }
};
