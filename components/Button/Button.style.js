import styled from 'styled-components/native';
import theme from '../../constants/theme';

export const FeedbackNativeWrapper = styled.View`
    height: 40px;
    border-radius: 50px;
    overflow: hidden;
`;

const RootButton = styled.View`
    height: 40px;
    align-items: center;
    justify-content: center;
    margin-bottom: ${theme.spacing.sm}px;
    padding-left: 25px;
    padding-right: 25px;
`;

const RootText = styled.Text`
    font-family: ${theme.font.semi};
    font-size: ${theme.fontSize.normal}px;
`;

export const PrimaryButton = styled(RootButton)`
    background-color:  ${props => props.active ? theme.colors.green : 'rgba(0, 0, 0, 0)'};
`;

export const PrimaryButtonText = styled(RootText)`
    color: ${props => props.active ? theme.colors.textWhite : theme.colors.textBlack};
`;
