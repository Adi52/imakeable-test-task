import styled from 'styled-components/native';
import theme from '../../constants/theme';
import {Dimensions} from 'react-native';

export const FeedbackNativeWrapper = styled.View`
    height: ${Dimensions.get('window').width > 340 ? 35 : 25}px;
    border-radius: 50px;
    overflow: hidden;
    margin-right: 3px;
`;

const RootButton = styled.View`
    height: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: ${theme.spacing.sm}px;
    padding-left: ${Dimensions.get('window').width > 340 ? 10 : 6}px;
    padding-right: ${Dimensions.get('window').width > 340 ? 10 : 6}px;
`;

const RootText = styled.Text`
    font-family: ${theme.font.semi};
    font-size: ${Dimensions.get('window').width > 340 ? theme.fontSize.normal-3 : theme.fontSize.small}px;
`;

export const PrimaryButton = styled(RootButton)`
    background-color:  ${props => props.active ? theme.colors.green : 'rgba(0, 0, 0, 0)'};
`;

export const PrimaryButtonText = styled(RootText)`
    color: ${props => props.active ? theme.colors.textWhite : theme.colors.textBlack};
`;
