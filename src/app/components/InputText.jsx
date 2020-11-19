import React from "react";
import { Field, ErrorMessage } from "formik";

function InputText({ name, label, type, placeholder }) {
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

export default InputText;
