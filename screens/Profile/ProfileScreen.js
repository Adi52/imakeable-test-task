import React from 'react';

import Button from "../../components/Button/Button";
import {Container} from "./ProfileScreen.style";

const ProfileScreen = ({navigation}) => {
    return (
        <Container>
            <Button
                active
                title={'Show Match'}
                onPress={() => navigation.navigate('MatchResults')}
            />
        </Container>
    )
}

export default ProfileScreen;
