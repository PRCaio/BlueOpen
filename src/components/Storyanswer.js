import React from "react";
import { View, Text, Dimensions, ImageBackground, Image, StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native";


const Storyanswer = ({ close }) => (
    <View>
        <ImageBackground style={styles.body}>
            <TouchableOpacity style={styles.back} onPress={
                () => close()}>
                
                <View  style={styles.left1}/>
                <View  style={styles.left2}/>
            </TouchableOpacity>

            <Text style={styles.title}>COVID</Text>
            <Text style={styles.text}>O covid é algo ruim, só vacina pode te salvar</Text>
            

        </ImageBackground>
    </View>
)

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
       
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: `#1e90ff`
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: "bold"
    },
    back: {
        position: 'absolute',
        top: 30, 
        left: 25,
        width: 25,
        height: 25,
    },
    left1: {
        width: 25,
        height: 4,
        backgroundColor: 'white',
        transform: [{ rotate: '-30deg' }],
        borderRadius: 2
    },
    left2: {
        width: 25,
        height: 4,
        backgroundColor: 'white',
        transform: [{ rotate: '+30deg' }],
        borderRadius: 2,
        top: 8
    },
    text: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
}
)

export default Storyanswer;