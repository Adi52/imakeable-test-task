import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
    Container, GalleryContainer, GalleryImage, GalleryScrollView, GalleryWrapper,
    MatchDetails, MenuContainer, Score,
    ScoreText,
    SemiText,
    TeamsContainer,
    TitlesContainer, TrainersContainer
} from "./MatchResultsScreen.style";
import {Header} from "./MatchResultsScreen.style";
import {BigTitle, SmallTitle} from "../../components/Text";
import theme from "../../constants/theme";
import TeamTile from "../../components/TeamTile/TeamTile";
import GradientBar from "../../components/GradientBar/GradientBar";
import Button from "../../components/Button/Button";
import {ScrollView} from "react-native-web";


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

            <TrainersContainer>

            </TrainersContainer>
            <MenuContainer>
                <Button active title={'Highlights'} onPress={() => {}} />
                <Button title={'Summary'} onPress={() => {}} />
                <Button title={'Stats'} onPress={() => {}} />
            </MenuContainer>
            <GalleryScrollView>
                <GalleryWrapper>
                    <GalleryContainer>
                        <GalleryImage source={require('../../assets/footballGallery/1.jpg')} />
                        <GalleryImage source={require('../../assets/footballGallery/2.jpg')} />
                        <GalleryImage source={require('../../assets/footballGallery/3.jpg')} />
                        <GalleryImage source={require('../../assets/footballGallery/4.jpg')} />
                        <GalleryImage source={require('../../assets/footballGallery/5.jpg')} />
                        <GalleryImage source={require('../../assets/footballGallery/6.jpg')} />
                        <GalleryImage source={require('../../assets/footballGallery/7.jpg')} />
                        <GalleryImage source={require('../../assets/footballGallery/8.jpg')} />
                        <GalleryImage source={require('../../assets/footballGallery/9.jpg')} />
                    </GalleryContainer>
                </GalleryWrapper>
            </GalleryScrollView>
        </Container>
    )
}


export const screenOptions = navData => {
    return {
        headerShown: false
    };
};

export default MatchResultScreen;
