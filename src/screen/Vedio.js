import React, { useState, useRef } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, SafeAreaView, } from 'react-native'
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import SplashScreen from 'react-native-splash-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Svgs from '../utilities/svgs/Svgs';
import HeaderLeftTextRightSvg from '../comp/HeaderLeftTextRightSvg';
import COLORS from '../utilities/colors/Color';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
import { Card, TextInput, TouchableRipple } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo'
const Vedio = ({ navigation }) => {
    const searchInput = useRef();
    SplashScreen.hide();
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
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "by David Bowie"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "by David Bowie"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d76',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "by David Bowie"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "by David Bowie"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "by David Bowie"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d79',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "by David Bowie"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b10',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "by David Bowie"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f611',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "by David Bowie"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d7212',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "ay David Bowie"
        },])

    const [stateSearchBar, setStateSearchBar] = useState({
        bool: false,
        value: 'firstTime'
    })

    const [stateVideosFilteredData, setStateVediosFilteredData] = useState([])


    const searchVedio = (searchText) => {



        let filteredData = vedioFlatlist.filter(function (item) {

            // console.log(item)
            //console.log(item.text.toLowerCase())
            var searchTextLowerCase = searchText.toLowerCase();
            var itemTitleLowerCase = item.text.toLowerCase();
            var a = itemTitleLowerCase.includes(searchTextLowerCase);

            return a
        });


        setStateVediosFilteredData(filteredData);

        setStateSearchBar({ ...stateSearchBar, bool: true, value: "secondTime" })

    };
    return (
        <SafeAreaView style={STYLES.container}>

            {stateSearchBar.bool ?
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableRipple onPress={() => {
                        setStateSearchBar({
                            ...stateSearchBar, bool: false,
                            value: "firstTime"
                        })
                    }} style={{ marginRight: '10%' }}>
                        <AntDesign name="arrowleft" size={20} color={COLORS.whiteFFFFFF}


                        />
                    </TouchableRipple>
                    <TextInput placeholder='Search Vedios'
                        autoFocus={true}
                        mode='flat'
                        ref={searchInput}
                        selectionColor={COLORS.whiteFFFFFF}
                        activeUnderlineColor={COLORS.whiteFFFFFF}
                        style={{
                            height: 30,
                            flex: 1
                        }} onChangeText={(text) => { searchVedio(text) }} />
                    <Entypo name="cross" color={COLORS.whiteFFFFFF}
                        size={20}
                        style={{ marginLeft: '5%' }} onPress={() => {
                            searchInput.current.clear()
                            setStateSearchBar({ ...stateSearchBar, bool: true, value: "firstTime" })
                        }}
                    />
                </View> :
                <HeaderLeftTextRightSvg text1="Video"
                    onPress={() => {
                        setStateSearchBar({
                            ...stateSearchBar, bool: true,
                            value: "firstTime"
                        })
                    }} />}





            <FlatList style={{
                marginTop: '5%',
            }}
                showsVerticalScrollIndicator={false}
                // horizontal={false}

                //data={vedioFlatlist}
                data={stateSearchBar.value == "firstTime"
                    ? vedioFlatlist : stateVideosFilteredData}
                renderItem={({ item }) => {
                    return (

                        <>
                            <Card style={{
                                //   backgroundColor: 'green',

                                height: 200,



                                // width: 85,
                                marginVertical: '4%',
                                borderRadius: 20,


                            }} onPress={() => {
                                navigation.navigate("VedioTitleHere", {

                                    routeItem: item

                                });
                            }}
                            >

                                <Image
                                    source={{ uri: item.thumbnail }} style={{
                                        flex: 1, borderRadius: 16,
                                        borderWidth: 1,
                                        height: '100%',
                                        width: '100%'
                                    }} />

                                <TouchableRipple style={{
                                    position: 'absolute',
                                    top: '35%', left: '42%',
                                    height: 50,
                                    width: 50, justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                    onPress={() => {
                                        navigation.navigate("VedioTitleHere", {

                                            routeItem: item

                                        });
                                    }}>
                                    <SvgXml xml={Svgs.vedioPauseButton}
                                    />

                                </TouchableRipple>


                            </Card>
                            <Text style={STYLES.fontSize14_grey99999F_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{item.text}</Text>
                        </>

                    )
                }}
                keyExtractor={(item) => item.id}

            />




        </SafeAreaView>
    );
};

export default Vedio;
