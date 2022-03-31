import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Dimensions } from "react-native";
import COLORS from './utilities/colors/Color';



const STYLES = StyleSheet.create({


    container: {
        flex: 1,


        paddingHorizontal: '5%',
        paddingVertical: '5%',
        //  height: '100%',
        backgroundColor: COLORS.black101010,
        // backgroundColor: 'red'
    },
    withoutpaddingcontainer: {
        flex: 1, width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: COLORS.whiteFFFFFF
    },
    // fontSize25_000000_Roboto_Regular_38: {
    //     fontSize: 30,
    //     fontFamily: 'Roboto-Regular',
    //     //color: '#1C1A1A'
    //     // color: COLORS.black000000_38
    // },//
    fontSize26_green14CCEF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 26,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.green14CCEF,

    },
    fontSize26_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 26,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.whiteFFFFFF,

    },
    fontSize21_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 21,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.whiteFFFFFF,

    },
    fontSize18_green18D287_MADE_TOMMY_Medium_PERSONAL_USE_Medium: {
        fontSize: 18,
        fontFamily: 'MADE TOMMY Medium_PERSONAL USE',

        color: COLORS.whiteFFFFFF,

    },
    fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 16,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.whiteFFFFFF,

    },
    fontSize14_grey99999F_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 14,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.grey99999F,

    },
    fontSize12_green14CCEF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 12,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.green14CCEF,

    },
    fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 12,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.whiteFFFFFF,

    },
    // fontSize21_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
    //     fontSize: 21,
    //     fontFamily: 'MADE TOMMY Regular_PERSONAL USE',
    //     //fontWeight: "4",
    //     color: COLORS.whiteFFFFFF,

    // },



});

export default STYLES;