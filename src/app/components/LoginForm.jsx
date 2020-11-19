import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputText from "./InputText";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Popup from "./Popup";

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
        console.log(values);

        let config = {
            method: "get",
            url: "https://api.github.com/user",
            headers: {
                Authorization: `token ${values.password}`,
            },
        };

        axios(config)
            .then(function (response) {
                dispatch({ type: "LOGIN_USER" });
                dispatch({ type: "SAVE_USER", payload: response });
            })
            .catch(function (error) {
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
                    type="submit"
                    className="button--primary u__margin--tb u__uppercase"
                >
                    {t("Login")}
                </Button>
            </Form>
        </Formik>
    );
}

export default LoginForm;
