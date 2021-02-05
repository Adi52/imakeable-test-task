import React from 'react';
import styled from 'styled-components';
import theme from "../../constants/theme";
import {SmallText} from "../Text";

export const Container = styled.View`
    justify-content: space-between;
    align-items: center;
    height: 135px;
    border-radius: ${theme.spacing.xs}px;
    background-color: ${theme.colors.background};
    width: 35%;
    padding-top: ${theme.spacing.xs}px;

`;

export const Description = styled(SmallText)`
    width: 80%;
    text-align: center;

`;
