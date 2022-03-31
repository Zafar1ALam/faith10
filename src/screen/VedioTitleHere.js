
import React, { useState, useRef, useEffect, } from 'react';
import {
    View, Text, FlatList, TouchableOpacity, Image,
    ScrollView, Share, Dimensions, StyleSheet, SafeAreaView
} from 'react-native'
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Svgs from '../utilities/svgs/Svgs';
import { TextInput, TouchableRipple } from 'react-native-paper';
import HeaderLeftTextRightSvg from '../comp/HeaderLeftTextRightSvg';
import COLORS from '../utilities/colors/Color';
import RBSheet from 'react-native-raw-bottom-sheet';
import Button1 from '../comp/Button1'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Slider from '@react-native-community/slider';
//import { Slider } from 'react-native-elements';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';

import HeaderLeftText from '../comp/HeaderLeftText';
// import VideoPlayer from "react-native-video-player";
import Add_Wishlist from '../../redux/constants';
import { useDispatch, useSelector } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import changeWishlist from '../../redux/actions/counts'
import Orientation from 'react-native-orientation-locker';
import Vedio from './Vedio';
const VedioTitleHere = ({ route, navigation }) => {
    const vedioRef = useRef();
    const { routeItem } = route.params;

    const [stateSlider, setStateSlider] = useState({
        currentTime: 0,
        duration: 0.1,

        paused: false,
        overlay: false
    });
    const { currentTime, duration, paused, overlay } = stateSlider;

    const refRBSheetAddNotes = useRef()
    const [stateDummy, setStateDummy] = useState(true)
    const [stateTitle, setStateTitle] = useState('');
    const [stateInformation, setStateInformation] = useState('');
    const [stateRecentVedioPlay, setStateRecentVedioPlay] = useState(routeItem)
    const [recentVediosFlatlsit, setRecentVediosFlatlist] = useState([
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
        },
    ])

    // console.log(stateRecentVedioPlay)
    const onShare = async (item) => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    //const dispatch = useDispatch();
    const selector = useSelector(val => val.checkValue.wishlist);

    const addWishlist = () => {
        // console.log(selector)
        selector.push(routeItem);
        //    dispatch(changeWishlist(routeItem.id))
        // dispatch(changeWishlist(
        //     reduxGetWishlist.push(routeItem)
        // ))
        navigation.navigate("Wishlist")
    }
    const position = getMinutesFromSeconds(currentTime);
    const fullDuration = getMinutesFromSeconds(duration);
    function getMinutesFromSeconds(time) {
        const minutes = time >= 60 ? Math.floor(time / 60) : 0;
        const seconds = Math.floor(time - minutes * 60);

        return `${minutes >= 10 ? minutes : '0' + minutes}:${seconds >= 10 ? seconds : '0' + seconds
            }`;
    }


    return (
        <SafeAreaView style={STYLES.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign name="arrowleft" size={20} color={COLORS.whiteFFFFFF}
                    style={{ marginRight: '10%' }}
                    onPress={() => { navigation.goBack() }} />
                <HeaderLeftText text1="Video Title Here"
                // onPress={() => { console.log('hhh') }} 
                />

            </View>

            {/* <View style={{ marginTop: '5%' }}> */}

            {/* <VideoPlayer style={{
                //   borderRadius: 25,
                marginTop: '4%'
            }} onStart={() => {
                setStateDummy(!stateDummy)
                recentVediosFlatlsit.push(routeItem)
            }}
                customStyles={{ seekBar: 'green' }}
                loop={true}
                video={{ uri: stateRecentVedioPlay.uri }}
                videoHeight={850}

                // videoHeight={800}

                thumbnail={{ uri: stateRecentVedioPlay.thumbnail }}
                //   showDuration
                //  pauseOnPress
                //fullScreenOnLongPress
                disableFullscreen={false}
                disableSeek={true}

            /> */}

            <View //style={{ height: 400, width: 300 }}
            >
                {/* <VideoPlayer
                    //toggleResizeModeOnFullscreen={true}
                    source={{ uri: stateRecentVedioPlay.uri }}
                    style={style.vedio}




                /> */}

                <Video source={{ uri: stateRecentVedioPlay.uri }}
                    ref={vedioRef}

                    //  progressUpdateInterval={2}
                    //fullscreen={true}
                    controls={true}
                    // presentFullscreenPlayer={hei}
                    // paused={paused}
                    // onSeek={({ seekTime, currentTime }) => {
                    //     seekTime: 100
                    //     currentTime: 100.5
                    // }}
                    onProgress={({ currentTime, playableDuration }) => {
                        //console.log(currentTime)
                        // console.log(currentTime)
                        //  console.log(playableDuration)

                        setStateSlider({
                            ...stateSlider, currentTime: currentTime
                        })
                    }}

                    onLoad={({ duration, currentPosition }) => {
                        // console.log(currentPosition)
                        // console.log(duration)
                        setStateSlider({
                            ...stateSlider, duration: duration
                        })//(duration)
                    }}
                    //controls={true}

                    resizeMode={'contain'}
                    style={{
                        width: Dimensions.get('window').width - 30,
                        height: Dimensions.get('window').width * (9 / 16),
                        backgroundColor: 'black',
                    }}


                // {stateSlider.}
                // seek={currentTime}

                />
                {/* <TouchableRipple style={{
                    position: 'absolute',
                    backgroundColor: COLORS.green074B08, height: 50, width: 50,
                    borderRadius: 50, justifyContent: 'center', alignItems: 'center'
                }} onPress={() => {
                    vedioRef.presentFullscreenPlayer()
                    // setStateSlider({
                    //     ...stateSlider,
                    //     currentTime: currentTime + 1
                    // })
                }}>
                    <SvgXml xml={Svgs.rightArrow} />
                </TouchableRipple> */}

                {/* <View style={{
                        flexDirection: 'row', //position: 'absolute',
                        width: '50%', justifyContent: 'space-between', top: "25%", left: "25%",
                        alignSelf: 'center'
                    }}>
                        <TouchableRipple style={{
                            backgroundColor: COLORS.black000000, height: 50, width: 50,
                            borderRadius: 50, justifyContent: 'center', alignItems: 'center'
                        }} onPress={() => {
                            // setStateSlider({
                            //     ...stateSlider,
                            //     currentTime: currentTime - 1
                            // })
                            console.log('left')
                        }}>
                            <SvgXml xml={Svgs.leftArrow} />
                        </TouchableRipple>
                        {stateSlider.paused ? <AntDesign name="play" size={50} onPress={() => {
                            // setStateSlider({ ...stateSlider, paused: false })
                            //console.log('a')
                        }} />
                            : <AntDesign name="pause" size={50} onPress={() => {
                                // setStateSlider({ ...stateSlider, paused: true })
                                //  console.log('a')
                            }} />}


                        <TouchableRipple style={{
                            backgroundColor: COLORS.black000000, height: 50, width: 50,
                            borderRadius: 50, justifyContent: 'center', alignItems: 'center'
                        }} onPress={() => {
                            console.log('right')
                            // setStateSlider({
                            //     ...stateSlider,
                            //     currentTime: currentTime + 1
                            // })
                        }}>
                            <SvgXml xml={Svgs.rightArrow} />
                        </TouchableRipple>
                    </View> */}
                {/* <View style={{
                        flexDirection: 'row',// backgroundColor: 'red',
                        alignItems: 'center', justifyContent: 'space-between',
                        width: '100%',
                        position: 'absolute', bottom: 0
                    }}>
                        <Slider
                            value={currentTime}

                            style={{
                                width: Dimensions.get('window').width - 80,
                                height: 40,
                            }}
                            minimumValue={0}
                            maximumValue={duration}
                            thumbTintColor={COLORS.whiteFFFFFF}
                            // value={currentTime / duration}
                            minimumTrackTintColor={COLORS.green14CCEF}
                            maximumTrackTintColor={COLORS.whiteFFFFFF}
                        // onValueChange={(p) => {
                        //     console.log(p)
                        // }}
                        />
                        <SvgXml xml={Svgs.cross} />
                    </View> */}


            </View>

            {/* <View style={style.sliderCont}>
                <View style={style.timer}></View>

            </View> */}
            {/* <Slider
                value={stateSlider.currentTime} // Which is updated by videoRef.onProgress listener
                onValueChange={value => vedioRef.seek(value)
                }
            /> */}

            {/* </View> */}

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: '3%'
            }}>
                <Text style={STYLES.fontSize14_grey99999F_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{stateTitle}</Text>
                <View style={{
                    flexDirection: 'row',
                    width: "30%", justifyContent: 'space-between'
                }}>
                    <SvgXml xml={Svgs.whiteHeart}
                        onPress={() =>
                            addWishlist()
                            //navigation.navigate("Wishlist",
                            //     { routeItem })
                        } />
                    <SvgXml xml={Svgs.whiteShare}
                        onPress={() => onShare()} />

                    <SvgXml xml={Svgs.whiteEdit}
                        onPress={() => { refRBSheetAddNotes.current.open() }} />
                </View>
            </View>
            <View style={{

                marginTop: '3%'
            }}>
                <Text
                    numberOfLines={4}
                    style={STYLES.fontSize14_grey99999F_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{stateInformation}</Text>
            </View>


            <View style={{

                marginTop: '3%'
            }}>
                <Text

                    style={STYLES.fontSize26_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>
                    Recent Vidoes
                </Text>
            </View>
            <FlatList style={{
                marginTop: '5%',
            }}
                showsVerticalScrollIndicator={false}
                // horizontal={false}

                data={recentVediosFlatlsit}
                renderItem={({ item }) => {
                    return (

                        <>
                            <TouchableOpacity style={{
                                //   backgroundColor: 'green',

                                height: 200,



                                // width: 85,
                                marginVertical: '4%',
                                borderRadius: 20,


                            }}
                                onPress={() => {
                                    setStateRecentVedioPlay(item)
                                    // console.log('oo')
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
                                // onPress={() => {
                                //     navigation.navigate("VedioTitleHere", {

                                //         routeItem: item

                                //     });
                                // }}
                                >
                                    <SvgXml xml={Svgs.vedioPauseButton}
                                    />

                                </TouchableRipple>




                            </TouchableOpacity>
                            <Text style={STYLES.fontSize14_grey99999F_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{item.text}</Text>
                        </>

                    )
                }}
                keyExtractor={(item) => item.id}

            />



            {/* Bottom sheet Add Notes */}
            <RBSheet
                closeOnPressMask={false}
                //  closeOnDragDown={false}
                //  closeOnDragDown={true}
                dragFromTopOnly={true}
                closeOnPressBack={false}
                height={340}
                animationType="slide"
                ref={refRBSheetAddNotes}
                closeOnDragDown={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(0,0,0,0.84)',
                        //backgroundColor: "transparent"

                    },
                    container: {
                        //justifyContent: "center",
                        //  alignItems: "center"
                        backgroundColor: COLORS.black000000,
                        marginHorizontal: '5%',
                        borderWidth: 1,
                        width: "95%",
                        alignSelf: "center",
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        borderColor: COLORS.green0DC1A7,
                        zIndex: 1
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}


            >
                <View style={{ flex: 1, paddingHorizontal: '4%' }}>
                    <View style={{
                        flexDirection: 'row', justifyContent:
                            'space-between',
                        marginBottom: '5%'
                    }}>
                        <Text style={STYLES.fontSize21_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>
                            ADD NOTES</Text>

                        <TouchableRipple
                            onPress={() => refRBSheetAddNotes.current.close()}

                            style={{


                            }}>
                            <SvgXml xml={Svgs.cross} />
                        </TouchableRipple>
                    </View>
                    <ScrollView>
                        <View style={{ marginTop: '5%' }}>
                            <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Title</Text>
                            <TextInput style={{ height: 35 }}
                                selectionColor={COLORS.whiteFFFFFF}

                                value={stateTitle}
                                activeUnderlineColor={COLORS.whiteFFFFFF}
                                onChangeText={(text) => {
                                    // setStateIsValidOldPassword(true)
                                    setStateTitle(text)
                                }} />
                            {/* {stateIsValidOldPassword == false ? <Text style={{ color: 'red' }}>Enter Valid OldPassword</Text> : null} */}
                        </View>

                        <View style={{ marginTop: '5%' }}>
                            <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Information</Text>
                            <TextInput style={{ height: 35, backgroundColor: COLORS.black101010 }}
                                value={stateInformation}
                                selectionColor={COLORS.whiteFFFFFF}

                                activeUnderlineColor={COLORS.whiteFFFFFF}
                                onChangeText={(text) => {
                                    //   setStateIsValidNewPassword(true)
                                    setStateInformation(text)
                                }} />
                            {/* {stateIsValidNewPassword == false ? <Text style={{ color: 'red' }}>Enter Valid New Password</Text> : null} */}
                        </View>

                        <View style={{
                            marginHorizontal: '5%', marginTop: '15%',
                            marginBottom: '5%', //backgroundColor: 'red',


                        }}>
                            <Button1 text="ADD NOTE"
                                onPress={() => { refRBSheetAddNotes.current.close() }}
                            />
                        </View>
                    </ScrollView>

                </View>
            </RBSheet>

        </SafeAreaView>
    );
};

export default VedioTitleHere;


const style = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject
    },
    video: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
})
