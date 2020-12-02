import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LANG_EN, LANG_HI } from '@redux/actionTypes';
import { EN } from '@constants/variables';

function SwitchButton() {
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const lang = useSelector((state) => state.ui.lang);

    useEffect(() => {
        if (lang === EN) setChecked(false);
        else setChecked(true);
    }, []);

    const changeLang = () => {
        if (checked) {
            dispatch({
                type: LANG_EN,
            });
        } else {
            dispatch({
                type: LANG_HI,
            });
        }
        setChecked(!checked);
    };

    return (
        <div className="switch__container">
            <span className="switch__lang">EN</span>
            <label htmlFor="mySwitch" className="switch">
                <input className="switch__holder" id="mySwitch" type="checkbox" onChange={changeLang} checked={checked} />
                <span className="slider round" />
            </label>
            <span className="switch__lang">HI</span>
        </div>
    );
}

export default SwitchButton;
