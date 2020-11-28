import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

function InputText({
    name, label, type, placeholder,
}) {
    return (
        <div className="form__field">
            {label ? (
                <label className="form__text--label" htmlFor={name}>
                    {label}
                </label>
            ) : null}
            <Field
                className="form__input--text"
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
            />
            <ErrorMessage
                name={name}
                className="form__text--error"
                component="div"
            />
        </div>
    );
}

InputText.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

export default InputText;
