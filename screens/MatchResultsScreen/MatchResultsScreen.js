import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
    ArrowBack,
    Container, FeedbackNativeWrapper, GalleryContainer, GalleryImage, GalleryScrollView, GalleryWrapper,
    MatchDetails, MenuContainer, Score,
    ScoreText, ScrollViewWrapper,
    SemiText,
    TeamsContainer,
    TitlesContainer, TrainersContainer, Wrapper
} from "./MatchResultsScreen.style";
import {Header} from "./MatchResultsScreen.style";
import {BigTitle, SmallTitle} from "../../components/Text";
import theme from "../../constants/theme";
import TeamTile from "../../components/TeamTile/TeamTile";
import GradientBar from "../../components/GradientBar/GradientBar";
import Button from "../../components/Button/Button";
import TrainerCard from "../../components/TrainerCard/TrainerCard";
import { Ionicons } from '@expo/vector-icons';
import {TouchableNativeFeedback} from 'react-native';


const MatchResultScreen = ({navigation}) => {
    return (
        <Wrapper>
            <ScrollViewWrapper>
                <Container>
                    <Header>
                        <LinearGradient
                            colors={[theme.colors.greenGradientFrom, theme.colors.greenGradientTo]}
                            start={[0, -0.1]}
                            style={{height: '100%'}}
                        >
                            <FeedbackNativeWrapper>
                                <TouchableNativeFeedback onPress={() => navigation.goBack()}>
                                    <ArrowBack>
                                        <Ionicons name="chevron-back" size={24} color={theme.colors.textWhite} />
                                    </ArrowBack>
                                </TouchableNativeFeedback>
                            </FeedbackNativeWrapper>
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
                        <TrainerCard
                            imageSrc={require('../../assets/footballGallery/trainer1.jpg')}
                            name={'Chris Mathew'}
                            role={'Captain'}
                            barText={'Fit'}
                            barColor={'green'}
                        />
                        <TrainerCard
                            imageSrc={require('../../assets/footballGallery/trainer2.jpg')}
                            name={'Boris Gorero'}
                            role={'Captain'}
                            barText={'Injuried'}
                            barColor={'magenta'}
                        />
                    </TrainersContainer>
                    <MenuContainer>
                        <Button active title={'Highlights'} onPress={() => {}} />
                        <Button title={'Summary'} onPress={() => {}} />
                        <Button title={'Stats'} onPress={() => {}} />
                    </MenuContainer>

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

                </Container>
            </ScrollViewWrapper>
        </Wrapper>
    )
}


export const screenOptions = navData => {
    return {
        headerShown: false,
    };
};

export default MatchResultScreen;
