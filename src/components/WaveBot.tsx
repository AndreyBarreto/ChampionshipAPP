import React from 'react';
import { View, Button } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function WavyHeaderbot() {
    return (
        <View>
            <View style={{ backgroundColor: '#80B2FF', height: 140,marginTop:80 }}>
                <Svg
                    height="60%"
                    width="100%"
                    viewBox="0 0 1440 320"
                    style={{ position: 'absolute', top: -60 }}
                >
                    <Path fill="#80B2FF" fill-opacity="0.5" d="M0,192L80,165.3C160,139,320,85,480,101.3C640,117,800,203,960,208C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></Path>

                </Svg>
            </View>
        </View>
    );
}
