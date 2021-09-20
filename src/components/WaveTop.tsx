import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function WavyHeader() {
    return (
        <View>
            <View style={{ backgroundColor: '#80B2FF', height: 90 }}>
                <Svg
                    height="60%"
                    width="100%"
                    viewBox="50 60 1340 110"
                    style={{ position: 'absolute', top: 90 }}
                >
                    <Path fill="#80B2FF" fill-opacity="0.5" d="M0,64L60,101.3C120,139,240,213,360,240C480,267,600,245,720,213.3C840,181,960,139,1080,138.7C1200,139,1320,181,1380,202.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></Path>

                </Svg>
            </View>
        </View>
    );
}
