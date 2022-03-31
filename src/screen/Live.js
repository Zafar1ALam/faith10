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


const Live = props => {
    const [vedioFlatlist, setVedioFlatlist] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "by David Bowie"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "by David Bowie"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "by David Bowie"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "by David Bowie"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "by David Bowie"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d73',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "by David Bowie"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d76',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d79',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b10',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f611',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d7212',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },])
    return (
        <SafeAreaView style={STYLES.container}>
            <HeaderLeftText text1="Live"
            />

            <FlatList style={{
                marginTop: '5%',
            }}
                showsVerticalScrollIndicator={false}
                // horizontal={false}

                data={vedioFlatlist}
                renderItem={({ item }) => {
                    return (

                        <>
                            <TouchableOpacity style={{
                                //   backgroundColor: 'green',

                                height: 200,



                                // width: 85,
                                marginVertical: '4%',
                                borderRadius: 20,


                            }} onPress={() => {
                                // navigation.navigate("VedioTitleHere", {

                                //     routeItem: item

                                // });
                            }}
                            >

                                <Image
                                    source={{ uri: item.thumbnail }} style={{
                                        flex: 1, borderRadius: 16,
                                        borderWidth: 1,
                                        height: '100%',
                                        width: '100%'
                                    }} />

                                {/* <SvgXml xml={Svgs.vedioPauseButton}
                                    style={{
                                        position: 'absolute',
                                        top: '35%', left: '45%',
                                        height: 50,
                                        width: 50
                                    }} /> */}



                            </TouchableOpacity>
                            <Text style={STYLES.fontSize14_grey99999F_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{item.text}</Text>
                        </>

                    )
                }}
                keyExtractor={(item) => item.id}

            />
        </SafeAreaView>

    );
};

Live.propTypes = {

};

export default Live;