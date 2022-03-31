import React from 'react';
import { View, Text } from 'react-native'
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import { TouchableRipple } from 'react-native-paper';
const HeaderLeftTextRightSvg = (props) => {
    return (
        <View style={{

            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <Text
                style={STYLES.fontSize26_green14CCEF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>
                {props.text1}</Text>
            <TouchableRipple onPress={props.onPress}>
                <SvgXml xml={Svgs.searchIcon}
                />
            </TouchableRipple>

        </View>
    );
};

export default HeaderLeftTextRightSvg;