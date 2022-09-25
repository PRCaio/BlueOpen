import react, { useState, useEffect } from "react";
import { FlatList, View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Image, TouchableHighlight } from "react-native";
import ButtonInitial from "../components/ButtonIicial";
import axios from "axios";
import Grafic from "./Grafic";


const baseURL = "https://blue-openapi-2b91.vercel.app/api/data-account";



export default function Home({ navigation }) {
    const [valueTransation, setValueTransation] = useState([])

    useEffect(() => {
        // Update the document title using the browser API
        axios.get(baseURL).then((response) => {
            setValueTransation(response.data.newItems);
        });
        console.log(valueTransation)
    }, []);

    const renderItem = ({ item }) => (
        <ButtonInitial item={item} navigation={navigation} />
    );
    const renderItem2 = ({ item }) => (
        <View>
            <View style={styles.componentAmount}><View style={styles.componentAmountText}><Text style={styles.textAmount}>{item.transactionDate} - {item.transactionName} - {item.organizationName}</Text></View><View style={styles.componentAmount}><Text style={styles.textAmount}> R$ {item.amount}</Text></View></View>
            <View style={{ height: 1, backgroundColor: 'black' }}></View>
        </View>
    );
    var newList = []
    for (var i = 0; i < valueTransation.length; i++) {
        if (valueTransation[i].transactionDate.includes('2022-09') == true) {
            newList.push(valueTransation[i])
        }
    }


    
    var amountBtg = 0
    var i = 0
    var a = 0
    for (; i < valueTransation.length; i++) {
        if (valueTransation[i].organizationName.includes('BTG') == true) {
            amountBtg = amountBtg + valueTransation[i].amount
        }
        console.log(amountBtg)
    }

    var amountBra = 0
    var i = 0
    var a = 0
    for (; i < valueTransation.length; i++) {
        if (valueTransation[i].organizationName.includes('Bradesco') == true) {
            amountBra = amountBra + valueTransation[i].amount
        }
        console.log(amountBra)
    }
    
    return (
        <View>
            <ScrollView>

                <Grafic bra={amountBra} btg={amountBtg}/>

                <View style={{ flexDirection: 'row', alignItens: 'center', display: 'flex', justifyContent: "center" }}>
                    <View style={{
                        width: 20,
                        height: 20,
                        backgroundColor: `#0000cd`,
                        borderRadius: 13,
                        margin: 15,
                    }} />
                    <Text style={{ margin: 15 }}>BTG Pactual</Text>
                    <View style={{
                        width: 20,
                        height: 20,
                        backgroundColor: 'red',
                        borderRadius: 13,
                        margin: 15
                    }} />
                    <Text style={{ margin: 15, width: 80 }}>Bradesco</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginBottom: 15 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('NextMonths', { date: '2022-08' })}>
                        <View style={styles.buttonResume}><Text style={styles.textButton2}>Agosto</Text></View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('NextMonths', { date: '2022-10' })}>
                        <View style={styles.buttonResume}><Text style={styles.textButton2}>Outubro</Text></View>

                    </TouchableOpacity>
                </View>
            </ScrollView>
            <FlatList
                data={newList}
                renderItem={renderItem2}
                keyExtractor={item => item.transactionId}
            />
            {/* <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            /> */}

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
        fontSize: 15,
        fontWeight: "bold"
    },
    textAmount: {
        fontSize: 14,
        fontWeight: "bold",
        color: 'black'

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
    marc: {
        width: 20,
        height: 20,
        backgroundColor: 'red',
        borderRadius: 13

    },
    buttonResume: {
        width: 120,
        height: 40,
        backgroundColor: `#778899`,
        borderRadius: 15,
        marginLeft: 58,
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        color: 'white',
        fontSize: 30,




    }, textButton2: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'white',
        textAlign: 'center'

    },
}
)