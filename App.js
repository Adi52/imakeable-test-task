import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import AppNavigation from "./navigation/AppNavigation";
import theme from "./constants/theme";


const fetchFonts = () => {
    return Font.loadAsync({
        'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-semi': require('./assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf')
    });
};


export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoaded(true)}
                onError={(err) => console.log(err)}
            />
        );
    }


    return (
        <>
            <AppNavigation/>
            {/*<StatusBar*/}
            {/*    // setStatusBarTanslucent={true}*/}
            {/*/>*/}
        </>
    );
}
