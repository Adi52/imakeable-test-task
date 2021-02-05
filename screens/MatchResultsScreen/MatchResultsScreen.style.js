import styled from 'styled-components/native';
import theme from '../../constants/theme';
import {BigTitle, SmallText} from "../../components/Text";
import {Dimensions} from 'react-native';

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

export const FeedbackNativeWrapper = styled.View`
    position: absolute;
    left: 8%;
    top: 10%;
    border-radius: 50px;
    overflow: hidden;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
`;

export const ArrowBack = styled.View`
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
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

export const TrainersContainer = styled.View`
    width: 80%;
    flex-direction: row;
    justify-content: space-between;
    transform: translateY(-30px);
`;

export const MenuContainer = styled.View`
    flex-direction: row;
    width: 90%;
    margin-bottom: ${theme.spacing.sm}px;
`;

export const GalleryScrollView = styled.ScrollView`
    width: 100%;
`

export const GalleryWrapper = styled.View`
    width: 100%;
    align-items: center;
`;

export const GalleryContainer = styled.View`
    width: 90%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;


export const GalleryImage = styled.Image`
    border-radius: ${theme.spacing.xs/2}px;
    width: ${Dimensions.get('window').width * 0.28}px;
    height: ${Dimensions.get('window').width * 0.28}px;
    margin-bottom: ${theme.spacing.xs}px;
`;
