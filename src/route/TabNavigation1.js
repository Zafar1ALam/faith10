import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import STYLES from '../STYLES';
import { View, Text } from 'react-native';
import COLORS from '../utilities/colors/Color';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import Vedio from '../screen/Vedio';
import Live from '../screen/Live';
import Wishlist from '../screen/Wishlist';
import Notes from '../screen/Notes';
import SelectBook from '../screen/SelectBook';

const Tab = createBottomTabNavigator();
const TabNavigation1 = () => {

    return (
        // <View style={{
        //     flex: 1,// backgroundColor: COLORS.black000000
        // }}>

        <Tab.Navigator
            //    initialRouteName='HomeHomeSearch'
            screenOptions={{
                headerShown: false,
                // tabBarBackground: COLORS.black000000
                tabBarStyle: {
                    backgroundColor: COLORS.black101010,
                    //backgroundColor: 'red'
                    height: 50,
                    //backgroundColor: 'red',
                    //     // paddingVertical: 25
                    paddingBottom: 5,
                    //     paddingHorizontal: '3%',
                    //     paddingTop: 10,
                    //     //    borderColor: COLORS.cylindricalFA4248,
                    //     borderTopWidth: 2,
                    //     borderTopColor: COLORS.cylindricalFA4248,
                    //     borderRightWidth: 2,
                    //     borderRightColor: COLORS.cylindricalFA4248,
                    //     borderLeftWidth: 2,
                    //     borderLeftColor: COLORS.cylindricalFA4248,
                    //     marginTop: 20

                },

            }}>
            <Tab.Screen name="Home" component={Vedio}
                options={{
                    tabBarLabel: ({ focused }) => {
                        if (focused) {
                            return (
                                <Text style={STYLES.fontSize12_green14CCEF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Home</Text>
                            )
                        } else {
                            return (
                                <Text style={STYLES.fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Home</Text>
                            )
                        }
                    },

                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <SvgXml xml={Svgs.greenHome} />
                            )
                        }
                        else {
                            return (
                                <SvgXml xml={Svgs.whiteHome}
                                />
                            )
                        }

                    }
                }} />
            <Tab.Screen name="Live" component={Live}
                options={{
                    tabBarLabel: ({ focused }) => {
                        if (focused) {
                            return (
                                <Text style={STYLES.fontSize12_green14CCEF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>live</Text>
                            )
                        } else {
                            return (
                                <Text style={STYLES.fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>live</Text>
                            )
                        }
                    },
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <SvgXml xml={Svgs.greenTv} />
                            )
                        }
                        else {
                            return (
                                <SvgXml xml={Svgs.whiteTv}
                                />
                            )
                        }

                    }
                }} />

            <Tab.Screen name="Wishlist" component={Wishlist}
                options={{
                    tabBarLabel: ({ focused }) => {
                        if (focused) {
                            return (
                                <Text style={STYLES.fontSize12_green14CCEF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Wishlist</Text>
                            )
                        } else {
                            return (
                                <Text style={STYLES.fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Wishlist</Text>
                            )
                        }
                    },
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <SvgXml xml={Svgs.greenHeart} />
                            )
                        }
                        else {
                            return (
                                <SvgXml xml={Svgs.whiteHeart}
                                />
                            )
                        }

                    }
                }} />
            <Tab.Screen name="Notes" component={Notes}
                options={{
                    tabBarLabel: ({ focused }) => {
                        if (focused) {
                            return (
                                <Text style={STYLES.fontSize12_green14CCEF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Notes</Text>
                            )
                        } else {
                            return (
                                <Text style={STYLES.fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Notes</Text>
                            )
                        }
                    },
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <SvgXml xml={Svgs.greenNotes} />
                            )
                        }
                        else {
                            return (
                                <SvgXml xml={Svgs.whiteNotes}
                                />
                            )
                        }

                    }
                }} />

            <Tab.Screen name="Book" component={SelectBook}
                options={{
                    tabBarLabel: ({ focused }) => {
                        if (focused) {
                            return (
                                <Text style={STYLES.fontSize12_green14CCEF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Book</Text>
                            )
                        } else {
                            return (
                                <Text style={STYLES.fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Book</Text>
                            )
                        }
                    },
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <SvgXml xml={Svgs.greenBooks} />
                            )
                        }
                        else {
                            return (
                                <SvgXml xml={Svgs.whiteBooks}
                                />
                            )
                        }

                    }
                }} />



        </Tab.Navigator>
        // </View>

    );
};

export default TabNavigation1;