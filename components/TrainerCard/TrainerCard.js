import React from 'react';
import {
    Bar, BarText,
    Container,
    Description,
    Dot,
    NameText,
    RoleContainer,
    RoleText,
    TrainerImage,
    Wrapper
} from "./TrainerCard.style";




const TrainerCard = ({imageSrc, name, role, barText, barColor}) => {

    return (
        <Wrapper>
            <Container>
                <TrainerImage source={imageSrc} />
                <Description>
                    <NameText>{name}</NameText>
                    <RoleContainer>
                        <RoleText>{role}</RoleText>
                        <Dot />
                    </RoleContainer>
                </Description>
            </Container>
            <Bar barColor={barColor}>
                <BarText barColor={barColor}>{barText}</BarText>
            </Bar>

        </Wrapper>
    );
};

export default TrainerCard;
