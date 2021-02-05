import styled from 'styled-components/native';
import theme from '../../constants/theme';
import {BigTitle, SmallText} from "../../components/Text";

export const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`;

export const Header = styled.View`
    width: 100%;
    height: 20%;
    background-color: ${theme.colors.green};

`;

export const TitlesContainer = styled.View`
    margin-top: ${theme.spacing.xs}px;
    align-items: center;
    justify-content: center;
`;

export const TeamsContainer = styled.View`
    transform: translateY(-67.5px);
    flex-direction: row;
    justify-content: space-between;
    width: 80%;

`;

export const MatchDetails = styled.View`
    justify-content: center;
    align-items: center;
    width: 20%;
    transform: translateY(-5px);
`;

export const SemiText = styled(SmallText)`
    font-family: ${theme.font.semi};
`

export const ScoreText = styled(BigTitle)`
    font-size: ${theme.fontSize.normal}px;
`

export const Score = styled.View`
    margin-top: ${theme.spacing.xs}px;
    margin-bottom: ${theme.spacing.xs}px;
    width: 100%;
`;


