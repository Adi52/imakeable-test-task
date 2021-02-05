import React from 'react';
import {Container, Description} from "./TeamTile.style";
import {Ionicons} from "@expo/vector-icons";
import theme from "../../constants/theme";
import GradientBar from "../GradientBar/GradientBar";



const TeamTile = ({title, name, color}) => {

    return (
        <Container>
            <Ionicons name="ios-football" size={35} color={color === 'green' ? theme.colors.green : theme.colors.magenta} />
            <Description>{title}</Description>
            <GradientBar variant={color} text={name} />
        </Container>
    );
};

export default TeamTile;
