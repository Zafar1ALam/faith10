import React from 'react';
import { View, Text } from 'react-native'
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Svgs from '../utilities/svgs/Svgs';
import COLORS from '../utilities/colors/Color';
const HeaderLeftText = (props) => {
    return (
        <View style={{


        }}>

            <Text
                style={STYLES.fontSize26_green14CCEF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>
                {props.text1}</Text>

        </View>
    );
};

export default HeaderLeftText;