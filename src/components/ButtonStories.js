import React, {useState} from "react";
import { View, Text, Dimensions, ImageBackground, Image, StyleSheet, Modal, TouchableOpacity } from "react-native";
import Storyletter from "./Storyletter";
import Storyanswer from "./Storyanswer";

const ButtonStories = ({ item }) =>{ 
    const [modalStorie, setModalStorie] = useState(false)
    const [modalAnswer, setModalAnswer] = useState(false)
    
    return(    
    <View>
        <Modal visible={modalStorie} animationType="slide" transparent={false}>

            <Storyletter close={ () => setModalStorie(false)} open={() => setModalAnswer(true)}/>
        </Modal>
        <Modal visible={modalAnswer} animationType="slide" transparent={false}>

            <Storyanswer close={ () => setModalAnswer(false)}/>
        </Modal>
        <TouchableOpacity onPress={() => setModalStorie(true)}>
            <ImageBackground style={{
                width: Dimensions.get("screen").width * 0.4999,
                height: Dimensions.get("screen").width * 0.50,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: item.bgColor
            }}
                source={item.imgBg}
            >
                <View style={styles.texts}>
                    <Text style={styles.numberStores}>
                        {item.numberStores} Histórias
                    </Text>
                </View>


            </ImageBackground>
        </TouchableOpacity>

    </View>
)}

const styles = StyleSheet.create({
    body: {
        width: Dimensions.get("screen").width * 0.50,
        height: Dimensions.get("screen").width * 0.50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    texts: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 10,
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

export default ButtonStories;