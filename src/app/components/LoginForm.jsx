import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputText from "@components/InputText";
import Button from "@components/Button";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import Popup from "@components/Popup";
import GET from "@services/apiCall";

function LoginForm() {
    const { t } = useTranslation();

    const [loginError, setLoginError] = useState(false);

    const initialValues = {
        username: "",
        password: "",
    };

    const validationSchema = Yup.object({
        username: Yup.string().required("* Required"),
        password: Yup.string().required("* Required"),
    });

    const dispatch = useDispatch();

    const onSubmit = (values) => {
        const apiValue = GET("/user", {
            isAuthenticated: true,
            password: values.password,
        });

        apiValue
            .then((response) => {
                dispatch({ type: "LOGIN_USER", payload: values });
                dispatch({ type: "SAVE_USER", payload: response });
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
                setLoginError(true);
            });
    };

    const popupClose = () => {
        setLoginError(false);
    };

    return loginError ? (
        <Popup title="Error" message="Invalid Token!!" onClick={popupClose} />
    ) : (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form className={"form u__shadow"}>
                <InputText
                    type="text"
                    name="username"
                    label={t("Username")}
                    placeholder={t("Profile Name")}
                />
                <InputText
                    type="password"
                    name="password"
                    label={t("Password")}
                    placeholder={t("Token")}
                />
                <Button
                    id="login-submit"
                    type="submit"
                    className="button--primary u__margin--tb u__uppercase button__ripple"
                >
                    {t("Login")}
                </Button>
            </Form>
        </Formik>
    );
}

export default LoginForm;
