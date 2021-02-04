import React from 'react';
import {TouchableNativeFeedback} from 'react-native';
import {
    FeedbackNativeWrapper,
    PrimaryButton,
    PrimaryButtonText,
} from './Button.style';

const Button = ({active, onPress, title}) => {
    return (
        <FeedbackNativeWrapper>
            <TouchableNativeFeedback onPress={onPress}>
                <PrimaryButton active={active}>
                    <PrimaryButtonText active={active}>{title}</PrimaryButtonText>
                </PrimaryButton>
            </TouchableNativeFeedback>
        </FeedbackNativeWrapper>
    );
};

export default Button;
