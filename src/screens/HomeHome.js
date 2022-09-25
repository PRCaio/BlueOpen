import react, { useState, useEffect } from "react";
import { FlatList, View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, TouchableHighlight } from "react-native";
import ButtonInitial from "../components/ButtonIicial";
import axios from "axios";


var baseURL = ''


export default function HomeHome({ navigation }) {
    const [valueTransation, setValueTransation] = useState([])

    useEffect(() => {
        // Update the document title using the browser API
        axios.get(baseURL).then((response) => {
            setValueTransation(response.data.newItems);
        });
        console.log(valueTransation)
    }, []);

    

    return (
        <View>

            <View style={styles.bodyTop}>
                <View style={{ height: 200, justifyContent: "center", alignItems: 'center', width: '90%' }}>
                    <Text style={styles.textAmount}>Adicione bancos ao seu resumo e ganhe cupons de descontos exclusivos!</Text>
                    <Text style={styles.number}>50 pts</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <View style={styles.buttonResume}><Text style={styles.textAmount}>Resumo</Text></View>
                        
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Tickets')}>
                        <View style={styles.buttonResume}><Text style={styles.textAmount}>Cupons</Text></View>

                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bodyBot}>

                <Text>valor</Text>
            </View>

            <View></View>
        </View>
    )
}


const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: 90,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    texts: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    number: {
        color: "white",
        fontSize: 45,
        fontWeight: "bold",
        textAlign: 'center'
    },
    textAmount: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'white',
        textAlign: 'center'

    },
    componentAmountText: {
        width: 300,
        height: 40,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 12,
        display: 'flex',
        marginTop: -9

    },
    images: {
        flex: 3,
        flexDirection: "row",
    },
    imgBg: {
        width: 70,
        height: 70
    },
    componentAmount: {
        height: 40,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 12,
        marginTop: -9

    },
    bodyTop: {
        height: 310,
        backgroundColor: `#1e90ff`,
        alignItems: 'center'
    },
    bodyBot: {
        flex: 1,
        backgroundColor: `white`,
    },
    buttonResume: {
        width: 120,
        height: 70,
        backgroundColor: `#778899`,
        borderRadius: 15,
        marginLeft: 58,
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        color: 'white',
        fontSize: 30,
        

    }

}
)