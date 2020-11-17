import React from "react";
import { addDecorator } from "@storybook/react";
import ProviderWrapper from "../src/providers/ProviderWrapper";
import "../src/styles/styles.scss";

addDecorator((story) => <ProviderWrapper>{story()}</ProviderWrapper>);

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
};
