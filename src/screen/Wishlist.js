
import React, { useEffect, useState, useRef } from 'react';
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
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useSelector } from 'react-redux';
import { TextInput, TouchableRipple } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo'

const Wishlist = ({ route, navigation }) => {
    const searchInput = useRef();

    // const reduxGetWishlist = useSelector(val =>
    //     val.checkValue.wishlist
    // )
    // useEffect(() => {
    //     if (reduxGetWishlist.length > 0) {
    //         setStateIndicator(false)
    //     }
    //     console.log(reduxGetWishlist)
    // }, [])
    // const isFocused = useIsFocused();

    const [stateIndicator, setStateIndicator] = useState(false)


    const [wishListFlatlist, setWishlistFlatlist] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "by David Bowie"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1%27',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "by David Bowie"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
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
        },
    ])


    const [stateSearchBar, setStateSearchBar] = useState({
        bool: false,
        value: 'firstTime'
    })

    const [stateWishListFilteredData, setStateWishListFilteredData] = useState([])


    const searchWishlist = (searchText) => {



        let filteredData = wishListFlatlist.filter(function (item) {

            // console.log(item)
            //console.log(item.text.toLowerCase())
            var searchTextLowerCase = searchText.toLowerCase();
            var itemTitleLowerCase = item.text.toLowerCase();
            var a = itemTitleLowerCase.includes(searchTextLowerCase);

            return a
        });


        setStateWishListFilteredData(filteredData);

        setStateSearchBar({ ...stateSearchBar, bool: true, value: "secondTime" })

    };


    return (
        <SafeAreaView style={STYLES.container}>

            {stateSearchBar.bool ?
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableRipple style={{ marginRight: '10%' }}
                        onPress={() => {
                            setStateSearchBar({
                                ...stateSearchBar, bool: false,
                                value: "firstTime"
                            })
                        }}>
                        <AntDesign name="arrowleft" size={20} color={COLORS.whiteFFFFFF}


                        />
                    </TouchableRipple>
                    <TextInput placeholder='Search Wishlist'
                        ref={searchInput}
                        autoFocus={true}
                        //selectionColor={COLORS.whiteFFFFFF}
                        activeUnderlineColor={COLORS.whiteFFFFFF}
                        style={{
                            height: 30,
                            flex: 1
                        }} onChangeText={(text) => { searchWishlist(text) }} />

                    <Entypo name="cross" color={COLORS.whiteFFFFFF}
                        size={20}
                        style={{ marginLeft: '5%' }}
                        size={20}
                        onPress={() => {
                            searchInput.current.clear()
                            setStateSearchBar({ ...stateSearchBar, bool: true, value: "firstTime" })
                        }}
                    />
                </View> :
                <HeaderLeftTextRightSvg text1="Wishlist"
                    onPress={() => {
                        setStateSearchBar({
                            ...stateSearchBar, bool: true,
                            value: "firstTime"
                        })
                    }} />}


            {stateIndicator ? <ActivityIndicator size="large" animating={stateIndicator}
                style={{
                    flex: 1, backgroundColor: 'transparent',
                    position: 'absolute',
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height

                }} /> :



                <FlatList style={{
                    marginTop: '5%',
                }}
                    showsVerticalScrollIndicator={false}
                    // horizontal={false}

                    // data={wishListFlatlist}
                    data={stateSearchBar.value == "firstTime"
                        ? wishListFlatlist : stateWishListFilteredData}
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

                                    <SvgXml xml={Svgs.vedioPauseButton}
                                        style={{
                                            position: 'absolute',
                                            top: '35%', left: '45%',
                                            height: 50,
                                            width: 50
                                        }} />



                                </TouchableOpacity>
                                <Text style={STYLES.fontSize14_grey99999F_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{item.text}</Text>
                            </>

                        )
                    }}
                    keyExtractor={(item) => item.id}

                />
            }


        </SafeAreaView>
    );
};

export default Wishlist;
