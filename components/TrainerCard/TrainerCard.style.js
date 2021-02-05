import styled from 'styled-components';
import {SmallText} from "../Text";
import theme from "../../constants/theme";
import {Dimensions} from "react-native";

export const Wrapper = styled.View`
    align-items: flex-end;
`;

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TrainerImage = styled.Image`
    height: 40px;
    width: 40px;
    border-radius: 50px;
    margin-right: ${theme.spacing.xs}px;
`;

export const Description = styled.View`

`;

export const NameText = styled(SmallText)`
    font-size: ${Dimensions.get('window').width > 340 ? theme.fontSize.normal-4 : theme.fontSize.normal-6}px;
`;

export const RoleText = styled(SmallText)`
    font-size: ${Dimensions.get('window').width > 340 ? theme.fontSize.normal-4 : theme.fontSize.normal-6}px;
    font-family: ${theme.font.semi};
`;

export const RoleContainer = styled.View`
    flex-direction: row;
    align-items: center;
   
`;

export const Dot = styled.View`
    width: ${theme.spacing.xs}px;
    height: ${theme.spacing.xs}px;
    border-radius: 50px;
    background-color: ${theme.colors.magenta};
    margin-left: ${theme.spacing.xs}px;
`;

export const Bar = styled.View`
    border: 1px solid ${props => props.barColor === 'green' ? theme.colors.green : theme.colors.magenta};
    border-radius: 3px;
    align-items: center;
    justify-content: center;
    width: ${theme.spacing.xxl}px;
    margin-top: 2px;
`;

export const BarText = styled(SmallText)`
    color: ${props => props.barColor === 'green' ? theme.colors.green : theme.colors.magenta};
    font-family: ${theme.font.semi}; 
`;
