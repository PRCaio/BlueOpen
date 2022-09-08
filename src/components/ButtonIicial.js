import React from "react";
import { View, Text, Dimensions, ImageBackground, Image, StyleSheet } from "react-native";

const ButtonInitial = ({ item }) => (
    <ImageBackground style={{ 
            width: '100%',
            height: 140,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: item.bgColor
        }} 
        //source={item.imgBg}
        >
        <View style={styles.texts}>
            <Text style={styles.number}>
                @{item.id}
            </Text>
            <Text style={styles.numberStores}>
                {item.numberStores} Histórias
            </Text>
        </View>
        <View style={styles.images}>
            <Image style={styles.imgBg} source={item.stores[1].imgBg} />
            <Image style={styles.sImgBg} source={require('./../images/casa.jpeg')} />
            <Image style={styles.tImgBg} source={item.stores[1].imgBg} />
        </View>
        
    </ImageBackground>
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