import React from 'react';
import theme from "../../constants/theme";
import {LinearGradient} from "expo-linear-gradient";
import {BarTitle, Container} from "./GradientBar.style";
import {StyleSheet} from 'react-native';

const GradientBar = ({variant, text}) => {

    const gradientColors = variant === 'green' ? [theme.colors.greenGradientTo, theme.colors.greenGradientFrom]
        : [theme.colors.magentaGradientTo, theme.colors.magentaGradientFrom]

    return (
        <>
            <LinearGradient
                colors={gradientColors}
                start={[0, -0.1]}
                style={styles.gradient}
            >
                <BarTitle>{text}</BarTitle>
            </LinearGradient>
        </>
    );
};

const styles = StyleSheet.create({
    gradient: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: theme.spacing.xs/2,
        borderRadius: 50,
    }
})

export default GradientBar;
