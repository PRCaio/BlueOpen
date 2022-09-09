import React from "react";
import { View, Text, Dimensions, ImageBackground, Image, StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native";

const Storyletter = ({ close, open }) => (
   <View>
    <ImageBackground style={styles.body}>
            <TouchableOpacity style={styles.back} onPress={
                () => close()}>
                
                <View  style={styles.left1}/>
                <View  style={styles.left2}/>
            </TouchableOpacity>

            <Text style={styles.title}>Doença</Text>
            <Text style={styles.text}>Alguém espirrou do lado de Frodo, na terça, no sábado ele sentiu dores de cabeça...</Text>
            <TouchableOpacity style={styles.solution} onPress={
                () => open()}>
            <Text style={styles.text2}>A verdade</Text>
            </TouchableOpacity>

        </ImageBackground>
   </View>
)

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
       
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: `#20b2aa`
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
        fontWeight: "bold",
        margin: 10
    },
    text2: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        margin: 10
    },

    solution:{
        position: "absolute",
        bottom: 40,
        width: 120,
        height: 60,
        backgroundColor: `#20b2aa`,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center"
        
        

    }
}
)

export default Storyletter;