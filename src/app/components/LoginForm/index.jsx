import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputText from '@components/InputText';
import Button from '@components/Button';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Popup from '@components/Popup';
import apiCall from '@services/apiCall';
import { LOGIN_USER, SAVE_USER } from '@redux/actionTypes';

function LoginForm() {
    const { t } = useTranslation();

    const history = useHistory();

    const [loginError, setLoginError] = useState(false);

    const initialValues = {
        username: '',
        password: '',
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('* Required'),
        password: Yup.string().required('* Required'),
    });

    const dispatch = useDispatch();

    const onSubmit = (values) => {
        apiCall('GET', '/user', {
            isAuthenticated: true,
            password: values.password,
        }).then((response) => {
            dispatch({
                type: LOGIN_USER,
                payload: {
                    token: values.password,
                    username: response.data.login,
                    avatar: response.data.avatar_url,
                },
            });
            dispatch({ type: SAVE_USER, payload: response });
            history.push(`/${response.data.login}`);
        })
            .catch(() => {
                setLoginError(true);
            });
    };

    const popupClose = () => {
        setLoginError(false);
    };

    return loginError ? (
        <Popup title="Error" onClick={popupClose}>
            Invalid Token!!
        </Popup>
    ) : (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form className="form u__shadow">
                <InputText
                    aria-label="Username"
                    type="text"
                    name="username"
                    label={t('Username')}
                    placeholder={t('Profile Name')}
                />
                <InputText
                    aria-label="password"
                    type="password"
                    name="password"
                    label={t('Password')}
                    placeholder={t('Password')}
                />
                <Button
                    id="login-submit"
                    type="submit"
                    className="button--login u__margin--tb u__uppercase button__ripple"
                >
                    {t('Login')}
                </Button>
            </Form>
        </Formik>
    );
}

export default LoginForm;
