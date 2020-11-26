import React from "react";
import InputText from "@components/InputText";
import { Formik } from "formik";

const initialValues = {
    username: "",
    password: "",
};

export default {
    title: "InputText",
    component: InputText,
    decorators: [
        (story) => <Formik initialValues={initialValues}>{story()}</Formik>,
    ],
};

export const TextBox = () => (
    <InputText
        type="text"
        name="username"
        label="Username"
        placeholder="Profile Name"
    />
);

export const Passowrd = () => (
    <InputText
        type="password"
        name="password"
        label="Password"
        placeholder="Password"
    />
);
