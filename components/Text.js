import React from 'react';
import styled from 'styled-components/native';
import theme from "../constants/theme";
import {Dimensions} from 'react-native';

export const BigTitle = styled.Text`
    font-family: ${theme.font.bold};
    font-size: ${Dimensions.get('window').width > 340 ? theme.fontSize.big : theme.fontSize.normal}px;
    color: ${theme.colors.textWhite};
`;

export const SmallTitle = styled(BigTitle)`
    font-size: ${theme.fontSize.small}px;
    text-transform: uppercase;
`

export const SmallText = styled.Text`
    font-family: ${theme.font.regular};
    font-size: ${theme.fontSize.small}px;
    color: ${theme.colors.textBlack};
`
