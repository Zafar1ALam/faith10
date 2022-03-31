
import React, { useEffect, useState } from 'react';
import {
    View, Text, FlatList, TouchableOpacity, Image,
    ActivityIndicator,
    Dimensions,
    SafeAreaView
} from 'react-native'
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import { useIsFocused } from '@react-navigation/native';
import Svgs from '../utilities/svgs/Svgs';
import HeaderLeftTextRightSvg from '../comp/HeaderLeftTextRightSvg';
import COLORS from '../utilities/colors/Color';
import HeaderLeftText from '../comp/HeaderLeftText';
import { TouchableRipple } from 'react-native-paper';


const SelectBook = ({ navigation }) => {
    const [bookFlatlist, setBookFlatlist] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',

            name: "Book Name Here",

        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',

            name: "Book Name Here",
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            name: "Book Name Here",
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',
            name: "Book Name Here",
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
            name: "Book Name Here",
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d73',
            name: "Book Name Here",
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4',
            name: "Book Name Here",
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
            name: "Book Name Here",

        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d76',
            name: "Book Name Here",
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7',
            name: "Book Name Here",
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68',
            name: "Book Name Here",
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d79',
            name: "Book Name Here",
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b10',
            name: "Book Name Here",
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f611',
            name: "Book Name Here",
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d7212',
            name: "Book Name Here",
        },])
    return (
        <SafeAreaView style={STYLES.container}>
            <HeaderLeftText text1="Select Book"
            />

            <FlatList style={{
                marginTop: '5%',
            }}
                showsVerticalScrollIndicator={false}
                // horizontal={false}

                data={bookFlatlist}
                renderItem={({ item }) => {
                    return (

                        <TouchableRipple
                            style={{ marginBottom: '5%', }}
                            onPress={() => {
                                navigation.navigate("SelectChapter")
                            }}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: 'space-between'
                                , borderRadius: 6,
                                backgroundColor: COLORS.grey303033
                                ,
                                paddingVertical: '4%',
                                paddingHorizontal: '4%'
                            }}>
                                <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{item.name}</Text>
                                <SvgXml xml={Svgs.rightArrow} />
                            </View>
                        </TouchableRipple>

                    )
                }}
                keyExtractor={(item) => item.id}

            />

        </SafeAreaView>
    );
};

export default SelectBook;