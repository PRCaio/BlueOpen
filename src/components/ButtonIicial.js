import React from "react";
import { View, Text, Dimensions, ImageBackground, Image, StyleSheet, TouchableHighlight } from "react-native";

const ButtonInitial = ({ item, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Stories')}>
    
        <View style={styles.texts}>
            <Text style={styles.number}>
                @{item.id}
            </Text>
            <Text style={styles.numberStores}>
                {item.numberStores} Histórias
            </Text>
        </View>
        <View style={styles.images}>
        </View>
        
   
     </TouchableHighlight>
)

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: 140,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    texts: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    number: {
        color: `#dcdcdc`,
        fontSize: 40,
        fontWeight: "bold"
    },
    numberStores: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    images: {
        flex: 2,
        flexDirection: "row",
        alignItems: "center",
        
        padding: 15
        

    },
    imgBg: {
        width: 80,
        height: 80,        
        bottom: -5,
        zindex: 4,
        transform: [{ rotate: '-10deg' }],
    },
    sImgBg: {
        width: 80,
        height: 80,        
        left: 35,
        transform: [{ rotate: '10deg' }],
        zindex: -4,
        bottom: -5,
    },
    tImgBg: {
        width: 90,
        height: 90,        
        left: -105,
        
        zindex: -4,
    },
}
)

export default ButtonInitial;