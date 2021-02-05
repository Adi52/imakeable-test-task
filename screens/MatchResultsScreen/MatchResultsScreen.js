import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
    Container,
    MatchDetails, Score,
    ScoreText,
    SemiText,
    TeamsContainer,
    TitlesContainer
} from "./MatchResultsScreen.style";
import {Header} from "./MatchResultsScreen.style";
import {BigTitle, SmallTitle} from "../../components/Text";
import theme from "../../constants/theme";
import TeamTile from "../../components/TeamTile/TeamTile";
import GradientBar from "../../components/GradientBar/GradientBar";


const MatchResultScreen = () => {
    return (
        <Container>
            <Header>
                <LinearGradient
                    colors={[theme.colors.greenGradientFrom, theme.colors.greenGradientTo]}
                    start={[0, -0.1]}
                    style={{height: '100%'}}
                >
                    <TitlesContainer>
                        <SmallTitle>Tuesday night fc</SmallTitle>
                        <BigTitle>Match Results</BigTitle>
                    </TitlesContainer>
                </LinearGradient>

            </Header>
            <TeamsContainer>
                <TeamTile
                    title={'Tuesday Night Football'}
                    name={'Team A'}
                    color={'green'}
                />

                <MatchDetails>
                    <ScoreText>30/4</ScoreText>
                    <Score>
                        <GradientBar variant={'magenta'} text={'0:3'} />
                    </Score>
                    <SemiText>Full time</SemiText>
                </MatchDetails>

                <TeamTile
                    title={'Geek Monkeys Football'}
                    name={'Team B'}
                    color={'magenta'}
                />
            </TeamsContainer>
        </Container>
    )
}


export const screenOptions = navData => {
    return {
        headerShown: false
    };
};

export default MatchResultScreen;
